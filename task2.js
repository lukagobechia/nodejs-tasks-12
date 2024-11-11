const http = require("http");
const fs = require("fs/promises");
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "application/json" });
    const data = await fs.readFile("data.json", "utf-8");
    if (data.trim() === "") {
      res.write("Empty File");
    } else res.write(data);

    res.end();
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
