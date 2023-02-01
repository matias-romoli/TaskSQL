export function auth(req, res, next) {
  let { title, description } = req.body;

  if (title.trim() === "" || description.trim() === "") {
    res.status(500).json("Los campos no pueden estar vacios");
  } else {
    next();
  }
}
