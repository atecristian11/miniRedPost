const Postc = require("../models/postc");

const postPerfil = async (req, res) => {
  if (!req.body.text || !req.body.hashtag || !req.body.firma)
    return res.status(400).send("Process failed: Incomplete data");

  const postc = new Postc({
    userId: req.user._id,
    text: req.body.text,
    hashtag: req.body.hashtag,
    firma: req.body.firma,
    dbStatus: true,
  });

  const result = await postc.save();
  if (!result)
    return res.status(400).send("Process failed: Failed to register post");
  return res.status(200).send({ result });
};

// const listPost = async (req, res) => {
//   let postc = await Postc.find({ firma: new RegExp(req.params["firma"], "i") }).populate("userId").exec();
//   if (!postc || postc.length === 0) return res.status(400).send("Process failed: No post");
//   return res.status(200).send({ postc });
// }; listar todas los post asi sean de otro usuario

const listPost = async (req, res) => {
  const postc = await Postc.find({ userId: req.user._id });
  if (!postc || postc.length === 0)
    return res.status(400).send("Process failed: No post");
  return res.status(200).send({ postc });
};

module.exports = { postPerfil, listPost };
