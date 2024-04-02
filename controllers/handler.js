const { 
    list,
    add,
    remove,
    update,
} = require("../models/stock")


const getForm = (req, res) => {
    res.render("form")
}

const postForm = async (req, res) => {
    let stockData = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        quantity: req.body.quantity,
        daysLeftToUse: req.body.dayslefttouse,
        placeWhereAvailable: req.body.placewhereavailable,
    }

    await add(stockData)
    res.redirect("/table")
}

const getProducts = async (req, res) => {
    let data = await list()
    res.render("table", { data })
}

const getDelete = async (req, res) => {
    await remove(req.query.index)
    res.redirect("/table")
}


const postUpdate = async (req, res) => {
    const index = Number(req.body.index)
    const newData = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        quantity: req.body.quantity,
        daysLeftToUse: req.body.dayslefttouse,
        placeWhereAvailable: req.body.placewhereavailable,
    }
    await update(index, newData)
    res.redirect("/table")
}


const getUpdate = async (req, res) => {
    const index = req.query.index
    const data = await list()
    const product = data[index]
    if (product) {
        res.render("update", { product, index })
    } else {
        res.render("update", { product: null, index });
    }
}

module.exports = {
    getForm,
    postForm,
    getProducts,
    getDelete,
    getUpdate,
    postUpdate,
}