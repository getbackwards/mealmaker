const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],

    get appetizers () {
      if (this.appetizers !== undefined) {
        return `The appetizer is ${this.appetizers}`;
      } else {
        return 'An appetizer has not been defined';
      }
    },

    get mains () {
      if (this.mains !== undefined) {
        return `The main is ${this.mains}`;
      } else {
        return 'A main has not been defined';
      }
    },

    get desserts () {
      if (this.desserts !== undefined) {
        return `The desserts is ${this.desserts}`;
      } else {
        return 'A desserts has not been defined';
      }
    },

    set appetizers(appetizerIn) {
      if (appetizerIn !== undefined) {
        this.appetizers = appetizerIn;
      } else {
        console.log('You need to enter a value to set appetizer.');
      }
    },

    set mains(mainsIn) {
      if (mainsIn !== undefined) {
        this.mains = mainsIn;
      } else {
        console.log('You need to enter a value to set mains.');
      }
    },

    set desserts(desserts) {
      if (dessertsIn !== undefined) {
        this.desserts = dessertsIn;
      } else {
        console.log('You need to enter a value to set desserts.');
      }
    }

  },

  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }

    // if (this._courses !== undefined) {
    //  return this._courses;
    // } else {
    //  return '_courses is undefined.'
    // }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    // this might need to be returned
    dish: {
      name: this.dishName;
      price: this.dishPrice;
    }

    this._courses.push
  }

};

console.log(menu);
