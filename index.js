const Gdax = require("gdax");
const websocket = new Gdax.WebsocketClient(["BTC-USD"], 'wss://ws-feed.gdax.com', null, {
    "type": "subscribe",
    "product_ids": [
        "BTC-USD",
        "LTC-USD",
        "ETH-USD",
        "BCH-USD"
    ],
    "channels": [
        "level2",
        "heartbeat",
        {
            "name": "ticker",
            "product_ids": [
              "BTC-USD",
              "LTC-USD",
              "ETH-USD",
              "BCH-USD"
            ]
        }
    ]
})


websocket.on('message', data => {
  console.log(data);
});
websocket.on('error', err => { /* handle error */ });
websocket.on('close', () => { console.log(array) });
