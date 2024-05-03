const mongoose = require('mongoose');//Ne pas oublier cette ligne pour appeler mongoose

const tweetSchema = mongoose.Schema({
 content: String,
 time: { type: Date, default: Date.now },
 author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 NbrLike : { type: Number, default: 0}
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet//ne pas oublier de l'exporter




