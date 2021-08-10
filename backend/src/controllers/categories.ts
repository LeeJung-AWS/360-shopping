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
    // console.log(req.params.name);
    try {
        const response = await Category.findOneAndUpdate(
            {name: req.params.name}, {$set: req.body}
        )
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const deleteCategory: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Category.deleteOne({name: req.params.name})
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}