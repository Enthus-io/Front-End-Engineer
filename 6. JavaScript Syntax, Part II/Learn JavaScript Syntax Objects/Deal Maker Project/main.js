let menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
        set setAppetizers(appetizers) {
            this._appetizers = appetizers;
        },
        set setMains(mains) {
            this._mains = mains;
        },
        set setDesserts(desserts) {
            this._desserts = deserts;
        },
        get getAppetizers() {
            return this._appetizers;
        },
        get getMains() {
            return this._mains;
        },
        get getDesserts() {
            return this._desserts;
        }
    },
    get getCourses() {
        return {
            appetizers: this._courses._appetizers,
            mains: this._courses._mains,
            desserts: this._courses._desserts
        }
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {

        if (courseName === 'appetizer' || courseName === 'main' || courseName === 'dessert') {
            this._courses[`_${courseName}s`].push({
                dish: {
                    name: dishName,
                    price: dishPrice
                }
            })
        }
        else {
            console.log('Invalid emtry.')
        }
    },
    getRandomDishFromCourse: function (courseName) {

        if (courseName === 'appetizer' || courseName === 'main' || courseName === 'dessert') {
            return this._courses[`_${courseName}s`][Math.floor(Math.random() * this._courses[`_${courseName}s`].length)];
        }
        else {
            console.log('Invalid emtry.')
        }
    }
}

menu.addDishToCourse('appetizer', 'cheese dip', 1.99);
menu.addDishToCourse('appetizer', 'chips', 2.99);

menu.addDishToCourse('main', 'tacos', 8.99);
menu.addDishToCourse('main', 'sopes', 9.99);
menu.addDishToCourse('main', 'enchiladas', 10.99);

menu.addDishToCourse('dessert', 'flan', 3.99);
menu.addDishToCourse('dessert', 'fruta', 4.99);

let generateRandomMeal = function () {
    let appetizer = menu.getRandomDishFromCourse('appetizer');
    let main = menu.getRandomDishFromCourse('main');
    let dessert = menu.getRandomDishFromCourse('dessert');
    let totalPrice = appetizer.dish.price + main.dish.price + dessert.dish.price;

    console.log(`Your meal consist of ${appetizer.dish.name}, ${main.dish.name}, and ${dessert.dish.name} which come to a tatal of ${totalPrice}.`)

}

generateRandomMeal();
menu.getRandomDishFromCourse('desert');