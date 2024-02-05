import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3002;
const API_URL = "https://cat-fact.herokuapp.com";

app.get('/' , (req, res) =>{
    res.render('index.ejs');
});

app.get('/facts' , async (req, res) => {
    try{
        const response = await axios.get(API_URL+'/facts');
        const facts = response.data.map(fact => fact.text);
        res.render('facts.ejs', {
            facts: facts
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
})

app.listen(port, () => {
    console.log(`Server is running on http"//localhost: ${port}`)
});