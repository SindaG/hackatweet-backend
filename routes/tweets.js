var express = require('express');
var router = express.Router();
require('../models/connection');
const { checkBody } = require('../modules/checkBody');
const Tweet = require('../models/tweets');
// const User = require('../models/users');

router.post('/newtweet', (req, res) => {
  if (!checkBody(req.body, [])) {
    res.json({ result: false, error: 'Your tweet is empty' });
    return;
  } 
      const newTweet = new Tweet({
      content: req.body.text,
      author: req.body._id,
      });

      newTweet.save().then(newDoc => {
        res.json({ result: true, newDoc});
      });

});

router.get('/alltweets', (req, res) => {
    Tweet.findOne().then(data => {
      if (data) {
        res.json({ result: true, allTweets : data});
      } else {
        res.json({ result: false, error: 'No tweet yet' });
      }
    });
})





























module.exports = router;