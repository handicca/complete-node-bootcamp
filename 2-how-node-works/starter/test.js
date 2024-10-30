const url = require('url');

const urlString = 'https://www.example.com:8080/path/name?query=string#hash';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);