import RequisicaoIncorreta from './RequisicaoIncorreta.js';

class ErroValidacao extends RequisicaoIncorreta {
  constructor(error) {
    const messageError = Object.values(error.errors)
      .map((erro) => erro.message)
      .join('; ');
      
    super(`Os seguintes erros foram encontrados: ${messageError}`, 400);
  }
}

export default ErroValidacao;
