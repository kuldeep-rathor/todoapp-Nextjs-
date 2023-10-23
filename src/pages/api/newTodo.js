const mongoose = require("mongoose");

import Todo from "../../../model/Todo";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { title, todo } = req.body;

    await mongoose.connect("mongodb://localhost/nextJSCRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=> console.log("DB CONNECTED"))

    var newTodo = new Todo = new Todo({ title , todo})
    await newTodo.save()
    console.log(newTodo)
  } catch (error) {
    console.log(error)
    res.status(500).json({error : "Internal Error"})
  }finally{
    mongoose.connection.close()
  }
}
export default handler