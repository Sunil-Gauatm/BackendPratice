import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const Secret = process.env.JWTSECRETKEY


export const GenerateToken = (playload , expiresIn = "1d") => {
    return jwt.sign(playload , Secret , {expiresIn})
}