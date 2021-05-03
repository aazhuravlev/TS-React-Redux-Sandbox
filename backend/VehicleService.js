import Vehicle from './Vehicle.js';
import FileService from './FileService.js';

class VehicleService {
  async create(newVehicle, image) {
    const fileName = FileService.saveFile(image);
    return Vehicle.create({ ...newVehicle, image: fileName });
  }

  async getAll(page = 1, limit = 21) {
    return Vehicle.find().skip((page - 1) * limit).limit(limit);
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не найден');
    }

    return Vehicle.findOne({ id });
  }
}

export default new VehicleService();