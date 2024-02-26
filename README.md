# Overview

This application is a launching off point to quickly bootstrap a Node and Express server using TypeScript. 

The application has been Dockerized to simplify development and deployment.

## Set up

- Clone this repo and assign a new project name
- Remove the old git history and initiliaze a new one `rm -rf .git && git init`
- Install the necessary packages with `npm install`
- Create your .env file - an example.env file is provided for convenience `mv example.env .env`
- Update your .env file to use your desired credentials
- Update package.json to reflect the new project name
- Start the container! `docker compose up`
