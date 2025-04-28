# Overview

This script is to build a HTTP web server API in nodejs that interacts with the GitHub API and responds to requests on /<USER> with a list of the user’s publicly available Gists.

http://localhost:8080/octocat

# Prerequisites

- Docker is installed and running locally
- Latest Node.js installed

### Install Docker
- Docker Engine / Docker Desktop
> https://docs.docker.com/engine/install/

> https://docs.docker.com/get-started/introduction/get-docker-desktop/

### Install NodeJS
> https://nodejs.org/en/download

# Script high-level Info

RestApi has been developed using following nodejs modules

- `express` and `axios` 

And for test automation, following nodejs modules have been used:

- `supertest` and `jest`


# Getting Started
## Get the sample application
Clone the sample application to use with this Readme. Open a terminal, change directory to a directory that you have used to clone the code.

## Build HTTP WebServer
- Install Node Dependenices based on package.json

` npm install`

### Running the app

``` node index.js ```
- Open the browser and enter http://localhost:8080/[username] e.g. http://localhost:8080/octocat

### Testing the app
```node test```

## Dockerize the WebServer API
- Confirm you are in the root of project directory
- Create an docker image based on the Dockerfile
> 
`
Docker build -t "hg/gist" .
`
>- Docker image ls ->> [to check if image is available]
- Create and Start a container based on the image
>- Docker run -d --name [replace with some name] -p 8080:8080 IMAGE TAG

### Running the app
>- Docker container ps [to check if container is running]

- Open the browser and enter http://localhost:8080/[username] e.g. http://localhost:8080/octocat

## With Node

### Running the app

- Clone the repo and CD to Project Dir









