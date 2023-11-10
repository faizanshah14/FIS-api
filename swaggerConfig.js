'use strict'

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'FIS API Documentation', // Title of your API
      version: '1.0.0', // Version of your API
      description: 'Documentation for your API',
    },
  },
  // List of files to be processed by swagger-jsdoc
  apis: ['./index.js'], // Replace with the path to your routes file
};

const specs = swaggerJsdoc(options);

module.exports = specs;
