// express ek framwork for nodejs 
// express ka use case => routing 
// routing kya hai
// htts://www.facbook.com/profile
// /profile ko routing ko bolte hai 
// /contact = contact
// Main routing => GET POST 
// routing type => GET POST PUT PATCH DELETE

//GET POST 


// const express = require('express'); // Importing the express module
// const app = express(); // Creating an Express application

// // Defining a route for GET requests to the root URL ('/')
// app.get('/', function (req, res) {
//   res.send('Hello World'); // Sending 'Hello World' as the response to the client
// });

// // Making the application listen on port 3000
// app.listen(3000, function () {
//   console.log('Server is running on http://localhost:3000');
// });
// const { log } = require('console')
// const express = require('express')
// const app = express()
// // middleware part
// app.use(function(req, res, next){
//     console.log("hello from middleware");
//     next();
// })
 
// app.get("/", function(req, res){
//     res.send("Helijblo")
// })
// app.get("/profile", function(req, res){
//     res.send("Divyansh")
// })
// app.listen(3000);
// npm i nodemon -g not refrash the page again again
// now white in traminal nodemon and your file name 
// node vs express - node is the main thing but express se hum server ka code likh pata and server kaisa react karega wo bhi express ke help se likhta hai
// what is express js - package, routing
// middleware, request, response, req, res, next, app, server, port, listen
// express js ka use case - routing, middleware, request, response, req, res, next
// express js ka main use case - routing
// why express js - http is difficult to use, express make this easier
// express js ka main function - app.get, app.post, app.put, app.delete, app
// express js ka main middleware - app.use, app.use('/profile', function(req, res,
// express js ka main request - req, res, next
// express js ka main response - res, req, next
// express js ka main next - next, req, res
// express js ka main app - app, req, res, next
// express js ka main server - server, req, res, next
// express js ka main port - port, req, res, next
// express js ka main listen - listen, req, res, next
// routing - routes banaane ke process ko hum kahte hai routing.
// routing ka main use case - url par data ko send karna
// /profile
// /profile/divyansh
// next = nide ke saath ek dikkat hai ki agar control ek baar bhi kisi middleware par gaya to control khud se agle route/middleware par nahi jaayega, use agle par lejaane ke liye aapko push karna padega aur ye push kahlaauyega next ko chalaana
//request and response = req mein saare data hote hai aane walle user ki request ki taraf ka, jaise ki uski location, device info and other things
// res mein controls hote hai jinke basis pe hum server se respons bhej paate hai, next is just a push so that our request moves to the next things which should be executed

// const express = require('express')
// const app = express()

// app.get('/harsh', function (req, res) {
//   res.send('Hello World')
// })

// app.get("/harsh/:username", function(req, res){
//     res.send(`Hello from ${req.params.username}`)
// })
// app.listen(3000)
// url mein jab bhi aapke pass ek aise pattern ho
// /profile/:usermane params ko trigger kar ne ke liye 
// aisa koi bhi route jiska hissa baar baar same rehta hai and kuch hissa baar baaar change hota hai iske liye aap ek dynamic route bana skte ho 
// /profile/:divyansh

// route parameters - to make any route dynamic you can use : at the place where you want to make it dynamic, and to access there value use req,params
//like:- 
// /author/books/issued/harsh/
// /author/books/issued/divyansh/

// template engines :-
// template engines = ejs
//html ke pass superpower nahi hai calculation krne ki 
// ejs is like or same ejs with superpower 
// ejs stepup karne ke liye
// ejs install 
// type :- npm i ejs
// configure ejs
// app.set("view engine", "ejs");
//  ek view folder banao
// usmein ejs files banao
// sand ki jagah render karo -> 
// template engines => ye ek style of markup se convert krke aapko html
// type of template engines => pug, handlebars, ejs, jade 
// ejs ka use kaise karein and is very very similar to html
// you can add some contant throug ${} by this 
const express = require('express')
const app = express()

app.set("view engine", "ejs");
app.use(express.static(`./public`))

app.get('/profile', function (req, res) {
  res.render("index",)
})
app.get('/profile', function (req, res) {
  throw new Error(" don't know the error")
})
app.get('/error', function (req, res, next) {
  throw new Error("something went wrong");
})
app.get('/divyansh', function (req, res) {
  res.render("contact")
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
app.listen(3000)

// static file ?
// images, stylesheets
// static file setup?
// create a folder called public
// create three file inside it, images, stylesheets
// configure the express static  
// understand the path     