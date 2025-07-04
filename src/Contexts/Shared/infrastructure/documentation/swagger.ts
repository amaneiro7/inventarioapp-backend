
import swaggerJSDoc from 'swagger-jsdoc';
import { config } from '../config';

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventario API',
      version: '2.0.0',
      description: 'Documentación de la API del sistema de gestión de inventario',
    },
    servers: [
      {
        url: `http://localhost:${config.port}${config.baseApiUrl}`,
        description: 'Servidor de Desarrollo',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/**/*.route.ts', './src/**/*.route.js'], // Apunta a tus archivos de rutas
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
