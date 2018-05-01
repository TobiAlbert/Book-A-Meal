import express from 'express';
import db from '../db/db';
import MealsController from '../controllers/MealsController';

// Create Router
const router = express.Router();

router.get('/api/v1/meals', MealsController.getAllMeals);

export default router;