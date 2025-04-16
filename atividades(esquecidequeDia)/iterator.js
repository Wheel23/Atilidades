
class colecaos {
    constructor() {
      this.itens = [];
    }
  
    addItem(itens) {
      this.itens.push(itens);
    }
  
    getIterator() {
      return new Ieterator(this);
    }
  }
  
  
  class Ieterator {
    constructor(colecao) {
      this.colecao = colecao;
      this.index = 0;
    }
  
    hasNext() {
      return this.index < this.colecao.itens.length;
    }
  
    next() {
      return this.colecao.itens[this.index++];
    }
  }
  
  
  const colecao = new colecaos();
  colecao.addItem('Item 1');
  colecao.addItem('Item 2');
  colecao.addItem('Item 3');
  
  const iterator = colecao.getIterator();
  
  while(iterator.hasNext()) {
    console.log(iterator.next());
  }
  