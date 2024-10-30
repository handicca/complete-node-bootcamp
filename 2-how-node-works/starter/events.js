const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: 'Handika'");
});

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

console.log("----------------------");

//////////////////////////////////
const port = 3000;
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", (req, res) => {
  console.log("Server closed");
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
