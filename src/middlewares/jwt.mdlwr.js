import jwt from "jsonwebtoken";

const jwtOptions = { expiresIn: `28800s` }; // 8h en secondes

// Si process.env.JWT_SECRET n'est pas défini, utilisez "T0P_S3CRet" comme clé secrète
const secret = process.env.JWT_SECRET || "T0P_S3CRet";

const jwtMdlwr = (req, res, next) => {
  const token = req.headers.authorization;

  const userId = jwtVerify(token);

  if (!userId) return res.status(401).json({ message: "Token invalide" });

  // Ajoutez l'ID de l'utilisateur à la requête pour une utilisation ultérieure
  req.body.userId = userId;

  next();
};

const jwtVerify = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    const userId = decoded.data;
    return userId;
  } catch (err) {
    console.error(`jwt.mdlwr.js - jwtVerify - erreur => `, err.message);
    return null;
  }
};

export const jwtSign = (data) => jwt.sign({ data }, secret, jwtOptions);
// payload = { data: userId }

export default jwtMdlwr;