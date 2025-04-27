const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})