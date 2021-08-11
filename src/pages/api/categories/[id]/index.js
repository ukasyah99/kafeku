import { getDatabaseConnection } from "src/server/database"
import * as yup from "yup"

const postValidation = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  color: yup.string().required(),
  image: yup.string().required(),
})

const handler = async (req, res) => {
  const db = getDatabaseConnection()
  const { id } = req.query

  if (req.method === "GET") {
    let data
    try {
      data = await db("categories").select("*").where("id", id).first()
      if (!data) throw new Error("Not found")
    } catch (error) {
      return res.status(404).json({ error: "Data not found" })
    }

    return res.json(data)
  }

  if (req.method === "POST") {
    let data
    try {
      const [insertID] = await db("categories").insert(req.body)
      data = await db("categories").select("*").where("id", insertID).first()
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }

    return res.json(data)
  }

  return res.status(400).json({ error: "Invalid request" })
}

export default handler
