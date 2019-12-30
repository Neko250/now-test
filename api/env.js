export default (req, res) => {
  res.status(200).send(JSON.stringify(process.env))
}
