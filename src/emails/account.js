const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Why go',
        text: `Why are you leaving us, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
