
import jwt from "jsonwebtoken";
import { Request, Response } from 'express';
import { isUser } from "../database/dbUser";


export const verifyToken = async (req: Request, res: Response, next: () => void) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
    try {
        const decoded = jwt.verify(token, process.env.KEY) as { id: string };
        req.body.id = decoded.id;
        if (!(await isUser(decoded.id))) {
            return res.status(401).json({ success: false, message: 'No user found..' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
};


export const createToken = async (id: string) => {
    try { 
        const token = jwt.sign({ id: id }, process.env.KEY);
        return { success: true, token: token }
    } catch (error) {
        console.log(`createToken: ${error}`);
        return { success: false, message: 'Authentication failed' };
    }
}

export const validatePassword = async (password: string): Promise<boolean> => {
    const hasNumber = /[0-9]/.test(password); 
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password); 
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const isPasswordValid = hasNumber && hasUpperCase && hasLowerCase && hasSymbol && (password.length >= 8);
    return isPasswordValid;
  }
  