const swaggerAutogen = require('swagger-autogen')();
     const outputFile = './swagger/swagger_output.json';
     const endpointsFiles = ['./server.js'];
     swaggerAutogen(outputFile, endpointsFiles);