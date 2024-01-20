const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:2GDz9pddchpSNPb7@cluster0.1gk0os9.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    complete : Boolean
})

const todo = mongoose.model('todo',todoSchema);
module.exports = {
    todo
}