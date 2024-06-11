import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ sccess: true, message: "Food saved successfully" });
  } catch (error) {
    console.log(error);
    res.json({ sccess: false, message: "Food not saved" });
  }
};

// get list item food

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove list item food 

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
