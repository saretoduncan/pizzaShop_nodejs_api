import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const mailing = (userEmail, subject, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "duncan.moiyo@gmail.com",
      pass: process.env.MAIL_PASSCODE,
    },
  });

  const value = content.order.map((cont) => {
    return `<tr><td>${cont.crust}</td>
    <td>${cont.size}</td>
    <td>${cont.Cost_cost}</td>
    <td>${cont.toppings}</td>
    <td>${cont.Topping_cost}</td>
    </tr>`;
  });
  const mailOptions = {
    from: "duncan.moiyo@gmail.com",
    to: userEmail,
    subject: subject,
    html: `<h1>Dante Pizza Shop</h1>
    <h4> payment recipt</h4>
      <table>
    ${value}
      </table><br/> <p>total: ksh ${content.total}/=`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export default mailing;
