const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { userValidator } = require("../zodvalidator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { SECRET_KEY } = process.env;
cloudinary.config({
  cloud_name: "dircgkbpb",
  api_key: "928991198645828",
  api_secret: "Oon1-M8KxxQdOxn86swA_eWz8OY",
  secure: true,
});

exports.upload = multer({ dest: "uploads/" });

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;

    console.log(user);

    next();
  });
};
exports.uploader = async (req, res) => {
  const { username } = req.user;
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "g1y6dwqy",
    });

    User.update(
      {
        imageurl: result.secure_url,
        location: req.body.location,
      },
      {
        where: {
          username: username,
        },
      }
    ).then((KK) => {
      res.json({ ok: true, imageurl: result.secure_url, KK });
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addRoles = async (req, res) => {
  const { roles } = req.body;
  const { username, email } = req.user;

  try {
    User.update(
      { role: roles },
      {
        where: {
          username: username,
        },
      }
    )
      .then((result) => {
        if (result) {
          console.log("User roles updated successfully");
          res.json({ message: "Roles added", data: email });
        } else {
          console.log("User not found or no changes made");
        }
      })
      .catch((error) => {
        console.error("Error updating user roles:", error);
      });
  } catch (err) {
    console.log("Error occurred while adding roles:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.signup = async (req, res) => {
  const validation = userValidator.safeParse(req.body);
  if (validation.success) {
    const { name, username, email, password } = validation.data;

    const dt = await User.findOne({
      where: {
        username: username,
      },
    });

    if (dt) {
      res
        .status(409)
        .json({ alreadyExists: true, message: "Username already taken" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = {
        username,
        name,
        email,
        password: hashedPassword,
      };

      User.create(user)
        .then((result) => {
          console.log(result);

          const token = jwt.sign(
            { username: user.username, email: user.email },
            SECRET_KEY,
            { expiresIn: "8h" }
          );

          res.status(200).json({ token: token, alreadyExists: false });
        })
        .catch((error) => {
          console.log(error);
          res.send("error occurred");
        });
    }
  } else {
    res.status(400).json({ message: validation.error.issues[0].message });
  }
};

exports.sendMail = async (req, res) => {
  const { email } = req.user;
  console.log("mail", email);
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: "blacksparrowdevs@zohomail.in",
        pass: "Sparrow@Tech",
      },
    });

    const mailOptions1 = {
      from: "blacksparrowdevs@zohomail.in",
      to: `${email}`,
      subject: `Congrates! You are registered.`,
      html: `<p>Dear User,</p>
        <p>Thank You!`,
    };

    transporter.sendMail(mailOptions1, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "Error sending mails" });
      } else {
        res.status(200).json({ ok: true, message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.log("Error while sending mail:", error);
    res.status(500).json({ ok: false, message: "Internal  kk Server Error" });
  }
};
exports.fetcher = async (req, res) => {
  res.send("Chalriya Hai Bhai!");
};
