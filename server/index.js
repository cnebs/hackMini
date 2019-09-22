const express     = require('express');
const cors        = require('cors');
// const compression = require('compression');

const app = express();

const port = 3002;
const host = '0.0.0.0';

app.use(cors());
// app.use(compression());
app.use('/', express.static('./public/index.html'));

app.listen(port, host, () => 
  { console.log(`
    Now listening on ${port} for miniHacks!
  `)
});