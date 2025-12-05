import { userModel } from "../models/userModel.js";

const userInput = async (req, res) => {
  const { name, email, phone, selectedDate ,role} = req.body;

  if (!name || !email || !phone || !selectedDate || !role) {
    return res.json({
      success: false,
      message: "Missing details.",
    });
  }

  try {
    const newUser = new userModel({
      role,
      name,
      email,
      phone,
      selectedDate,
    });

    await newUser.save();

    return res.json({
      success:true,
      message: 'Thank you for taking appointment.'
    })

  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { userInput }
