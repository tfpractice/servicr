import { Router } from 'express';

import * as ShowController from '../controllers';

const router = new Router();

router.route('/movies').get(ShowController.getShows);
router.route('/movies').post(ShowController.addShow);
router.route('/movies/:id').get(ShowController.getShow);
router.route('/movies/:id').patch(ShowController.updateShow);
router.route('/movies/:id').delete(ShowController.deleteShow);

export default router;
