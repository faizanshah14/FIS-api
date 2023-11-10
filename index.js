require('dotenv').config();
const express = require('express');

const callSetupTransaction = require('./services/setupTransaction');
const callCreditCardAuthorization = require('./services/creditCardAuthorization');
const checkQuery = require('./services/checkQuery');
const callCreditCardReversalFull = require('./services/creditCardReversalFull');
const callCreditCardAVSOnly = require('./services/creditCardAVSOnly');
const callCreditCardSale = require('./services/creditCardSale');
const callCreditCardAuthorizationCompletion = require('./services/creditCardAuthorizationCompletion');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/payment', async (req, res) => {
    const result = await callSetupTransaction();
    const iframeHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Payment Api</title>
      </head>
      <body>
        <iframe style="
        width: 100%;
        height: 100vh;
        "
       src="https://certtransaction.hostedpayments.com/?TransactionSetupID=${result}"></iframe>
      </body>
    </html>
  `;

    res.setHeader('Content-Type', 'text/html');

    res.send(iframeHtml);
})

app.get('/creditCardAuthorization', async (req, res) => {

    const result = await callCreditCardAuthorization();
    res.send(result);
})
app.get('/', async (req, res) => { /*
  sample response 
{
  "HostedPaymentStatus": "Complete",
  "TransactionSetupID": "FF28AAFB-C5A0-452D-9E4E-41D642442678",
  "TransactionID": "308073127",
  "ExpressResponseCode": "0",
  "ExpressResponseMessage": "Approved",
  "AVSResponseCode": "Y",
  "CVVResponseCode": "P",
  "ApprovalNumber": "806540",
  "LastFour": "0000",
  "ValidationCode": "E370B94DA8EC48E7",
  "CardLogo": "Discover",
  "ApprovedAmount": "1.00",
  "BillingAddress1": "123 Main",
  "BillingZipcode": "85044",
  "Bin": "353011",
  "Entry": "Manual",
  "NetTranID": "233080141209426",
  "TranDT": "2023-11-04 14:12:09"
}


  */
    console.log('req.query', req);
    return res.send(req.query);
})

app.get('/checkQuery', async (req, res) => {
    const result = await checkQuery();
    res.send(result);
})

app.get('/creditCardReversalFull', async (req, res) => {
    const result = await callCreditCardReversalFull();
    res.send(result);
})

app.get('/creditCardAVSOnly', async (req, res) => {
    const result = await callCreditCardAVSOnly();
    res.send(result);
}
)

app.get('/creditCardSale', async (req, res) => {
    const result = await callCreditCardSale();
    res.send(result);
})

app.get('/creditCardAuthorizationCompletion', async (req, res) => {
    const result = await callCreditCardAuthorizationCompletion();
    res.send(result);
}
)

