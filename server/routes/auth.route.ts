import {Request, Response, Router} from 'express';
import Admin from '../models/admin.model';
import bcryptjs from 'bcryptjs';
import {check, validationResult} from 'express-validator';

const route = Router();

route.post('/register',
    [
        check('email', 'wrong email').isEmail(),
        check('password', 'wrong password').isLength({min: 6})
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req);
            if (!errors) return res.status(400).json('Incorrect');

            const {email, password} = req.body;

            const candidate = await Admin.findOne({email});

            if (candidate) return res.status(400).json('User already exist');

            const hashedPassword = await bcryptjs.hash(password, 12);
            const admin = new Admin({email, password: hashedPassword});

            await admin.save();
            res.status(201).json('Admin created');

        } catch (e) {
            res.status(500).json({message: 'Something wrong'});
        }
    });

route.post('/login',
    [
        check('email', 'wrong email login').isEmail(),
        check('password', 'wrong password login').exists()
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req);
            if (!errors) return res.status(400).json('Incorrect');

            const {email, password} = req.body;

            const candidate = await Admin.findOne({email});

            if (candidate) return res.status(400).json('Not founded');

            const isMatched = await bcryptjs.compare(password, candidate.password);

            if (!isMatched) return res.status(400).json('Password incorrect');

        } catch (e) {
            res.status(500).json({message: 'Something wrong'});
        }
    });

export default route;