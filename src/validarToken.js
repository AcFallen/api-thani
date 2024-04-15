import jwt from "jsonwebtoken";
import { TipoUsuario } from "@prisma/client";

export const validarToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Necesitas estar logueado" });
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message:
        "La token se tiene que enviar usando el formato <Bearer YOUR_TOKEN",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;

    console.log(payload);

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalida", content: error });
  }
};

export const validarAdmin = async (req, res, next) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Necesitas estar logueado" });
  }

  if (user.tipo !== TipoUsuario.ADMIN) {
    return res
      .status(403)
      .json({ message: "No tienes permisos para realizar esta acción" });
  }

  next();
};
