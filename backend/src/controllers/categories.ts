import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';
import Category from '../models/Category';

export const getCategories: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Category.find()
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const addCategory: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Category.create(req.body)
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const updateCategory: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    const response = await Category.findByIdAndUpdate(
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
    )
}