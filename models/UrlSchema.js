const mongoose = require("mongoose")
const shortId = require("shortid")
const Schema = mongoose.Schema

const UrlSchema = new Schema({
    fill: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate()
    },
    clicks: {
        type: Number,
        reqired: true,
        default: 0
    }
})

module.exports = mongoose.model("ShortUrl", UrlSchema) 