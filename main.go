package main

import (
	"crypto/subtle"
	"encoding/csv"
	"log"
	"os"

	docker "haskap/docker"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	e := echo.New()

	e.Use(middleware.BasicAuth(func(username, password string, c echo.Context) (bool, error) {
		authFileName := "auth.csv"
		authUsername, authPassword, err := getSecret(authFileName)
		if err != nil {
			log.Println(err)
			panic(err)
		}

		err = bcrypt.CompareHashAndPassword([]byte(password), authPassword)
		if subtle.ConstantTimeCompare([]byte(username), authUsername) == 1 &&
			err != nil {
			return true, nil
		}
		log.Println(err)
		return false, err
	}))

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Static("/", "public/")

	e.GET("/containers", docker.GetContainers)
	e.POST("/containers", docker.CreateContainer)
	e.DELETE("/users/:id", docker.DeleteContainer)

	e.Logger.Fatal(e.Start(":8080"))
}

func getSecret(fileName string) ([]byte, []byte, error) {
	f, err := os.Open(fileName)
	if err != nil {
		return nil, nil, err
	}
	defer f.Close()

	r := csv.NewReader(f)
	r.Comma = ','

	recode, err := r.Read()
	if err != nil {
		return nil, nil, err
	}

	return []byte(recode[0]), []byte(recode[1]), nil
}
