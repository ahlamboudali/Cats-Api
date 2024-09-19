const cats = [
    {id: '1', name:'cat1', age: 1},
    {id: '2', name:'cat1', age: 2},
    {id: '3', name:'cat1', age: 3}
];


const catControllers = {
    getCats: (req, res) => {
        res.status(200).json(cats);
    },

    getCatById: (req, res) => {
        const { id } = req.params;
        const catExist = cats.find((cat) => cat.id === id); 

        if (catExist) {
            res.status(200).json(catExist);
        }else {
            res.status(404).send({
                message : 'hhsgh'
            });
        }
    },
    addCat: (req, res) => {
        const { name, age } = req.body;
        if (!name || !age) {
            res.status(400).send('Please provide name and age');
            cats.push(newCat);
            res.status(201).json(newCat);
        }
    },
    updateCat: (req, res) => {},
    deleteCat: (req, res) => {},

};

export default catControllers; 

