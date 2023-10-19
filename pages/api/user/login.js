import { login } from "../../../services/user";

export default function handler(req, res) {
    try{
        const user = login(req.body)
        res.status(200).json(newUser)
    } catch (err){
        res.status(400).json(err.message)
    }
}