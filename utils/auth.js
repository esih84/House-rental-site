import {hash, compare} from 'bcryptjs';

export const hashPassword=async(password)=>{
    const hashedPassword = await hash(password,12);
    return hashedPassword;
}

export const verifyPassword=async(password,hashPassword)=>{
    const isValid = await compare(password,hashPassword);
    return isValid;
}