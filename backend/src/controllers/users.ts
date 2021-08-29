import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';
import User from '../models/User';
import { signToken } from '../libs/auth';

 // get a single user by either their id or their username
export const getSingleUser: RequestHandler = async (req: any, res) => {
  const foundUser = await User.findOne({
    $or: [{ _id: req.user ? req.user._id : req.params.id }, { username: req.params.username }],
  });

  if (!foundUser) {
    return res.status(400).json({ message: 'Cannot find a user with this id!' });
  }

  res.json(foundUser);
}

// create a user, sign a token, and send it back to Frontend
export const userCreate: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user:any = await User.create(req.body)
        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.status(200).json({ token, user });
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const login:RequestHandler = async (req, res, next) => {
  // console.log(req.body);
    const user:any = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    // console.log(user)
    // console.log(token)
    res.json({ token, user });
}

export const updateUser: RequestHandler = (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
  User.findByIdAndUpdate(
    req.params.id, 
    { $set: req.body },
    { new: true },          // Allow Returning Updated Data

    (err, edited) => {
      if(err){
          res.status(400).json(err);
      }else{
          res.status(200).json(edited);
      }
    }
)}