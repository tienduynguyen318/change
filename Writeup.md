# Write up

## Architecture

The code is refactored using hexagonal architecture

At the core of the application is the business logic, represented by services and models package
Surround the core is the adapters, which define interface to the external world, include the webserver and the repository package
Hexagonal architecture allow the separation between the business logic and outside world

### Advantage

1. It make it possible to change internal representation without breaking interaction with external modules and change technology will not affect internal representation

2. It also possible to build stub and test the domain separately from external system. In the original code, in order to test the rest api endpoint (test/index.test.js), the setup need to include a database. The test would not work when the database is not initalize or not initialize correct. That show the coupling between the api and the database when the api should only concern about validate the incoming payload and check the response and the status it returns. The database failure should not concern the api and should not affect the test result

3. Since the logic is separate from external modules, it can easy switch to another module that fit the use case more i.e. switching lowdb to another database.

### Disadvantage

The disadvantage for this separation is more code and mapping between module. In this example, a decision was made to keep the
domain model (models/rating/rating.js) and storage model (src/repository/rating.js) similar to simplify the mapping

## Dependencies

The two package added is sinon and chai mainly for the purpose of mocking and stubing layer
