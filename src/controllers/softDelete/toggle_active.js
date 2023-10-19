const { Event, User, Review } = require('../../db');

async function toggleActive(modelName, id, active) {
  try {
    let Model;
    switch (modelName) {
      case 'Event':
        Model = Event;
        break;
      case 'User':
        Model = User;
        break;
      case 'Review':
        Model = Review;
        break;
      default:
        throw new Error('Modelo no válido');
    }

    const existingRecord = await Model.findById(id);

    if (!existingRecord) {
      throw new Error('Registro no encontrado'); 
    }

    existingRecord.active = active;

    const updatedRecord = await existingRecord.save();

    return updatedRecord;
  } catch (error) {
    throw error;
  }
}

module.exports = toggleActive;
