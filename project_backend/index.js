const express = require("express")

const application = express()

application.get("/", (request, response) => {
    response.send("<div><p> Fortnite is the best game in the universe </p> </div>")
})

application.get("/abc", (request, response) => {
    response.status(500)
    response.send("<div><p> Fortnite is the best game in the world </p> </div>")
})

application.post("/abc", (request, response) => {
    response.status(500)
    response.send("negros means blacks")
})
// sci/4c/abc
const sci_router = express.Router()
sci_router.get("/", (request, response)=>{
    response.send("ruter orange");
})
sci_router.get("/json", (request, response)=>{
    const data = {
        ch1: "winter",
        ch2: 2
    }
    response.json(data)
})

application.use("/sci", sci_router)

application.listen(8000, () => {
    console.log("Yo skurkowancu, serwer's up!")
})