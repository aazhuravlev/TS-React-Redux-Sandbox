import Vehicle from './Vehicle.js';
import FileService from './FileService.js';

class VehicleService {
  async create(newVehicle, image) {
    const fileName = FileService.saveFile(image);
    return Vehicle.create({ ...newVehicle, image: fileName });
  }

  async getAll() {
    return Vehicle.find().skip(0).limit(21);
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не найден');
    }

    return Vehicle.findOne({ id });
  }
}

export default new VehicleService();