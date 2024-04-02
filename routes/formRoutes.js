const express = require("express")
const formRouter = express.Router()
const { getForm, postForm} = require("../controllers/handler")

formRouter.get("/form", getForm)
formRouter.post("/form", postForm)

module.exports = formRouter