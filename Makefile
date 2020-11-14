haskap: *.go */*.go
	gofmt -w *.go */*.go
	go build -o haskap main.go

.PHONY: init
init:
	go mod init haskap

.PHONY: test
test:
	gofmt -w *.go
	go test
