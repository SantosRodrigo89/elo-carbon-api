import NaoEncontrado from '../errors/NaoEncontrado.js';

// eslint-disable-next-line no-unused-vars
function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipulador404;
