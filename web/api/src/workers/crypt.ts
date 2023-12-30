import * as CryptoJS from 'crypto-js';
import bcrypt from 'bcrypt';

require('dotenv').config();

export const encrypt = async (text: string) => {
  const ciphertext = CryptoJS.AES.encrypt(text, process.env.KEY).toString();
  return ciphertext.replace(/\//g, ':');
}

export const decrypt = async (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext.replace(':', '/'), process.env.KEY);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}


export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
}

export const checkPassword = async (inputPassword: string, hashedPassword: string): Promise<boolean> => {
  try {
    const match = await bcrypt.compare(inputPassword, hashedPassword);
    return match;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
}
