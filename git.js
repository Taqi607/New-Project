class Human {
    constructor(gender) {
      this.gender = gender;
    }
  
    printGender = () => {
      console.log(`My gender is ${this.gender}`);
    };
  
    toString() {
      return "I am human";
    }
  }
  
  let arr = [];
  
  arr.push(new Human("Male"))
  arr.push(new Human("Female"))
  
  arr[0].printGender();
  arr[1].printGender();
  
  console.log(arr[1].toString())