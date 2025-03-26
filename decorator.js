class Cafe {
    cost() {
      return 5;
    }
  }
  
 
  class CafeDeco {
    constructor(cafe) {
      this.cafe = cafe;
    }
  
    cost() {
      return this.cafe.cost();
    }
  }
  
 
  class leiteDeco extends CafeDeco {
    cost() {
      return this.cafe.cost() + 2;
    }
  }
  
  class acucarDeco extends CafeDeco {
    cost() {
      return this.cafe.cost() + 1;
    }
  }
  
  
  let cafe = new Cafe();
  cafe = new leiteDeco(cafe);
  cafe = new acucarDeco(cafe);
  
  console.log(cafe.cost()); 