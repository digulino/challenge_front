## Introduction
This project is an implemetation of front end using Angular 5 
to support a back end using Java, Spring Boot and PostgreSQL

### How to run 

  - Download/clone the project. 
  - Open command prompt and go to the root location of the downloaded project. Then run following command 
```sh
        ng serve 
```

### What this project contains

This Angular project is a implementation of a simple CRUD operation of `Person` entity.
It also includes an export functionality to download a `xlsx` file with all the data inside the table in the main page.

### Known issues

  - The date displaying on table is showing values one day before the real model`s value
  - When accessing `ALTERAR` button, the displayed form doesn't load properly the date value.
  - The unit tests and e2e tests weren't implemented
