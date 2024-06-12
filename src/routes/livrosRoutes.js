import express from 'express';
import LivroController from '../controllers/livroController.js';
import paginar from '../middlewars/paginar.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros, paginar);
routes.get('/livros/busca', LivroController.listarLivroPorFiltro);
routes.get('/livros/:id', LivroController.listarLivroPorId);
routes.post('/livros/', LivroController.cadastrarLivro);
routes.put('/livros/:id', LivroController.atualizarLivro);
routes.delete('/livros/:id', LivroController.excluirLivro);

export default routes;
 