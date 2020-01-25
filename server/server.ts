// @ts-ignore
const express = require('express')
const mongoose = require('mongoose')

const mongoUri = "mongodb+srv://Evgeniy:1234@cluster0-fixk3.azure.mongodb.net/app?retryWrites=true&w=majority"
const PORT = 5000

const app = express()

app.get('/', (req:any,res:any) => {
    res.send('Home Page')
});

async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
