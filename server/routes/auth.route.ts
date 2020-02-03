import {Request, Response, Router} from 'express';
import Admin from '../models/admin.model';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {check, validationResult} from 'express-validator';

const route = Router();
const jwtSecret = 'evgeniy web';

route.post('/register',
    [
        check('email', 'wrong email').isEmail(),
        check('password', 'wrong password').isLength({min: 6})
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req);

            if (!errors) return res.status(400).json({message: 'Incorrect data'});

            const {email, password} = req.body;

            const candidate = await Admin.findOne({email});

            if (candidate) return res.status(400).json({message: 'Admin already exist'});

            const hashedPassword = await bcryptjs.hash(password, 12);
            const admin = new Admin({email, password: hashedPassword});

            await admin.save();
            res.status(201).json({message: 'Admin created'});

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
            if (!errors) return res.status(400).json({message: 'Incorrect data'});

            const {email, password} = req.body;

            const user: any = await Admin.findOne({email});

            if (!user) return res.status(400).json({message: 'Incorrect email'});

            const isMatched = await bcryptjs.compare(password, user.password);

            if (!isMatched) return res.status(400).json({message: 'Incorrect password'});

            const token = jwt.sign(
              {userId: user.id},
              jwtSecret,
              {expiresIn: '1h'}
            );

            res.json({token, userId: user.id})
        } catch (e) {
            res.status(500).json({message: 'Something wrong'});
        }
    });

export default route;