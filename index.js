const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 1234;
app.listen(port, () => {
    console.log(`Server is start on port ${port}`);
});