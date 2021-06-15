haskap: cmd/haskap/main.go go.mod
	go fmt ./...
	go mod tidy
	go build -o haskap ./cmd/...

.PHONY: run
run:
	go fmt ./...
	go mod tidy
	go run ./cmd/...

.PHONY: init
init:
	go mod init github.com/w-haibara/haskap
	go mod tidy

.PHONY: test
test:
	go fmt ./...
	go test ./...

.PHONY: docker
docker:
	docker build -t haskap .
	docker run --rm -it haskap
