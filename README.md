# Build a simple HTTP web server API

RestApi has been developed using nodejs modules `express` and `axios` and for test automation, `supertest` and `jest` testing modules have been used.


# Getting Started

## Setup
### Install NodeJS
### Install Docker
### Clone the repo and CD to Project Dir
### Install Node Dependenices
``` npm install```

## For running the app
``` node index.js ```
- Open the browser and enter http://localhost:8080/[username] e.g. http://localhost:8080/octocat

### Testing the app
node test

### Containerization
- CD to Project Dir
Create an docker image which will be based on Dockerfile
- Docker build -t [replace with tag] .
- Docker image ls [to check image]
Create and Start a container based on the image
- Docker run -d --name [replace with some name] -p 8080:8080 IMAGE TAG
- Docker container ps [to check if container is running]





