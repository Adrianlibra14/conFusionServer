var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

// User.authenticate() es una función para verificar al usuario. La misma viene con el plugin de passport para mongoose 
exports.local = passport.use(new LocalStrategy(User.authenticate()));

// Serializar es el proceso de convertir un objeto en un formato que se pueda pasar o guardar
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());