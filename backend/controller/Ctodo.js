const { todo } = require('../models/index')

exports.getTodos = async (req, res) => {
    try {
        const todos = await todo.findAll();
    } catch (error) {
        console.error(error);
    }
}

exports.postTodos = async (req, res) => {
    try {
        console.log(req.body);
        const {title, done} = req.body;
        const newTodo = await todo.create({
            title, done, createdAt, updatedAt
        });
    } catch (error) {
        console.error(error);
    }
}

exports.getTodo = async (req, res) => {
    try {
        const todo = await todo.findOne()
    } catch (error) {
        console.error(error);
    }
}