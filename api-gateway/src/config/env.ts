import dotenv from 'dotenv';
dotenv.config();


const envVars = process.env;

export const env = {
    PORT:envVars.PORT,
    NODE_ENV:envVars.NODE_ENV,
}