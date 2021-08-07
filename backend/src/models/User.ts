import { Schema, model } from 'mongoose';

interface Usertype{
    name: string;
    email: string;
    password: string;
}

// Create a Schema corresponding to the document interface.
const UserSchema = new Schema<Usertype>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});



const User = model<Usertype>('User', UserSchema);

export default User;
