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
    const searched = request.query.searched?.toLowerCase() || ""; // Convert searched term to lowercase
    const types = request.query.types ? JSON.parse(request.query.types) : []; // Parse types if provided or default to an empty array

    const filteredPokemons = filePathPokedex.filter(pokemon => {
        // Check if the name contains the searched term
        const nameMatches = Object.values(pokemon.name).some(name => 
            name.toLowerCase().includes(searched)
        );

        // Check if the Pokémon has at least one matching type
        const typeMatches = types.length === 0 || types.some(type => 
            pokemon.type.includes(type)
        );

        // Only include Pokémon that match both criteria
        return nameMatches && typeMatches;
    });

    response.json(filteredPokemons);
});

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