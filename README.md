Source code for Beer Locker tutorials

####beerlocker-1

With an ever growing collection of beer, I am in dire need of a way to store and track my beer. What better way to do this than to create an application where I can add, remove, update, and view my beer collection. Like any motivated developer, I want my friends to be able to create their own lockers and control who has access to mine.

In this multipart series we’ll be creating a RESTful API using Node, Express, Mongoose to interact with MongoDB, Passport for authentication, OAuth2orize for OAuth support, and explore best practices and tools.

When we are done, we should have an API that allows users to authenticate, perform CRUD operations, authorize other applications via OAuth to access the API, have a solid understanding of best practices and tooling, and most important of all, a place to store our beer!

[Beer Locker: Building a RESTful API With Node](http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/)

####beerlocker-2

In our previous article we left off with a basic Node applicaton in place capable of accepting HTTP requests and responding back with some static JSON.

In this part we will dive a bit deeper and learn how to implement CRUD operations on our beer locker. By the end of this article you will have learned how to connect to a MongoDB, used Mongoose for object modeling, and have implemented GET, PUT, POST, and DELETE endpoints.

[Beer Locker: Building a RESTful API With Node - CRUD](http://scottksmith.com/blog/2014/05/05/beer-locker-building-a-restful-api-with-node-crud/)

####beerlocker-3.1

Starting point for the third article on implementing Passport. This is to clean up the code a bit from our previous tutorials.

####beerlocker-3.2

In our previous article we ended wtih a fairly functional API capable of adding, removing, updating, and viewing beer.

In this part we will dive into creating user accounts and authentication using Passport. By the end of this article you will have learned how to add user accounts, implement authentication, and control access to beer lockers.

[Beer Locker: Building a RESTful API With Node - Passport](http://scottksmith.com/blog/2014/05/29/beer-locker-building-a-restful-api-with-node-passport/)

###beerlocker-4

In our previous article we ended wtih a functional API capable of creating user accounts, locking down API endpoints, and only allowing access to a user’s own beer locker.

In this part we will dive into creating an OAuth2 server and allowing access to API endpoints for the authorized user or authorized applications. We will do this by integrating OAuth2orize into our application.

[Beer Locker: Building a RESTful API With Node - OAuth2 Server](http://scottksmith.com/blog/2014/07/02/beer-locker-building-a-restful-api-with-node-oauth2-server/)

###beerlocker-5

In our previous article we ended wtih a functional API capable of creating user accounts, locking down API endpoints, only allowing access to a user's own beer locker, and an OAuth2 server.

Many readers have asked questions about how to use different authentication strategies so I am going to continue this series and delve into many of those strategies.

This article will explore the use of Digest authentication instead of Basic.

[Beer Locker: Building a RESTful API with Node - Digest](http://scottksmith.com/blog/2014/09/14/beer-locker-building-a-restful-api-with-node-digest/)

####beerlocker-6.1

Starting point for the sixth article on using username and password for authentication. This is to clean up the code a bit from our previous tutorial.

####beerlocker-6.2

In our previous article we explored implementing Digest authentication in place of Basic. This article will now delve into implementing username and password authentication using the passport-local module.

[Beer Locker: Building a RESTful API With Node - Username & Password](http://scottksmith.com/blog/2014/09/18/beer-locker-building-a-restful-api-with-node-username-and-password/)