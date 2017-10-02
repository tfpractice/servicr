import { Router } from 'express';

import * as RoomController from '../controllers';

const router = new Router();

router.route('/movies').get(RoomController.getRooms);
router.route('/movies').post(RoomController.addRoom);
router.route('/movies/:id').get(RoomController.getRoom);
router.route('/movies/:id').patch(RoomController.updateRoom);
router.route('/movies/:id').delete(RoomController.deleteRoom);

export default router;
