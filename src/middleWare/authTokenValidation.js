import jwt from "jsonwebtoken"

const auth = (req, res,next)=>{
    const token= req.header("auth_token");//get token from the header 
    if(!token)return res.status(401).json("please login first");//confirm if token is present
   
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user= verified;
        next();
    }catch(err){
        res.status(400).json("Invalid Token")
    }
}
export default auth;