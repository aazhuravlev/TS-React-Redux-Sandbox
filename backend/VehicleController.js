import VehicleService from './VehicleService.js';

class VehicleController {
  async create(req, res) {
    try {
      const vehicle = await VehicleService.create(req.body, req.files.image);

      return res.json(vehicle);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async getAll(req, res) {
    try {
      const vehicles = await VehicleService.getAll();

      res.json(vehicles);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async getOne(req, res) {
    try {
      const vehicle = await VehicleService.getOne(req.params.id);

      return res.json(vehicle);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new VehicleController();