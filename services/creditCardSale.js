'use strict'
// save json response to a file
const fs = require('fs');
const axiosInstance = require('../utils/axiosConfig');
const {xmlBody} = require('../xmlRequest/creditCardSale');
const {AccountID, AccountToken, AcceptorID, ApplicationID} = require('../config/credentials');
async function callCreditCardSale() {
    const xmlRequest = xmlBody({AccountID, AccountToken, AcceptorID, ApplicationID});
    const headers = {
        'Content-Type': 'text/xml',
        'Content-Length': xmlRequest.length
    };
    try {
        const response = await axiosInstance.post('',xmlRequest, {headers});
        const key = Object.keys(response.data);
        console.log('Converted JSON:', response.data[key[0]].Response[0]);
        fs.writeFileSync(`outputs/${key[0]}.json`, JSON.stringify(response.data[key[0]].Response[0]));
    } catch (error) {
        console.error('Error calling credit card sale:', error.message);
    }
}

module.exports = callCreditCardSale;

