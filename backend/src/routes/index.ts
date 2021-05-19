import express, { Router, Request, Response, NextFunction} from 'express';
const router = Router();
// In Nodejs
// const express = require('express);
// const router = express.Router();

import apiRoutes from './api';

import { testController } from '../controllers/testController';

// API Routes
router.use("/api", apiRoutes);

// router.get("/test", testController);

export default router;
