const WebSocket = require('ws');

const wss  = new WebSocket.Server({
    port: 9899
});

wss.on('connection', function(ws){
    ws.on('message',function(data){
        ws.send(data);
    })
})
