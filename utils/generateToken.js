import jwt from "jsonwebtoken";
const generateToken = (id) => {
  return jwt.sign({ id }, "sdfgsdfgaskdjfli43345345ghfd", { expiresIn: "12h" });
};

export default generateToken;
