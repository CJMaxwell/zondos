import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import { version } from "../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zondos REST API Docs",
      version: "0.1.0",
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["../routes/*/index.ts", "../controllers/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

const  swaggerDocs = (app: Express, port: string | number) => {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  //log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;