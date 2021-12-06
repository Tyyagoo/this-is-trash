const WebSockets = require('ws');

const ws = new WebSockets('ws://localhost:8099');
const stream = WebSockets.createWebSocketStream(ws);

stream.pipe(process.stdout);
stream.write('hello\n');
