import express from 'express';
import db from '../db/db';
import MealsController from '../controllers/MealsController';

// Create Router
const router = express.Router();

router.get('/meals', MealsController.getAllMeals);
router.post('/meals', MealsController.createMeal);

export default router;