import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

  // function for our authenticated routes
export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = req.headers.authorization.split(' ').pop()!.trim(); // ["Bearer", "<tokenvalue>"]
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
        // console.log(token)
      const decoded = jwt.verify(<string>token, secret, { maxAge: expiration });
      (<any>req).user = (<any>decoded).data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
}

export const signToken = ({ username, email, _id }:{username: string, email:string, _id:string}) => {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
