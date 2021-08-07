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
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: false },
  userCreated: { type: Date, default: Date.now }
});



const User = model<UserType>('User', UserSchema);

export default User;
