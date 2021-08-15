import { RequestHandler } from 'express'; // Or import { Request, Response, NextFunction} from 'express';

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from '../libs/s3Client'; // Helper function that creates Amazon S3 service client module.
import { v4 as uuidv4 } from 'uuid';

export const bucketParams = {
    Bucket: '360shopping',
    Key: `product-img/${uuidv4()}-${Date.now().toString()}`
};

// Get signedURL ( XML ) , be able to upload a file to S3 at FrontEnd by using signedURL
export const getFileUploadURL: RequestHandler = async (req, res, next) => {     // export const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
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