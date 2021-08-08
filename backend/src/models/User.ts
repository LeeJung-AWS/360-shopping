import { Schema, model } from 'mongoose';

interface UserType{
    name: string;
    username: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    userCreated: Date;
}

// Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserType>({
  name: { type: String, required: "Name is Required" },
  username: { type: String, required: "Username is Required", unique: true },
  email: { type: String, match: [/.+@.+\..+/, "Please enter a valid e-mail address"], unique: true },
  password: { type: String, required: "password is Required" },
  address: { type: String, required: "address is Required" },
  phone: { type: String, required: false },
  userCreated: { type: Date, default: Date.now }
});



const User = model<UserType>('User', UserSchema);

export default User;
