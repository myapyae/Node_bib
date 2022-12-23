import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()); 
app.use(express.static("public")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());
app.use(cookieParser());
app.use(session({
  secret: "Your secret key",
  resave: false,
  saveUninitialized:false
}));

var Users = [];

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.post('/signup', function (req, res) {
  if (!req.body.id || !req.body.password) {
    res.status(400);
    res.send("Invalid details!");
  } else {
    Users.filter(function (user) {
      if (user.id === req.body.id) {
        res.render('signup', {
          message: "User Already Exists! Login or choose another user id"
        });
      }
    });
    var newUser = { id: req.body.id, password: req.body.password };
    Users.push(newUser);
    req.session.user = newUser;
    console.log(req.session.user);
    console.log(newUser)
    res.redirect('/secret_page');
  }
});
function checkSignIn(req, res) {
  if (req.session.user) {
    next();     //If session exists, proceed to page
  } else {
    var err = new Error("Not logged in!");
    //console.log(req.session.user);
    next(err);  //Error, trying to access unauthorized page!
  }
}
app.get('/secret_page', checkSignIn, function (req, res) {
  res.render('secret_page', { id: req.session.user.id })
});

app.get('/signin', function (req, res) {
  res.render('signin');
});

app.post('/signin', function (req, res) {
  console.log(Users);
  if (!req.body.id || !req.body.password) {
    return res.render('signin', { message: "Please enter both id and password" });
  } else {
    Users.filter(function (user) {
      if (user.id === req.body.id && user.password === req.body.password) {
        req.session.user = user;
        return res.redi('/secret_page');
      }
    });
    return res.render('signin', { message: "Invalid credentials!" });
  }
});

app.get('/logout', function (req, res) {
  req.session.destroy(function () {
    console.log("user logged out.")
  });
  res.redirect('/signin');
});

app.use('/secret_page', function (err, req, res, next) {
  console.log(err);
  //User should be authenticated! Redirect him to log in.
  res.redirect('/signin');
})
  
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
