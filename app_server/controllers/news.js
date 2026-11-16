var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: "Travlr Getaways", news: newsData });
}

module.exports = {
    news
}