import Movie from './model';

/**
 * Get all reviews
 * @param req
 * @param res
 * @returns void
 */
export const getMovies = (req, res) =>
  Movie.find()
    .sort({ dateAdded: -1 })
    .exec()
    .then(movies => res.json({ movies }))
    .catch(err => res.status(500).send(err));

/**
 * Save a review
 * @param req
 * @param res
 * @returns void
 */
export const addMovie = (req, res) =>
  Movie.create(req.body)
    .then(movie => res.json({ movie }))
    .catch(err => res.status(500).send(err));

export const updateMovie = (req, res) =>
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(movie => res.json({ movie }))
    .catch(err => res.status(500).send(err));

/**
 * Get a single review
 * @param req
 * @param res
 * @returns void
 */
export const getMovie = (req, res) =>
  Movie.findOne({ id: req.params.id })
    .exec()
    .then(movie => res.json({ movie }))
    .catch(err => res.status(500).send(err));

/**
 * Delete a review
 * @param req
 * @param res
 * @returns void
 */
export const deleteMovie = (req, res) => {
  Movie.findByIdAndRemove(req.params.id, { select: 'id' })
    .exec()
    .then(movie => res.json({ movie }))
    .catch(err => res.status(500).send(err));
};

// export const deleteUnclaimed = (req, res) => Movie.dropAll();

// deleteUnclaimed();
