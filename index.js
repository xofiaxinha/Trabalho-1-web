const app = require('express')();
const PORT = 8080;

app.get('/shirt', (req, res) => {
    res.status(200).send({
        id: 1,
        name: 'Blue Shirt',
    });
});

app.post('/shirt:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        id: 1,
        name: 'Blue Shirt',
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });