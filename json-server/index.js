const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
server.use(jsonServer.bodyParser);

const router = jsonServer.router(path.resolve(__dirname, "data.json"));

server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Разрешить все источники
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

server.use(jsonServer.defaults());

server.use(router);

server.listen(8080, () => {
  console.log("server is running on 8080 port");
});
