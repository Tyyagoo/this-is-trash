const net = require('net');

const port = process.argv[2];
const server = net.createServer(listener);
server.listen(port);


function listener(socket) {
  const date = new Date();
  const formatted = formatDate(date);
  socket.write(formatted);
  socket.end();
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  return `${year}-${month}-${day} ${hours}:${minutes}\n`;
}

function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

