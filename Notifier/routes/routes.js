var request = require('request');
var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR';
// Router
const router = app => {
    app.get('/', (req, res) => {
        return request(url, function (err, res, json) {
            if (err) {
                throw err;
            }
            console.log(json);
        });
    });
}
// Export the router
module.exports = router;