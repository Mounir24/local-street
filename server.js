const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv/config');


// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('Public'));

// Routes
/*----  HOME  ---*/
app.get('/', (req, res) => {
    res.status(200).render('index');
})

/*----- ORDER ----*/
// PRODUCT 1
app.get('/product1', (req, res) => {
    res.status(200).render('product1');
})

// PRODUCT 2
app.get('/product2', (req, res) => {
    res.status(200).render('product2')
})
// PRODUCT 3
app.get('/product3', (req, res) => {
    res.status(200).render('product3')
})

// PRODUCT 4
app.get('/product4', (req, res) => {
    res.status(200).render('product4')
})

// CONFIRMATION
app.get('/confirmation', (req, res) => {
    res.status(200).render('confirmation');
})

/*----  CREATE ORDER ----*/
app.post('/api/new-order', async (req, res) => {
    // CATCH DATA FROM REQUEST OBJECT
    const info = req.body;
    try {
        // Node mailer function
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.PRIMARY_EMAIL,
                pass: process.env.PRIMARY_PASS
            }
        });

        const mailOptions = {
            from: process.env.PRIMARY_EMAIL,
            to: process.env.SECONDARY_EMAIL,
            subject: `Loco Street: New Order From ${info.firstName}`,
            html: `
            <table style="width: 100%">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Quantity</th>
      <th scope="col">Size</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody style="text-align: center">
    <tr>
      <td>${info.firstName} ${info.lastName}</td>
      <td>${info.email}</td>
      <td>${info.address}</td>
      <td>${info.phone}</td>
      <td>${info.size}</td>
      <td>${info.quantity}</td>
      <td>${info.productType}</td>
    </tr>
  </tbody>
</table>
            `
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                return res.status(400).redirect('/');
            } else {
                console.log(`E-mail sent successfully: ` + info.response);
                res.status(201).redirect('/confirmation')
            }
        })

    } catch (err) {
        res.status(500).json({ status: 500, msg: err.message });
    }



})
// Port
const PORT = process.env.PORT || 4140;
// Listen
app.listen(PORT, () => {
    console.log('Server Up Runing on port: ' + PORT);
})