import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';
import User from '../models/User';

export const userCreate: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await User.create(req.body)
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}