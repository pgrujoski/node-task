const express = require("express")
const formRoutes = require("./routes/formRoutes")
const tableRoutes = require("./routes/tableRoutes")
const updateRoutes = require("./routes/updateRoutes")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/", formRoutes)
app.use("/", tableRoutes)
app.use("/", updateRoutes)

const port = 8001

app.listen(port, (err) => {
    if (err) console.log(err)
    console.log(`Server is running on port ${port}`)
})