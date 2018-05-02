import users from './Users';
import meals from './Meals';

const Menus = [

    {
        id: 1,
        mealOptions: [meals[1]],
        caterer: users[1],
        date: "2018-04-14"
    },
    {
        id: 2,
        mealOptions: [meals[0], meals[2]],
        caterer: users[3],
        date: "2018-04-04"
    },
    {
        id: 3,
        mealOptions: [meals[1]],
        caterer: users[3],
        date: "2018-04-12"
    },
    {
        id: 4,
        mealOptions: [meals[1], meals[0], meals[2]],
        caterer: users[1],
        date: "2018-04-06"
    },

];


export default Menus;