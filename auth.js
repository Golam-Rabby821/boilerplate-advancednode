const passport = require("passport");
const LocalStrategy = require("passport-local");

module.exports = function (app, myDataBase) {
    passport.use(
        new LocalStrategy((username, password, done) => {
          myDataBase.findOne({ username: username }, (err, user) => {
            console.log(`User ${username} attempted to log in.`);
            if (err) return done(err);
            if (!user) return done(null, false);
            if (!bcrypt.compareSync(password, user.password)) { 
              return done(null, false);
            }
            return done(null, user);
          });
        })
      );
      // Serialization and deserialization here...
      passport.serializeUser((user, done) => {
        console.log(user._id);
        done(null, user._id);
      });
    
      passport.deserializeUser((id, done) => {
        myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
          done(null, doc);
        });
      });
}