// task 2, task 3, task 4, task 5, task 6 are included;
const http = require("http");
const fs = require("fs/promises");
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    console.log(req.url);
    if (req.url === "/") {
      // task 2
      res.writeHead(200, { "Content-Type": "application/json" });
      const data = await fs.readFile("data.json", "utf-8");
      if (data.trim() === "") {
        res.write("Empty File");
      } else res.write(data);
      res.end();
    } else if (req.url === "/random") {
      // task 3
      res.writeHead(200, { "Content-Type": "text/plain" });
      const randomNum = Math.floor(Math.random() * 101);
      res.write(randomNum.toString());
      res.end();
    } else if (req.url === "/html") {
      // task 4
      res.writeHead(200, { "Content-Type": "text/html" });
      const html = await fs.readFile("index.html");
      res.write(html);
      res.end();
    } else if (req.url === "/current") {
      // task 5
      res.writeHead(200, { "Content-Type": "text/plain" });
      const d = new Date();
      const date = d.toISOString();
      res.write(date);
      res.end();
    } else if (req.url === "/api") {
      // task 6
      res.writeHead(200, { "Content-Type": "application/json" });
      const animals = await fs.readFile("animals.json", "utf-8");
      res.write(animals);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
    }
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.write("internal error");
    console.log("Error occurred: ", e);
    res.end();
  }
});

server.listen(port, (e) => {
  if (e) {
    console.log("Error occurred: ", e);
  } else {
    console.log(`Server is listening on port http://localhost:${port}/`);
  }
});
