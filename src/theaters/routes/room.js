import { Router } from 'express';

import * as RoomController from '../controllers';

const router = new Router();

router.route('/rooms').get(RoomController.getRooms);
router.route('/rooms').post(RoomController.addRoom);
router.route('/rooms/:id').get(RoomController.getRoom);
router.route('/rooms/:id').patch(RoomController.updateRoom);
router.route('/rooms/:id').delete(RoomController.deleteRoom);

export default router;
