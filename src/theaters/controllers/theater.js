import Theater from '../models';

/**
 * Get all reviews
 * @param req
 * @param res
 * @returns void
 */
export const getTheaters = (req, res) =>
  Theater.find()
    .sort({ dateAdded: -1 })
    .exec()
    .then(theaters => res.json({ theaters }))
    .catch(err => res.status(500).send(err));

/**
 * Save a review
 * @param req
 * @param res
 * @returns void
 */
export const addTheater = (req, res) =>
  Theater.create(req.body)
    .then(theater => res.json({ theater }))
    .catch(err => res.status(500).send(err));

export const updateTheater = (req, res) =>
  Theater.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(theater => res.json({ theater }))
    .catch(err => res.status(500).send(err));

/**
 * Get a single review
 * @param req
 * @param res
 * @returns void
 */
export const getTheater = (req, res) =>
  Theater.findOne({ id: req.params.id })
    .exec()
    .then(theater => res.json({ theater }))
    .catch(err => res.status(500).send(err));

/**
 * Delete a review
 * @param req
 * @param res
 * @returns void
 */
export const deleteTheater = (req, res) => {
  Theater.findByIdAndRemove(req.params.id, { select: 'id' })
    .exec()
    .then(theater => res.json({ theater }))
    .catch(err => res.status(500).send(err));
};
