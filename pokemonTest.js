const ApiManager = require('./apiManager')
const apiManager = new ApiManager()

const GET = async function(type, value) {
  let getRequest = await apiManager.getPokemons(type, value)
  console.log("\x1b[33m%s\x1b[0m", "*** GET Request ***")
  console.log("Status Code: " + getRequest.status)
  console.table(getRequest.body)
}

const POST = async function(id, name, type, height, weight) {
  let postRequest = await apiManager.postPokemon(id, name, type, height, weight)
  console.log("\x1b[32m%s\x1b[0m", "*** POST Request ***")
  console.log("Status Code: " + postRequest.status)
  console.table(postRequest.body)
}

const PUT = async function(type, value, changedType, changedValue) {
  let putRequest = await apiManager.putPokemon(type, value, changedType, changedValue)
  console.log("\x1b[32m%s\x1b[0m","*** PUT Request ***")
  console.log("Status Code: " + putRequest.status)
  console.table(putRequest.body)
}

const DELETE = async function(type, value) {
  let deleteRequest = await apiManager.deletePokemon(type, value)
  console.log("\x1b[31m%s\x1b[0m","*** DELETE Request ***")
  console.log("Status Code: " + deleteRequest.status)
  console.table(deleteRequest.body)
}


// POST(190, "Lior", "bubu", 8, 6)
// GET("id", 190)
// PUT("height", 3, "id", 4)
// GET()
DELETE("id", 2)
GET("id", 1)
