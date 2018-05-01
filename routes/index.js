import express from 'express';
import db from '../db/db';
import MealsController from '../controllers/MealsController';

// Create Router
const router = express.Router();

router.get('/meals', MealsController.getAllMeals);
router.post('/meals', MealsController.createMeal);
router.put('/meals/:id', MealsController.updateMeal);

export default router;