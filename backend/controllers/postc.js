const Postc = require("../models/postc");
const User = require("../models/user");

const postPerfil = async (req, res) => {
  if (!req.body.text || !req.body.hashtag)
    return res.status(400).send("Process failed: Incomplete data");

  const postc = new Postc({
    userId: req.user._id,
    text: req.body.text,
    hashtag: req.body.hashtag,
    dbStatus: true,
  });


  const result = await postc.save();
  if (!result)
    return res.status(400).send("Process failed: Failed to register post");
  return res.status(200).send({ result });
};

const listPost = async (req, res) => {
  let postc = await Postc.find({ text: new RegExp(req.params["text"], "i") }).populate("userId").exec();
  if (!postc || postc.length === 0) return res.status(401).send("No post");
  return res.status(200).send({ postc });
};

module.exports = { postPerfil, listPost };
