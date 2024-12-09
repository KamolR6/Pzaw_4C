const express = require("express")
const cors = require("cors")
const e = require("express")


const application = express()
application.use(cors())
application.use(express.json())
const dataGlobal = []

filePathPokedex = require("../project_backend/pokedex.json")
filePathTypes = require("../project_backend/types.json")
pokemonRouter = express.Router()
pokemonRouter.use(express.json())
const dataPokedex = []
const dataTypes = []

pokemonRouter.post("/", (request, response) => {

})
pokemonRouter.get("/", (request, response) => {
    filePathPokedex.forEach(element => {
        response.send(
            element
        )
    })

})
pokemonRouter.get("/type", (request, response) => {
    const lang = request.query.lang || "english"; 
    const types = filePathTypes.map(type => type);
    response.json(types);

    // filePathTypes.forEach(element => {
    //     response.send(
    //         element.english
    //     )    
    // })
    // response.send(filePathTypes.map((el,id) => {el.english}))
})

pokemonRouter.get("/pokemons", (request, response) => {
    dataPokedex.push(filePathPokedex.map(el => el))
    response.json(dataPokedex[0]);

    // filePathTypes.forEach(element => {
    //     response.send(
    //         element.english
    //     )    
    // })
    // response.send(filePathTypes.map((el,id) => {el.english}))
})
// application.post("/abc", (request, response) => {
//     const data = request.body
//     console.log(data)
//     dataGlobal.push(data)
//     response.send()
// })
// application.get("/cba", (request, response) => {
//     response.send(dataGlobal)
// })

application.use("/pokedex", pokemonRouter)
application.listen(8000, () => {
    console.log("Yo skurkowancu, serwer's up!")
})