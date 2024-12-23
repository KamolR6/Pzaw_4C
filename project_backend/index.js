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
    const searched = request.query.searched?.toLowerCase() || ""; 
    const types = request.query.types ? JSON.parse(request.query.types) : []; 

    const filteredPokemons = filePathPokedex.filter(pokemon => {

        const nameMatches = Object.values(pokemon.name).some(name => 
            name.toLowerCase().includes(searched)
        );


        const typeMatches = types.length === 0 || types.some(type => 
            pokemon.type.includes(type)
        );


        return nameMatches && typeMatches;
    });

    response.json(filteredPokemons);
});

pokemonRouter.get("/:id", (request, response) => {
    const id = parseInt(request.params.id, 10); 

    const pokemon = filePathPokedex.find(p => p.id === id); 
    if (pokemon) {
        response.json(pokemon); 
    } else {
        response.status(404).json({ error: "Pokemon not found" });
    }
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