export const SignupValidation = (req, res, next) => {
    try {
        const { fullname, email, phonenumber, password } = req.body;

        if (!fullname) {
            return res.status(400).json({ message: "Please enter the fullname" });
        }

        if (fullname.length < 3) {
            return res.status(400).json({ message: "Fullname must be at least 3 characters long" });
        }

        if (!email) {
            return res.status(400).json({ message: "Please enter the email" });
        }

        if (!phonenumber) {
            return res.status(400).json({ message: "Please enter the phonenumber" });
        }

        if (!password) {
            return res.status(400).json({ message: "Please enter the password" });
        }

        if (password.length < 4) {
            return res.status(400).json({ message: "Password must be at least 4 characters long" });
        }

        next();

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
