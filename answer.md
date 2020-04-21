
- [X] Mention two parts of Express that you learned about this week.

- [X] Describe Middleware?

- [X] Describe a Resource?

- [X] What can the API return to help clients know if a request was successful?

- [X] How can we partition our application into sub-applications?

We learned middleware and router resources and this week. Both of these are used together to create the APIs that we are used to experiencing as users in our modern web applications.

MiddleWare is common functionality that can be accessed through APIs that can be provided to the application, data, and users. It works to help keep the code more discrete and works as a toolbox for developers and users to interact with our software

A resource is an URL endpoint in a RESTful API which is used to access all of the information related to the string being inserted into the URL. Since the URL endpoint is designed to be restful users that access it will be able to get, post, put, and delete data from the exact same named endpoint.

The API can return HTTP methods that are commonly considered successful request types in it's functions, so that developers and users of the application will know that their requests are successful. They could also send data from the application if the request they are making is a git request, and potentially output other plain texdt that allows demonstrates success in conjuction with the http request codes.

We can partition our application into sub-applications by using middleware and router functions designed for each endpoint, which are then imported and combined using index functions and modules to create our full API.