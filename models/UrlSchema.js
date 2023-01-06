const mongoose = require("mongoose")
const shortId = require("shortid")
const Schema = mongoose.Schema

const UrlSchema = new Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate()
    }
})

module.exports = mongoose.model("ShortUrl", UrlSchema) 