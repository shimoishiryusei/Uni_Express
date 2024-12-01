const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        res.json({ joke: data.value }); // data.valueでジョークの文章のみを取得
    } catch (error) {
        res.status(500).json({
            joke: 'Failed to fetch Chuck Norris joke'
        });
    }
});

module.exports = router;