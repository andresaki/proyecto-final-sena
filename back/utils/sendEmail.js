const nodemailer = require("nodemailer");

const sendEmail = async options => {

    const transport = nodemailer.createTransport({
        host: "smtp.outlook.com",
        port:  587,
        auth: {
           user: "SistemaErp_@outlook.com",
           pass: "xfhhsmhyejdmavsb"
        }
    });

    const mensaje = {
        from: "Sistema Erp <SistemaErp_@outlook.com>",
        to: options.email,
        subject: options.subject,
        // text: options.mensaje
        html: options.mensaje
    }

    await  transport.sendMail(mensaje)
}

module.exports = sendEmail