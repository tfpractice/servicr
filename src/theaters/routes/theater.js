import { Router } from 'express';

import * as TheaterController from '../controllers';

const router = new Router();

router.route('/movies').get(TheaterController.getTheaters);
router.route('/movies').post(TheaterController.addTheater);
router.route('/movies/:id').get(TheaterController.getTheater);
router.route('/movies/:id').patch(TheaterController.updateTheater);
router.route('/movies/:id').delete(TheaterController.deleteTheater);

export default router;
