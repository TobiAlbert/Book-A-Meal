import express from 'express';
import db from '../db/db';
import MealsController from '../controllers/MealsController';

// Create Router
const router = express.Router();

router.get('/meals', MealsController.getAllMeals);

export default router;