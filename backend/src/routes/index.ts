import express, { Router, Request, Response, NextFunction} from 'express';
const router = Router();
// In Nodejs
// const express = require('express);
// const router = express.Router();

import apiRoutes from './api';

// API Routes
router.use('/api', apiRoutes);

export default router;
