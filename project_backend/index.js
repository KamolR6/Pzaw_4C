const express = require("express")
const cors = require("cors")


const application = express()
application.use(cors())
const dataGlobal = []
application.use(express.json())

application.get("/", (request, response) => {
    response.send("<div><p> Fortnite is the best game in the universe </p> </div>")
})

application.get("/fortnite", (request, response) => {
    response.status(500)
    response.send("<div><img src='https://static.wikia.nocookie.net/fortnite/images/1/11/Bars_(Large)_-_Currency_-_Fortnite.png'></div>")
})

application.post("/abc", (request, response) => {
    const data = request.body
    console.log(data)
    dataGlobal.push(data)
    response.send()
})
application.get("/cba", (request, response) => {
    response.send(dataGlobal)
})
// application.get("/cba", (express.request, express.response) => {
//     response.send(dataGlobal)
//})
// sci/4c/abc
const sci_router = express.Router()
sci_router.get("/", (request, response) => {
    response.send("ruter orange");
})
sci_router.get("/json", (request, response) => {
    const data = {
        ch1s7: "winterfest",
        ch2s2: "Sentino - Midas",
        ch2s4: "Avendzers"
    }
    response.json(data)
})

application.use("/sci", sci_router)

application.listen(8000, () => {
    console.log("Yo skurkowancu, serwer's up!")
})