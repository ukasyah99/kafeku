import { getDatabaseConnection } from "src/server/database"

const handler = async (req, res) => {
  const db = getDatabaseConnection()

  if (req.method === "GET") {
    const { page = "1", perPage = "10", search = "", sort } = req.query

    let data
    let total
    try {
      let selectSQL = db("categories").select("*")
      let totalSQL = db("categories").count()

      selectSQL.where("name", "LIKE", `%${search}%`)
      totalSQL.where("name", "LIKE", `%${search}%`)

      if (sort) {
        selectSQL = selectSQL.orderBy(sort.replace("-", ""), sort.indexOf("-") === 0 ? "desc" : "asc")
      }

      data = await selectSQL
        .limit(perPage)
        .offset((page - 1) * perPage)
      total = (await totalSQL.count().first())["count(*)"]
    } catch (error) {
      return res.status(500).json({ error: "Failed to get paginated data" })
    }

    return res.json({ data, total })
  }

  return res.status(400).json({ error: "Invalid request" })
}

export default handler
