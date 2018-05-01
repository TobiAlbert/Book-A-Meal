import db from '../db/meals';

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

    updateMeal(req, res) {
        const id = parseInt(req.params.id, 10);

        let mealFound;
        let mealIndex;

        db.map((meal, index) => {
            if (meal.id === id) {
                mealFound = meal;
                mealIndex = index;
            }
        });

        if (!mealFound) {
            return res.status(404).send({
                success:false,
                message: 'Cannot find meal item to update'
            });
        }

        const mealName = req.body.name;
        const mealDescription = req.body.description;
        const mealPrice = req.body.price;

        if (!mealName || !mealDescription || !mealPrice) {
            return res.status(400).send({
                success:false,
                message: 'ensure all fields are filled'
            });
        }

        let updatedMeal = {
            id: mealFound.id,
            name: mealName || mealFound.name,
            description: mealDescription || mealFound.description,
            price: mealPrice || mealFound.price
        }

        db.splice(mealIndex, 1,  updatedMeal);

        return res.status(201).send({
            success:true,
            message:'Meal successfully updated',
            "meals":db
        });

    }

    deleteMeal(req, res) {
        const id = parseInt(req.params.id, 10);

        db.map((meal, index) => {
            if (meal.id === id) {
                db.splice(index, 1);

                return res.status(201).send({
                    success:true,
                    message: 'meal successfully deleted',
                    "meals":db
                });
            }
        });


        return res.status(404).send({
            success:false,
            message:'No such item found.'
        })
    }
}

const mealsController = new MealsController();
export default mealsController;