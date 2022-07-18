const express = require('express');
const { filterByTitle, filterByDate, searchMovie } = require('../handler/filter');
const { fetchAllMovie, addMovie, updateMovie, deleteMovie } = require('../handler/movie');

const movieRouter = express.Router();

movieRouter.get('/movies/all',fetchAllMovie)
movieRouter.post('/movies',addMovie)
movieRouter.patch('/movies/:id',updateMovie)
movieRouter.delete('/movies/:id',deleteMovie)
movieRouter.get('/movies/releaseDate/:releaseDate',filterByDate)
movieRouter.get('/movies/title/:title',filterByTitle)
movieRouter.get('/movies/search',searchMovie)

module.exports = movieRouter;