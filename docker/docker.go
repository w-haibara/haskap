package docker

import (
	"context"
	"log"
	"net/http"
	"strconv"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/labstack/echo"
)

type (
	// Container is ...
	Container struct {
		ID    string `json:"id"`
		Image string `json:"image"`
		Name  string `json:"name"`
	}
)

// GetContainers is ...
func GetContainers(c echo.Context) error {
	cli, err := client.NewEnvClient()
	if err != nil {
		log.Println(err)
		return err
	}

	containers, err := cli.ContainerList(context.Background(),
		types.ContainerListOptions{
			All: true,
		})
	if err != nil {
		log.Println(err)
		return err
	}

	return c.JSON(http.StatusOK, containers)
}

// CreateContainer is ...
func CreateContainer(c echo.Context) error {
	type Image struct {
		Name string `json:"name" form:"name" query:"name"`
	}
	image := new(Image)
	if err := c.Bind(image); err != nil {
		panic(err)
	}

	ctx := context.Background()
	cli, err := client.NewEnvClient()
	if err != nil {
		log.Println(err)
		return err
	}

	if _, err = cli.ImagePull(ctx, "docker.io/library/"+image.Name, types.ImagePullOptions{}); err != nil {
		panic(err)
	}

	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image: image.Name,
		Cmd:   []string{"echo", "hello world"},
		Tty:   false,
	}, nil, nil, "")
	if err != nil {
		panic(err)
	}

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err != nil {
		panic(err)
	}

	return c.JSON(http.StatusOK, resp)
}

// DeleteContainer is ...
func DeleteContainer(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	println("delete", id)
	return c.NoContent(http.StatusNoContent)
}
