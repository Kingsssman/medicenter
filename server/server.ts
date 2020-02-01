import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import service from './routes/service.route';
import doctors from './routes/doctors.route';
import admin from './routes/auth.route'

const mongoUri = 'mongodb+srv://Evgeniy:1234@cluster0-fixk3.azure.mongodb.net/app?retryWrites=true&w=majority';
const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/services', service);
app.use('/api/doctors', doctors);
app.use('/api/auth', admin);

async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        if (process.env.NODE_ENV !== 'test') {
            app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
        }
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

module.exports = app;