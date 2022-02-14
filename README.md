#Intro#
Node.js - Express Microservice for shopping cart - without database
##Main capabilities:##
*Endpoint for adding an item
*Endpoint for removing an item
*Endpoint for clearing the entire basket
*Endpoint for listing all the items, ONLY showing their ID, title, price

##Technology:##
* [Node.js](https://nodejs.org/en/) - as an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications
* [Express](https://expressjs.com/) - is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Nodemon](https://www.npmjs.com/package/nodemon) - When you launch your node. js application with Nodemon it will monitor for any changes and automatically restart the server, improving your productivity.
* [Mocha](https://mochajs.org/) - is a Javascript testing framework. It uses describe method to group our tests and it method to run our tests.
* [Chai](https://www.chaijs.com/#:~:text=Chai%20is%20a%20BDD%20%2F%20TDD,with%20any%20javascript%20testing%20framework.) - is an assertion library that makes sure that our values are similar because chai can equate objects and arrays(which is not easy to do with plain Javascript). It does a deep-equal check that checks and also equates the contents of objects.
* [Supertest](https://www.npmjs.com/package/supertest) - A library for testing node.js HTTP servers
* [Postman](https://www.postman.com/) - Used for manual testing 

Start the app:
Make sure Nodejs and NPM are installed and their PATHs defined 

After cloning the repository, cd into folder.
install dependencies with npm install

with npm start you can start the server on port 3000
with npm run dev you can start server with nodemon, which will watch for any changes

The application uses data.js for presenting some data, you can use Postman to modify with sending POST,GET or DELETE requests.

