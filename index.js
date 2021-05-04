const express = require('express');
const app = express(), port = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.status(200).send('Server is running...');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})