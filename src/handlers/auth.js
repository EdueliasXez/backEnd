const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: '248754851549-dbdgrvlmkeg0gd1ei2670mq7gfbhrv7t.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  async function(token, tokenSecret, profile, done) {
    // Verifica si el usuario ya existe en la base de datos a través de googleId
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      // Usuario existente, inicia sesión
      done(null, existingUser);
    } else {
      // Crea un nuevo usuario en la base de datos
      const newUser = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        // Otros campos según tus necesidades
      });
      await newUser.save();
      done(null, newUser);
    }
  }
));