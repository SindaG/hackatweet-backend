var express = require('express');
var router = express.Router();
require('../models/connection');
const { checkBody } = require('../modules/checkBody');
const Tweet = require('../models/tweets');
const User = require('../models/users');



let tweets = []

router.post('/tweets', (req, res) => {
  if (!checkBody(req.body, ['newTweet'])) {
    res.json({ result: false, error: 'Your tweet is empty' })
    return;
  } else {
    tweets.push(req.body.newTweet);
    res.json({ tweetsList: tweets })
  }
});

router.post('/tweets', (req, res) => {
  if (!checkBody(req.body, [])) {
    res.json({ result: false, error: 'Your tweet is empty' });
    return;
  } 
      const newTweet = new Tweet({
      content: req.body.string,
      time: req.body.date,
      author: User._id,
      NbrLike: 0
      });

      newTweet.save().then(newDoc => {
        res.json({ result: true, newDoc});
      });
  });





























module.exports = router;