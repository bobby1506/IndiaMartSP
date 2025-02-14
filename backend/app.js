const Koa = require("koa");
const Router = require("koa-router");
const authRoutes = require("./routes/authRoute");
const sellerRoutes = require("./routes/sellerRoute");
const { connectDb } = require("./config/dbConfig");
const bodyParser = require("koa-bodyparser");
require("dotenv").config();

const app = new Koa();
const routes = [authRoutes,sellerRoutes];
connectDb();
app.use(bodyParser());

routes.forEach((route) => app.use(route.routes()).use(route.allowedMethods()));

app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`);
});
