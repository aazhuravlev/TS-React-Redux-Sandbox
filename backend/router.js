import Router from "express";
import VehicleController from './VehicleController.js';

const router = new Router();

router.get('/vehicles', VehicleController.getAll);
router.post('/vehicles', VehicleController.create);
router.get('/vehicles/:id', VehicleController.getOne);

export default router;