class Handler {
    constructor() {
      this.Handes = null;
    }
  
    setOutro(handler) {
      this.Handes = handler;
      return handler;
    }
  
    handle(requisicao) {
      if (this.Handes) {
        return this.Handes.handle(requisicao);
      }
      return null;
    }
  }
  
  class HandlerAC extends Handler {
    handle(requisicao) {
      if (requisicao === 'A') {
        return `Handler A tratou a requisição ${requisicao}`;
      }
      return super.handle(requisicao);
    }
  }
  
  class HandlerBC extends Handler {
    handle(requisicao) {
      if (requisicao === 'B') {
        return `Handler B tratou a requisição ${requisicao}`;
      }
      return super.handle(requisicao);
    }
  }
  
 
  const handlerA = new HandlerAC();
  const handlerB = new HandlerBC();
  
  handlerA.setOutro(handlerB);
  
  console.log(handlerA.handle('A')); 
  console.log(handlerA.handle('B')); 
  console.log(handlerA.handle('C')); 