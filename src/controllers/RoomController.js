module.exports = {
  create(req, res) {
    let roomId = 12314

    res.redirect(`/room/${roomId}`)
  }
}
