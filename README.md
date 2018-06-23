#     To Do


- Server Endpoints
  []  /api/v1/resource-name
        POST request
          - should pass data as strigified JSON in the body of the post request to create a new resource
  []  api/v1/resource-name
        GET request
          - fetch all resources
  []  /api/v1/resource-name/:id
        GET request
          - should pass the id of a resource through the url endpoint to get a resource
          - this should use req.params, not querystring parameters
        PUT request
          - should pass data as stringified JSON in the body of a put request to overwrite a pre-existing resource
        DELETE request
          - should pass the id of a resource through the endpoint to delete a resource
          - this should use req.params, not querystring parameters

- Tests
  []  return 404 for non-registered routes
  []  PUT 200, returns resource with updated body
  []  PUT 400, responds with 'bad request' if no req body is provided
  []  PUT 404, responds with 'not found' for valid requests made with id if no matches found
  []  POST 400, responds with 'bad request' if no req body is provided
  []  POST 200, returns a resource for requests made with a valid body

##    Questions

*     Do I need to use the npm debug module?  How?

*     Why is model in italics for the last feature task?


###   Feature Tasks

[]    Create an HTTP server using Express

[]    create a resource model of your choice that uses mongoose.Schema and mongoos.model

[]    use the body-parser express middleware to parse the req body on POST and PUT routes

[*]   use the npm debug module to log the functions and methods that are being used in your application

[]    use the express Router for doing RESTful CRUD operations against your model.
