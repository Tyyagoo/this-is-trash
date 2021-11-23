const http = require('http');
const URL = require('url');

const port = process.argv[2];
const server = http.createServer(requestHandler);
server.listen(port);


function requestHandler(req, res) {
  const url = URL.parse(req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const body = routeHandler(url.pathname, url.query);
  res.end(JSON.stringify(body));
}

function routeHandler(path, queryParams) {
  const params = parseQueryParams(queryParams);

  if (path === "/api/parsetime") return formattedTime(params.iso);

  if (path === "/api/unixtime") return unixTime(params.iso);


  return "404 - Not Found";
}

function parseQueryParams(params) {
  return params.split('&')
     .map(query => query.split('='))
     .reduce((prev, curr) => (
       {
          ...prev,
          [curr[0]]: curr[1],
       }
     ), {});
}

function formattedTime(iso) {
  const date = new Date(iso);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixTime(iso) {
  const date = new Date(iso);
  return { unixtime: date.getTime() };
}
