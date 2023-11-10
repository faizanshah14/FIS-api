'use strict'
const axios = require('axios');
const xml2js = require('xml2js');
const { API_URL } = require('../config/credentials');
const axiosInstance = axios.create();

const defaultURL = API_URL;
// set default url for all axios requests
axiosInstance.defaults.baseURL = defaultURL;


axiosInstance.interceptors.response.use(async response => {
  const contentType = response.headers['content-type'];
  if (contentType && (contentType.includes('text/xml') || contentType.includes('application/xml'))) {
    try {
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(response.data);
      return { ...response, data: result };
    } catch (error) {
      throw new Error('Failed to parse XML response');
    }
  }
  return response;
}, error => Promise.reject(error));

module.exports = axiosInstance;