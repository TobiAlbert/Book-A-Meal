import db from '../db/db';

class MealsController {

    getAllMeals(req, res) {
        res.status(200).send({
            success:true,
            message: 'meals successfully retrieved',
            'meals': db
        });
    }

    createMeal(req, res) {
        if(!req.body.name) {
            return res.status(400).send({
                success:false,
                message: 'Food name is required'
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success:false,
                message: 'Food description is required'
            });
        } else if (!req.body.price) {
            return res.status(400).send({
                success:false,
                message: 'Food Price is required'
            });
        }

        const meal = {
            id: db.length + 1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        };

        db.push(meal);
        return res.status(201).send({
            success:true,
            message: 'meal successfully created',
            "meals":db
        });

    }
}

const mealsController = new MealsController();
export default mealsController;