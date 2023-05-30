const mongoose = require('mongoose');


const basketSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }, // (ссылка на модель Клиента)
  medicines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' }] // Лекарства в корзине (ссылки на модель Лекарства)
});

module.exports = mongoose.model('Basket', basketSchema);
