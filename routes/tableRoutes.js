const express = require("express")
const tableRouter = express.Router()
const { getProducts, getDelete} = require("../controllers/handler")

tableRouter.get("/table", getProducts)
tableRouter.get("/delete", getDelete)

module.exports = tableRouter

