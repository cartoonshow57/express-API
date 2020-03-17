// A simple API which send a random number between a min and max number specified by the user.
// Put the values in the route as /random/min num/max num

const express = require('express');

const app = express();

app.get('/random/:min/:max', (req, res) => {
    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);

    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({
            error: "Bad request"
        });
        return;
    } else {
        let number = Math.floor((Math.random() * (max - min)) + min);
        res.json({
            number: number
        });
    }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
