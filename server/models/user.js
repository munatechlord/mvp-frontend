const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== 'email' ? false : true;
    }
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  provider: {
    type: String,
    required: true,
    default: 'email'
  },
  // googleId: {
  //   type: String,
  //   unique: true
  // },
  // facebookId: {
  //   type: String,
  //   unique: true
  // },
  avatar: {
    type: String
  },
  role: {
    type: String,
    enum: ['ROLE_MEMBER', 'ROLE_ADMIN', 'ROLE_MERCHANT'],
    default: 'ROLE_MEMBER'
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('User', UserSchema);
