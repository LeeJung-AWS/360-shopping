import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';

import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from '../libs/s3Client'; // Helper function that creates Amazon S3 service client module.
import { v4 as uuidv4 } from 'uuid';


// Get signedURL ( XML ) , be able to upload a file to S3 at FrontEnd by using signedURL
export const getFileUploadURL: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const bucketParams = {
            Bucket: '360shopping',
            Key: `product-img/${uuidv4()}-${Date.now().toString()}`
        };

        const command = new PutObjectCommand(bucketParams);
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 3600,
          });
        // console.log(signedUrl);
        res.status(200).json(signedUrl);
    }
    catch (err){
        res.status(400).json(err);
    }
}

// Delete S3 Images by Key name
export const deleteS3Img: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleteParams = {
            Bucket: '360shopping',
            Key: req.body
        };

        const command = new DeleteObjectCommand(deleteParams)
        const response = await s3Client.send(command);
        res.json(response);
    }
    catch (err){
        res.status(400).json(err);
    }
}