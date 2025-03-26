
class OldCalculator {
    operations(a, b, operation) {
      switch(operation) {
        case 'add': return a + b;
        case 'sub': return a - b;
        default: return NaN;
      }
    }
  }
  
  
  class CalculatorAdapter {
    constructor() {
      this.calculator = new OldCalculator();
    }
  
    add(a, b) {
      return this.calculator.operations(a, b, 'add');
    }
  
    subtract(a, b) {
      return this.calculator.operations(a, b, 'sub');
    }
  }
  
  
  const adapter = new CalculatorAdapter();
  console.log(adapter.add(5, 3)); // 8
  console.log(adapter.subtract(5, 3)); // 2