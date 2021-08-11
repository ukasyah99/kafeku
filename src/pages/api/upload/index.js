import multer from "multer"
import util from "util"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directory = req.query.directory || ""
    cb(null, `./src/server/storage/${directory}`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = util.promisify(multer({ storage }).single("file"))

const handler = async (req, res) => {
  if (req.method === "POST") {
    const err = await upload(req, res)
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message })
    } else if (err) {
      return res.status(500).json({ error: err.message })
    }

    return res.json({ message: "File uploaded successfully." })
  }

  return res.status(400).json({ error: "Invalid request" })
}

export const config = {
  api: { bodyParser: false },
}

export default handler
