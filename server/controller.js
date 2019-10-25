getAllHouses = (req, res) => {
    const db = req.app.get('db');

    db.get_houses()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Something malfunctioned" })
        console.log(err)
    })
}

createHouse = (req, res) => {
    const {name, address, city, state, zipcode, img, mortage, rent} = req.body;
    const db = req.app.get('db');

    db.create_house([name, address, city, state, zipcode, img, mortage, rent])
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Something malfunctioned" })
        console.log(err)
    })
}

deleteHouse = (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db');

    db.delete_house(id)
    .then(() => {
        res.sendStatus(200);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Something malfunctioned" })
        console.log(err)
    })
}

getOneHouse = (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db');

    db.get_house(id)
    .then(house => {
        res.status(200).json(house)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Something malfunctioned" })
        console.log(err)
    })
}

module.exports = {
    getAllHouses,
    createHouse,
    deleteHouse,
    getOneHouse
}