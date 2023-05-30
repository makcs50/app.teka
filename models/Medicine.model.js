const mongoose = require('mongoose');


const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, //(ссылка на модель Категории)
  prescriptionRequired: { type: Boolean, default: true }, // Требуется ли рецепт для лекарства
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Medicine', medicineSchema);
