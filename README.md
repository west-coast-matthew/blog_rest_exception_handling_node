![Alt text](images/mock-api.png)

# Exception handling demo (Node)

## Background
	This application serves as a demonstration of how to handle exception handling in a centralized approach within a REST API.

	For this minimal example, we demonstrate that at some point down the request chain, and exception occurs, wrappered in a custom exception, and then bubbled up to middlware, which centralizes the exception handling logic, and standardizes the responses returned from the API.

## Api endpoints

the following calls are availble, and exposed as HTTP GEt for convenience.

Produce a standard HTTP 500 response

`/example/validationFail`

Demonstrate the ability to catch and respond to invalid requests

`/example/systemException`


## Starting the application
npm run start

You can find more details on my personal blog [https://www.matthewdalby.dev]()