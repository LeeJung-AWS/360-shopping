import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';

    export const testController: RequestHandler = (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
        console.log('test');
        res.status(200).json({message:"test"})
    }