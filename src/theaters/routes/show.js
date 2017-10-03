import { Router } from 'express';

import * as ShowController from '../controllers';

const router = new Router();

router.route('/shows').get(ShowController.getShows);
router.route('/shows').post(ShowController.addShow);
router.route('/shows/:id').get(ShowController.getShow);
router.route('/shows/:id').patch(ShowController.updateShow);
router.route('/shows/:id').delete(ShowController.deleteShow);

export default router;
