const fs = require("fs")

const DATA_SOURCE = `${__dirname}/../data.json`

const read = async () => {
    return new Promise((res, rej) => {
        fs.readFile(DATA_SOURCE, "utf-8", (err, data) => {
            if (err) {
                return rej(err)
            } else {
                return res(data)
            }
        })
    })
}

const write = async (data) => {
    return new Promise((res, rej) => {
        fs.writeFile(DATA_SOURCE, data, (err) => {
            if (err) {
                return rej(err)
            } else {
                return res()
            }
        })
    })
}



const list = async () => {
    let file = await read()
    let fileData = JSON.parse(file)
    return fileData
}

const add = async (data) => {
    let file = await read()
    let fileData = JSON.parse(file)
    fileData.push(data)
    await write(JSON.stringify(fileData))
}

const remove = async (index) => {
    index = Number(index)
    let file = await read()
    let fileData = JSON.parse(file)
    let newData = fileData.filter((_, i) => index !== i)
    await write(JSON.stringify(newData))
}

const update = async (index, newData) => {

    let fileData = await read()
    fileData = JSON.parse(fileData)
    fileData[index] = newData
    await write(JSON.stringify(fileData))

};


module.exports = {
    list,
    add,
    remove,
    update,
}
