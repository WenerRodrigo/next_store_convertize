const express = require('express');
const app = express();

app.get('/:keyword', async(req, res) => {
    const response = await fetch(`https://demo.convertize.com.br/api/1.0/public/search/${req.params.keyword}}/`);
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data)
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})
