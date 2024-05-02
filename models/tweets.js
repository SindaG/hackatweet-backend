const mongoose = require('mongoose');//Ne pas oublier cette ligne pour appeler mongoose


const tweetSchema = mongoose.Schema({
 content: String,
 time: Date,
 author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },//clef étrangère qui renvoit à l'auteur du tweet
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet//ne pas oublier de l'exporter