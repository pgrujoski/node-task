const express = require("express")
const updateRouter = express.Router()

const { getUpdate, postUpdate} = require("../controllers/handler")

updateRouter.get("/update", getUpdate)

updateRouter.post("/update", postUpdate)

module.exports = updateRouter

