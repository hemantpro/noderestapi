# Build a simple HTTP web server API

Sample RestApi has been developed using following nodejs modules

- `express` and `axios` 

And for test automation, following nodejs modules have been used:

- `supertest` and `jest` node modules have been used for automated test.


# Getting Started
There are two approaches to run this application
- Using Docker Container
- Or Running via NodeJS

## With Docker
### Install Docker
- Docker Engine / Docker Desktop
>-https://docs.docker.com/engine/install/
>-https://docs.docker.com/get-started/introduction/get-docker-desktop/

## - Running the app
- Clone the repo and CD to Project Dir
- Create an docker image based on the Dockerfile
>- Docker build -t "[add a tag]" .
>- Docker image ls ->> [to check if image is available]
- Create and Start a container based on the image
>- Docker run -d --name [replace with some name] -p 8080:8080 IMAGE TAG
>- Docker container ps [to check if container is running]

- Open the browser and enter http://localhost:8080/[username] e.g. http://localhost:8080/octocat

## With Node

### Install NodeJS
https://nodejs.org/en/download

### Clone the repo and CD to Project Dir
### Install Node Dependenices based on package.json
``` npm install```

## For running the app
``` node index.js ```
- Open the browser and enter http://localhost:8080/[username] e.g. http://localhost:8080/octocat

### Testing the app
node test




