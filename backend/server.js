import express from 'express';
import Data from './data';
const app = express();

app.get("/api/products", (req, res) => {
    res.send(Data.products);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})