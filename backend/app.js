const Koa = require("koa");
const cors = require("@koa/cors");
const Router = require("koa-router");
const authRoutes = require("./routes/authRoute");
const sellerRoutes = require("./routes/sellerRoute");
const orderRoutes = require("./routes/orderRoute");
const { connectDb } = require("./config/dbConfig");
const bodyParser = require("koa-bodyparser");
require("dotenv").config();

const app = new Koa();
const routes = [authRoutes,sellerRoutes,orderRoutes];
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
connectDb();
app.use(bodyParser());

routes.forEach((route) => app.use(route.routes()).use(route.allowedMethods()));

app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`);
});
