'use strict'

const fs = require('fs');
const axiosInstance = require('../utils/axiosConfig');
const {xmlBody} = require('../xmlRequest/checkQuery');
const {AccountID, AccountToken, AcceptorID, ApplicationID} = require('../config/credentials');
const simplifyObject = require('../utils/simplifyObjects');
async function callCheckQuery() {
    const xmlRequest = xmlBody({AccountID, AccountToken, AcceptorID, ApplicationID});
    const headers = {
        'Content-Type': 'text/xml',
        'Content-Length': xmlRequest.length
    };
    try {
        const response = await axiosInstance.post('',xmlRequest, {headers});
        //get keys from response.data object
        const key = Object.keys(response.data);
        const result =  simplifyObject(response.data[key[0]].Response[0])
        console.log('Converted JSON:', result);
        fs.writeFileSync(`outputs/${key[0]}.json`, JSON.stringify(result));
    } catch (error) {
        console.error('Error calling check query:', error.message);
    }
}

module.exports = callCheckQuery;