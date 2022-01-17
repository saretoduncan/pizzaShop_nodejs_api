import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()
const stripe = Stripe(process.env.SECRET_KEY);
stripe.charges.create({
    amount:1000,
    currency:"usd",
    source:"tok_mastercard",
    metadata:{order_id:'6789'},
    receipt_email:'saretoduncan@outlook.com'
},(err,res)=>{
    console.log(res)
})
export default stripe