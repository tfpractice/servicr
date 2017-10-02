import Show from '../models';

/**
 * Get all reviews
 * @param req
 * @param res
 * @returns void
 */
export const getShows = (req, res) =>
  Show.find()
    .sort({ dateAdded: -1 })
    .exec()
    .then(shows => res.json({ shows }))
    .catch(err => res.status(500).send(err));

/**
 * Save a review
 * @param req
 * @param res
 * @returns void
 */
export const addShow = (req, res) =>
  Show.create(req.body)
    .then(show => res.json({ show }))
    .catch(err => res.status(500).send(err));

export const updateShow = (req, res) =>
  Show.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(show => res.json({ show }))
    .catch(err => res.status(500).send(err));

/**
 * Get a single review
 * @param req
 * @param res
 * @returns void
 */
export const getShow = (req, res) =>
  Show.findOne({ id: req.params.id })
    .exec()
    .then(show => res.json({ show }))
    .catch(err => res.status(500).send(err));

/**
 * Delete a review
 * @param req
 * @param res
 * @returns void
 */
export const deleteShow = (req, res) => {
  Show.findByIdAndRemove(req.params.id, { select: 'id' })
    .exec()
    .then(show => res.json({ show }))
    .catch(err => res.status(500).send(err));
};
