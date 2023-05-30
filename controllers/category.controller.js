const Category = require('../models/Category.model');

const categoryController = {


createCategory: async (req, res) => {

    const category = await Category.create(req.body);
    json(category);
},


getCategories: async (req, res) => {

    const categories = await Category.find({});
    res.json(categories);

},

updateCategory: async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(category);

},


deleteCategory: async (req, res) => {

    await Category.findByIdAndDelete(req.params.id);
    res.json("Удаление категории по её ID");

}
}

module.exports = categoryController;