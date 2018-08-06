const express = require('express')
const app = express()

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use('/data', express.static('/mnt/c/Users/dh29/Desktop/OPC-data'));
app.use('/assets', express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});



app.listen(8000, () => console.log('Example app listening on port 8000!'))