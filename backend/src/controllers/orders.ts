import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';
import Order from '../models/Order';

export const orderCreate: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Order.create(req.body)
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const getOrders: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Order.find().populate(
            [{path: "userId"}, {path: "productId"}]
        )
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}

export const getOrder: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Order.findById(req.params.id).populate(
            [{path: "userId"}, {path: "productId"}]
        )
        res.status(200).json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}