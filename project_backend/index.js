const express = require("express")

const application = express()

application.get("/", (request, response) => {
    response.send()
})


application.listen(8000, () => {
    console.log("Yo skurkowancu, serwer's up!")
})