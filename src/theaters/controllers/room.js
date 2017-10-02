import Room from '../models';

/**
 * Get all reviews
 * @param req
 * @param res
 * @returns void
 */
export const getRooms = (req, res) =>
  Room.find()
    .sort({ dateAdded: -1 })
    .exec()
    .then(rooms => res.json({ rooms }))
    .catch(err => res.status(500).send(err));

/**
 * Save a review
 * @param req
 * @param res
 * @returns void
 */
export const addRoom = (req, res) =>
  Room.create(req.body)
    .then(room => res.json({ room }))
    .catch(err => res.status(500).send(err));

export const updateRoom = (req, res) =>
  Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(room => res.json({ room }))
    .catch(err => res.status(500).send(err));

/**
 * Get a single review
 * @param req
 * @param res
 * @returns void
 */
export const getRoom = (req, res) =>
  Room.findOne({ id: req.params.id })
    .exec()
    .then(room => res.json({ room }))
    .catch(err => res.status(500).send(err));

/**
 * Delete a review
 * @param req
 * @param res
 * @returns void
 */
export const deleteRoom = (req, res) => {
  Room.findByIdAndRemove(req.params.id, { select: 'id' })
    .exec()
    .then(room => res.json({ room }))
    .catch(err => res.status(500).send(err));
};
