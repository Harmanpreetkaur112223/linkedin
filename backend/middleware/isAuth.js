import jwt from "jsonwebtoken"

export default async function isAuth(req, res, next) {
  try {
    const {token} = await req?.cookies|| req.header('Authorization').replace("Bearer ","")
    console.log(token)
    if (!token) {
      console.log("this")
      return res.status(401).json({ message: "User doesn't have token" })
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = verifyToken.id
    next()

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" })
  }
}
