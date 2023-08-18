import { createTransport } from "nodemailer"


export const sendMail = async (text) => {

    const transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMPTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        subject: "CONTACT request from portfolio.",
        to: process.env.MY_MAIL,
        from: process.env.MY_MAIL,
        text
    })
}
