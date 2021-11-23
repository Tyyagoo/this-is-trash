const http = require('http');
const bl = require('bl');

function handleResponse(obj) {
  return function(err, data) {
    if (err) obj.data = "error";
    else obj.data = data.toString();
  }
}

const data = [
  {
    url: process.argv[2],
    data: undefined,
  },
  {
    url: process.argv[3],
    data: undefined,
  },
  {
    url: process.argv[4],
    data: undefined,
  }
]


data.forEach((obj, index) => {
  http.get(obj.url, res => res.pipe(bl(handleResponse(obj))));
})

let interval = undefined;
interval = setInterval(() => {
  if (Object.keys(data).length === 0) {
    clearInterval(interval);
    return;
  }
  for(obj of data) {
    if (obj.data === undefined) break;
    console.log(obj.data);
    data.splice(data.indexOf(obj), 1);
  }
}, 100);
