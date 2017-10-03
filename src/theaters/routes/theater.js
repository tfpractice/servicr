import { Router } from 'express';

import * as TheaterController from '../controllers';

const router = new Router();

router.route('/theaters').get(TheaterController.getTheaters);
router.route('/theaters').post(TheaterController.addTheater);
router.route('/theaters/:id').get(TheaterController.getTheater);
router.route('/theaters/:id').patch(TheaterController.updateTheater);
router.route('/theaters/:id').delete(TheaterController.deleteTheater);

export default router;
