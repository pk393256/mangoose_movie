const express = require('express');
const { fetchAllMovie, addMovie, updateMovie, deleteMovie } = require('../handler/movie');

const movieRouter = express.Router();

movieRouter.get('/movies/all',fetchAllMovie)
movieRouter.post('/movies',addMovie)
movieRouter.patch('/movies/:id',updateMovie)
movieRouter.delete('/movies/:id',deleteMovie)

module.exports = movieRouter;