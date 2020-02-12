import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import service from '../server/routes/service.route';
import doctors from '../server/routes/doctors.route';
import admin from '../server/routes/auth.route'
import config from 'config';


const mongoUri:string = config.get('mongoUri');
const PORT:number = config.get('port');

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

export default app