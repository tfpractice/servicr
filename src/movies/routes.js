import { Router } from 'express';

import * as MovieController from './controller';

const router = new Router();

router.route('/movies').get(MovieController.getMovies);
router.route('/movies').post(MovieController.addMovie);
router.route('/movies/:id').get(MovieController.getMovie);
router.route('/movies/:id').patch(MovieController.updateMovie);
router.route('/movies/:id').delete(MovieController.deleteMovie);

export default router;
