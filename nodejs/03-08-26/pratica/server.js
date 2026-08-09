import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    data: "Meu Primeiro Servidor",
  };
  const stringifiedData = JSON.stringify(data);
  res.end(stringifiedData);
});

const port = 8001;

server.listen(port, () => {
  console.info(`Server is waiting on http://localhost:${port}`);
});
