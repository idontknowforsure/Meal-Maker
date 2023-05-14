const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []    
  },

  get appetizers(){ 
    return this._courses.appetizers;
  },
  set appetizers(appetizerInput){ 
   this._courses.appetizers = appetizerInput;
  },
  get mains(){ 
    return this._courses.mains;
  },
  set mains(mainsInput){
    this._courses.mains = mainsInput;
   },
  get desserts(){
    return this._courses.desserts;
   },
  set desserts(dessertInput){
    this._courses.desserts = dessertInput;
   },

  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
          name: dishName,
          price: dishPrice
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
  },

generateRandomMeal(){
 let selectedAppetizer = this.getRandomDishFromCourse('appetizers');
 let selectedMain = this.getRandomDishFromCourse('mains');
 let selectedDessert = this.getRandomDishFromCourse('desserts');

const totalPrice = selectedAppetizer.price + selectedMain.price + selectedDessert.price;
return `The final bill is: \n ${selectedAppetizer.name} \n ${selectedMain.name} \n ${selectedDessert.name} \n----------\n TOTAL = ${totalPrice}\n----------`;
}
};
menu.addDishToCourse('appetizers', 'fries', 2.50);
menu.addDishToCourse('appetizers', 'bread sticks', 3.00);
menu.addDishToCourse('appetizers', 'cheese board', 5.50);
menu.addDishToCourse('mains', 'dumplings', 9.40);
menu.addDishToCourse('mains', 'steamed fish', 7.50);
menu.addDishToCourse('mains', 'pasta', 7.00);
menu.addDishToCourse('desserts', 'cake', 4.00);
menu.addDishToCourse('desserts', 'sorbet', 8.25);
menu.addDishToCourse('desserts', 'ice cream', 5.70);

const meal = menu.generateRandomMeal();

console.log(meal);