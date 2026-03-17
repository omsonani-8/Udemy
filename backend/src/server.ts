import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./helper/winston";
import { userRouter } from "./routes/user.route";
import swaggerDocument from "../src/utils/swagger";
import swaggerUi from "swagger-ui-express";
import path from "path";


dotenv.config();
const app: Express = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,               
  })
);



app.use("/public", express.static(path.join(__dirname,"../" ,"public")));

app.use("/public", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT  || 3000;
app.use("/user",userRouter); 

app.listen(PORT, () => {
  logger.info(`server running at port http://localhost:${PORT}`);
  console.log(`server running at port http://localhost:${PORT}`);
});
