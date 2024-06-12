import mongoose from 'mongoose';
import ErroBase from '../errors/ErroBase.js';
import RequisicaoIncorreta from '../errors/RequisicaoIncorreta.js';
import ErroValidacao from '../errors/ErroValidacao.js';

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  }

  if (error instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(error).enviarResposta(res);
  }

  if (error instanceof ErroBase) {
    error.enviarResposta(res);
  }

  new ErroBase().enviarResposta(res);
}

export default manipuladorDeErros;
