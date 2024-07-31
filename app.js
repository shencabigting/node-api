const express = require('express');
const app = express();
const commentRoute = require('./routes/Comment');

app.use('/comment', commentRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000...')
});
