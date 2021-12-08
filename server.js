const app = require('express')();
const express = require('express')
const index = require('./routes/index');
const cors = require('cors')

app.use(cors())

app.use(express.json())
const db = require('./middlewares/db.config.js');

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
});


const PORT = process.env.PORT || 5000;
app.use("/api/v1", index)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));