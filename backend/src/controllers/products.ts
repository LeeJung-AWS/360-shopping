import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';
import Product from '../models/Product';

export const productCreate: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Product.create(req.body)
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const getProducts: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Product.find()
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const getProduct: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Product.findById(req.params.id)
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const updateProduct: RequestHandler = (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
        Product.findByIdAndUpdate(
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

export const deleteProduct: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}