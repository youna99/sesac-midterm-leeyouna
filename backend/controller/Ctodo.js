const { where } = require('sequelize');
const { todo } = require('../models/index')

exports.getTodos = async (req, res) => {
    try {
        const todos = await todo.findAll();
        res.json(todos)
    } catch (error) {
        console.error(error);
    }
}

exports.postTodos = async (req, res) => {
    try {
        console.log(req.body);
        const {title, done} = req.body;
        const newTodo = await todo.create({
            title, done
        });
        res.json(newTodo);
    } catch (error) {
        console.error(error);
    }
}

exports.getTodo = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const todo1 = await todo.findOne({
            where: { id }
        });
        res.json(todo1)
    } catch (error) {
        console.error(error);
        res.status(500).send('Todo not found')
    }
}

exports.patchTodos = async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);

        const { id } = req.params;
        const { title, done } = req.body;

        const updateTodo = await todo.update(
            {title,done},
            {where: {id}}
        );
        res.json(updateTodo)
    } catch (error) {
        console.error(error);
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        console.log(req.params);

        const { id } = req.params;
        const isDeleted = await todo.destroy({
            where: { id }
        })
        console.log("isDeleted", isDeleted);
        if (isDeleted) {
            return res.send(true);
        } else {
            return res.send(false)
        }
    } catch (error) {
        console.error(error);
    }
}