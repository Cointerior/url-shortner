require("dotenv").config()
const express = require("express")
mongoose = require("mongoose")
const connectDB = require("./db/dbconn")
const ShortUrl = require("./models/UrlSchema")
const app = express()

const PORT = process.env.PORT || 3500

app.set("view engine", "ejs")

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render("index", { shortUrls: shortUrls})
})

app.post("/shortUrls", async (req, res) => {
    const { fullUrl } = req.body
    await ShortUrl.create({ full: fullUrl })

    res.redirect("/")
})

app.get("/:shortUrl", async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.save()

    res.redirect(shortUrl.full)
})



mongoose.connection.once("open", () => {
    console.log("Connected to Database")
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
  })