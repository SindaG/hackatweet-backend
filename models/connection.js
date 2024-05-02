const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://sinda_wckdsgn:7m430fUmbLwczcEc@cluster0.n4tsjwy.mongodb.net/hackatweet';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));