import userModel from "../models/userModel.js";

const testServer = async (req, res) => {
  try {
    res.status(201).json({ message: "Server is running" })
  } catch (error) {
    console.log('Error While fetching users data', error)
    res.status(501).json({ error: 'Internal Server Error' })
  }
};

const getUser = async (req, res) => {
  try {
    const userData = await userModel.find();
    res.status(201).json(userData)
  } catch (error) {
    console.log('Error While fetching users data', error)
    res.status(501).json({ error: 'Internal Server Error' })
  }
};

const createUser = async (req, res) => {
  try {
    // console.log(req.body)
    const { name, email, message } = req.body;
    const newUser = new userModel({ name: name, email: email, message: message });

    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.log('Error While creating new user', error)
    res.status(501).json({ error: 'Internal Server Error' })
  }
}
export { testServer, getUser, createUser };