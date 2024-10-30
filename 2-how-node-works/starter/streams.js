const fs = require("fs");
const server = require("http").createServer();

const port = 3000;

server.on("request", (req, res) => {
  // Solution 1 - ini akan memakan waktu lama jika file berukuran besar
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // Solution 2 - ini menimbulkan masalah back presure (tekanan balik) membebani respone
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", chunk => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", err => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not Found");
  //   });

  //   Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
