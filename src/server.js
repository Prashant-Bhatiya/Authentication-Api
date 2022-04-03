const app = require("./index");

const connect = require("./configs/db");

const port = process.env.PORT || 6000;

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");

const { Register, Login } = require("./controllers/auth.controller");

app.use("/users", userController);

app.post("/register", Register);

app.post("/login", Login);

app.use("/products", productController)

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening to port no at ${port}`);
  } catch (error) {
    console.log(error);
  }
});
