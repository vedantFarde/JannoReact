const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportSetup = require("./utility/passport");
const authRouter = require("./router/auth");
const DBConnection = require("./utility/MongoDbConnect");
const userRoutes = require("./router/manualauth");
const uplodRoutes = require("./router/uplodRoutes");
const cookieParser = require("cookie-parser");

const app = express();
DBConnection();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    name: "session",
    secret: "dgkdgidjogodjgojdjgodjgdj",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passportSetup(passport);

app.use("/auth", authRouter);
app.use("/auth", userRoutes);
app.use("/v1", uplodRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
