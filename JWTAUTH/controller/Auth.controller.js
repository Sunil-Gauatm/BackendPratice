import { userModel } from '../model/user.model.js'
import bcrypt from 'bcrypt'
import { GenerateToken } from '../config/JWTtoken.js'


export const signup = async (req, res) => {
    try {

        const { fullname, email, phonenumber, password } = req.body
        const existinguser = await userModel.findOne({ email })
        if (existinguser) {
            return res.status(400).json({ message: "User already Existed !! please procced to login" })
        }
        const hashedpassword = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
            fullname,
            email,
            phonenumber,
            password: hashedpassword
        })


        res.status(200).json({ message: "User Created Sucessfullyyyy", data: newUser })


    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })

    }
}


export const login = async (req, res) => {

    try {
        const { email, password } = req.body

        const loginuser = await userModel.findOne({ email })

        if (!loginuser) {
            return res.status(400).json({ message: "Invalid Credentails" })
        }
        const comparepassword = await bcrypt.compare(password, loginuser.password)

        if (!comparepassword) {
            return res.status(400).json({ message: "Invalid Credentails" })
        }
        const token = GenerateToken({id :loginuser._id  , email : loginuser.email})
        res.status(200).json({ message: "Login Success !!!", token ,  data: { id : loginuser._id , email: loginuser.email   } })

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })

    }

}