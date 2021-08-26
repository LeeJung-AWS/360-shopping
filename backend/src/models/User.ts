import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserType{
    name: string;
    username: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    userCreated: Date;
    favoriteProduct: string[];
}

// Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserType>({
  name: { type: String, required: false },
  username: { type: String, required: "Username is Required", unique: true },
  email: { type: String, match: [/.+@.+\..+/, "Please enter a valid e-mail address"], unique: true },
  password: { type: String, required: "password is Required" },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  userCreated: { type: Date, default: Date.now },
  favoriteProduct: [ {type: String, required: false} ]
});


// hash user password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model<UserType>('User', UserSchema);

export default User;
