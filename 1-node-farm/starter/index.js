const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules/replaceTemplate");

///////////////////////////////
// File: Reading & Writing

/* Synchronous way
// Read file
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
// Write file
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!n");
*/

// Non-blocking, Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     if (err) return console.log(err);
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//             console.log(data3);

//             fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
//                 console.log("Your file has been written😁!");
//             })
//         })
//     })
// })

// console.log('Will read file!'); // ini akan dijalankan lebih dahulu

///////////////////////////////
// SERVER
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);

const port = 8000;
const server = http.createServer((req, res) => {
  // const pathname = req.url;
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    // Overview page
    res.writeHead(200, { "Content-type": "text/html" });
    const cardHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardHtml);
    res.end(output);
    
  } else if (pathname === "/product") {
    // Product page
    // console.log(query);
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

  } else if (pathname === "/api") {
    // API page
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

  } else {
    // Not found 404
    res.writeHead(404, {
      "Content-type": "text/html",
      "header-buatan": "buatan sendiri",
    });
    res.end("<h1>Page not Found! 404</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
