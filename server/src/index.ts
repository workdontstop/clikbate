const util = require("util");
const mysql = require("mysql");
const fs = require("fs");
const sharp = require("sharp");
const unlinkFile = util.promisify(fs.unlink);

import dotenv from "dotenv";

dotenv.config();

const cookieParser = require("cookie-parser");
import express = require("express");
import { generateUploadURL } from "./ss3";

var app: Application = express();
var cors = require("cors");

const path = require("path");

const multer = require("multer");
const { uploadFileTos3, getFileStreamFroms3 } = require("./s3");

if (process.env.APP_STATE === "dev") {
  const corsOptions = {
    origin: "http://192.168.0.21:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
} else {
  app.use(cors());
}

app.use(express.json({ limit: "400mb" }));
app.use(express.urlencoded({ limit: "400mb" }));

app.use(cookieParser());
const bcrypt = require("bcrypt");
const { createTokens, validateToken, createTokensUpdate } = require("./jwt");
import { Request, Response, Application } from "express";
import { body, validationResult } from "express-validator";

import jwt_decode from "jwt-decode";

var u, h, p, d, t;

u = process.env.USER_DATABASE;
h = process.env.HOST_DATABASE;
p = process.env.PASSWORD_DATABASE;
d = process.env.DATABASE_NAME;

const CONNECTION_CONFIG = {
  user: process.env.USER_DATABASEx,
  host: process.env.HOST_DATABASEx,
  password: process.env.PASSWORD_DATABASEx,
  database: process.env.DATABASE_NAMEx,
};

// Node.js program to demonstrate the
// Date.format() method

///
///
///
///
///
///
///reg

const register = `INSERT INTO members (username,password,email,billboard1,billboardthumb1,billboard2,billboardthumb2,profile_image,profile_image_thumb,color1,color2,color_type,status,notification,tutorial,date,reg) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
///
///login
const login = `SELECT


(SELECT COUNT(*)   
  FROM fan
 WHERE  userid = members.id )favoriteCount,

 (SELECT COUNT(*)   
  FROM fan
 WHERE  favid = members.id )fanCount,
 
 username,id,password,color1,color2,color_type,profile_image,profile_image_thumb,first_name,sur_name,quote,reg,billboard1,billboardthumb1,billboard2,billboardthumb2,biography FROM members WHERE username =?`;
///

///checkIsLogged
const loginId = `SELECT 

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = members.id and userid = ?)connectCount,


(SELECT COUNT(*)   
  FROM fan
 WHERE  userid = members.id )favoriteCount,

 (SELECT COUNT(*)   
  FROM fan
 WHERE  favid = members.id )fanCount,
 
 username,id,password,color1,color2,color_type,profile_image,profile_image_thumb,first_name,sur_name,quote,reg,billboard1,billboardthumb1,billboard2,billboardthumb2,biography  FROM members WHERE id =?`;
///
///usernamecheck
const checkpassword = `SELECT id FROM members WHERE  username =?`;

const getstickers = `SELECT stickname FROM stickers  ORDER BY id DESC  LIMIT 30  `;

///checkIsLogged

const postsx = `SELECT


(SELECT COUNT(*)   
  FROM fan
 WHERE favid = posts.sender and userid = ?)favCount,


(SELECT type
FROM emotions 
WHERE post = posts.id and user = ?)EmoIn,


(SELECT COUNT(*) 
          FROM comments 
         WHERE post = posts.id)commentCount,


      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=1)lovely, 
         
      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=2)cool, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=3)care, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=4)funny, 
         
         
        members.profile_image,members.username,color1,posts.id,sender,post_count,topic,
caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,interact1b,interact1bx,interact1by,item2,thumb2,itemtype2,interact2a,interact2ax,interact2ay,interact2b,interact2bx,interact2by,item3,thumb3,itemtype3,interact3a,interact3ax,interact3ay,interact3b,interact3bx,interact3by,item4,thumb4,itemtype4,item5,thumb5,itemtype5,time  FROM posts inner join members on
 posts.sender = members.id   ORDER BY posts.id DESC LIMIT 20`;

const posts_more = `SELECT
(SELECT COUNT(*)   
  FROM fan
 WHERE favid = posts.sender and userid = ?)favCount,


(SELECT type
FROM emotions 
WHERE post = posts.id and user = ?)EmoIn,


(SELECT COUNT(*) 
          FROM comments 
         WHERE post = posts.id)commentCount,


      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=1)lovely, 
         
      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=2)cool, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=3)care, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=4)funny, 
         
         
        members.profile_image,members.username,color1,posts.id,sender,post_count,topic,
caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,interact1b,interact1bx,interact1by,item2,thumb2,itemtype2,interact2a,interact2ax,interact2ay,interact2b,interact2bx,interact2by,item3,thumb3,itemtype3,interact3a,interact3ax,interact3ay,interact3b,interact3bx,interact3by,item4,thumb4,itemtype4,item5,thumb5,itemtype5,time  FROM posts inner join members on
 posts.sender = members.id AND posts.id < ?    ORDER BY posts.id DESC LIMIT 20`;

const updateColor = `UPDATE members SET  color1 = ? WHERE (id = ?)`;

const updateBasicpage = `UPDATE members SET username = ?, quote=?, biography=?   WHERE (id = ?)`;

const updateProfilePic = `UPDATE members SET profile_image = ?, profile_image_thumb = ?, color1 = ?, color2 = ?, color_type = ?  WHERE (id = ?)`;

const updateSticker = `INSERT INTO stickers (stickname,user) VALUES (?,?)`;

const updatebillboardPic = `UPDATE members SET billboard1 = ?, billboardthumb1 = ?  WHERE (id = ?)`;

const updatebillboardPic2 = `UPDATE members SET billboard2 = ?, billboardthumb2 = ?  WHERE (id = ?)`;

const createpost = `INSERT INTO posts (sender,post_count,topic,caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,
  interact1b,interact1bx,interact1by,item2,thumb2,itemtype2,interact2a,interact2ax,interact2ay,interact2b,interact2bx,interact2by,item3,thumb3,itemtype3,
  interact3a,interact3ax,interact3ay,interact3b,interact3bx,interact3by,item4,thumb4,itemtype4,item5,thumb5,itemtype5,time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

const createComment = `INSERT INTO comments (post,com,commented_by,date) VALUES (?,?,?,?)`;

const getComments = ` SELECT 

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = comments.commented_by and userid = ?)favCount,
 
 comments.id,members.id AS comUserId,members.profile_image,members.username,color1,com,comments.date  FROM comments inner join members on
 comments.commented_by = members.id WHERE comments.post = ?  ORDER BY comments.id DESC  LIMIT 90  `;

const delPost = `DELETE FROM posts WHERE id = ?`;

const delcom = `DELETE FROM comments WHERE id = ?`;

const getMoreComments = `SELECT

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = comments.commented_by and userid = ?)favCount,
 
 
 comments.id,members.id AS comUserId,members.profile_image,members.username,color1,com,comments.date  FROM comments inner join members on
 comments.commented_by = members.id WHERE comments.post = ? AND comments.id < ? ORDER BY comments.id DESC  LIMIT 90  `;

const insertEmo = `INSERT INTO emotions (post,user,type,lockemo,time) VALUES (?,?,?,?,?)`;

const updateEmo = `UPDATE emotions SET  type=?   WHERE (post = ?  and user= ?)`;

const getReaction = `SELECT

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = emotions.user and userid = ?)favCount,
 
 emotions.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM emotions inner join members on
 emotions.user = members.id WHERE emotions.post = ? AND emotions.type= ?  ORDER BY emotions.id DESC  LIMIT 90  `;

const getMoreReaction = `SELECT 

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = emotions.user and userid = ?)favCount,
 
 emotions.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM emotions inner join members on
 emotions.user = members.id WHERE emotions.post = ? AND emotions.type= ? AND emotions.id < ? ORDER BY emotions.id DESC  LIMIT 90  `;

const insertFav = `INSERT INTO fan (userid,favid,fanlock,time) VALUES (?,?,?,?)`;

const removefav = `DELETE from fan where favid=? and userid=?`;

const getConnections = `SELECT


 (SELECT COUNT(*)   
  FROM fan
 WHERE favid = members.id and userid = ?)favCount,

 
fan.id,members.id AS reactId, members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.favid = members.id WHERE  fan.userid = ?  ORDER BY  fan.id DESC  LIMIT 90  `;

const getMoreConnections = `SELECT 

(SELECT COUNT(*)   
FROM fan
WHERE favid = members.id and userid = ?)favCount,
 
 fan.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.favid = members.id WHERE  fan.userid = ?  AND fan.id < ? ORDER BY fan.id DESC  LIMIT 90  `;

const getConnectionsFan = `SELECT

(SELECT COUNT(*)   
FROM fan
WHERE favid = members.id and userid = ?)favCount,
 
fan.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.userid = members.id WHERE  fan.favid = ?  ORDER BY  fan.id DESC  LIMIT 90  `;

const getMoreConnectionsFan = `SELECT 

(SELECT COUNT(*)   
FROM fan
WHERE favid = members.id and userid = ?)favCount,
 
 fan.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.userid = members.id WHERE  fan.favid = ?  AND fan.id < ? ORDER BY fan.id DESC  LIMIT 90  `;

const profile = `SELECT


(SELECT COUNT(*)   
  FROM fan
 WHERE favid = posts.sender and userid = ?)favCount,


(SELECT type
FROM emotions 
WHERE post = posts.id and user = ?)EmoIn,


(SELECT COUNT(*) 
          FROM comments 
         WHERE post = posts.id)commentCount,


      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=1)lovely, 
         
      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=2)cool, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=3)care, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=4)funny, 
         
         
        members.profile_image,members.username,color1,posts.id,sender,post_count,topic,
caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,interact1b,interact1bx,interact1by,item2,thumb2,itemtype2,interact2a,interact2ax,interact2ay,interact2b,interact2bx,interact2by,item3,thumb3,itemtype3,interact3a,interact3ax,interact3ay,interact3b,interact3bx,interact3by,item4,thumb4,itemtype4,item5,thumb5,itemtype5,time  FROM posts inner join members on
 posts.sender = members.id    where posts.sender = ?  ORDER BY posts.id DESC LIMIT 20`;

const profile_more = `SELECT


(SELECT COUNT(*)   
  FROM fan
 WHERE favid = posts.sender and userid = ?)favCount,


(SELECT type
FROM emotions 
WHERE post = posts.id and user = ?)EmoIn,


(SELECT COUNT(*) 
          FROM comments 
         WHERE post = posts.id)commentCount,


      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=1)lovely, 
         
      (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=2)cool, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=3)care, 

            (SELECT COUNT(*) 
          FROM emotions
         WHERE post = posts.id and type=4)funny, 
         
         
        members.profile_image,members.username,color1,posts.id,sender,post_count,topic,
caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,interact1b,interact1bx,interact1by,item2,thumb2,itemtype2,interact2a,interact2ax,interact2ay,interact2b,interact2bx,interact2by,item3,thumb3,itemtype3,interact3a,interact3ax,interact3ay,interact3b,interact3bx,interact3by,item4,thumb4,itemtype4,item5,thumb5,itemtype5,time  FROM posts inner join members on
 posts.sender = members.id where posts.sender = ? AND posts.id < ?  ORDER BY posts.id DESC LIMIT 20 `;

const optionsval = `(SELECT thumb1 FROM posts WHERE sender = ? ORDER BY id DESC LIMIT 1)
UNION ALL
(SELECT thumb1 FROM posts ORDER BY id DESC LIMIT 1);
`;

const pool = mysql.createPool(CONNECTION_CONFIG);
const execPoolQuery = util.promisify(pool.query.bind(pool));

/////////
////////
////////

app.post("/profile", async (req: Request, res: Response) => {
  const { values } = req.body;

  if (values.postPageLimit == 0) {
    try {
      const chronologicaldata = await execPoolQuery(profile, [
        values.id,
        values.id2,
        values.id3,
      ]);

      ///console.log(chronologicaldata[7].favCount);
      return res.send({
        ///gettingcookie: userSessionData,
        message: "feeds fetched",
        payload: chronologicaldata,
        postPageLimit: values.postPageLimit,
      });
    } catch (e: any) {
      console.log(e);
      return res.send({ message: "error in fetching feeds" });
    }
  } else {
    try {
      const chronologicaldata = await execPoolQuery(profile_more, [
        values.id,
        values.id2,
        values.id3,
        values.postPageLimit,
      ]);

      ///console.log(chronologicaldata[7].favCount);
      return res.send({
        ///gettingcookie: userSessionData,
        message: "feeds fetched",
        payload: chronologicaldata,
        postPageLimit: values.postPageLimit,
      });
    } catch (e: any) {
      console.log(e);
      return res.send({ message: "error in fetching feeds" });
    }
  }
});

app.post(
  "/checkIsLoggedxx",
  validateToken,
  async (req: Request, res: Response) => {
    const { values } = req.body;
    console.log(validateToken);
    try {
      const logindata = await execPoolQuery(loginId, [values.id2, values.id]);
      //console.log(logindata);
      const payloadValue = {
        id: logindata[0].id,
        username: logindata[0].username,
        userimage: logindata[0].profile_image,
        userimagethumb: logindata[0].profile_image_thumb,
        usercolor1: logindata[0].color1,
        usercolor2: logindata[0].color2,
        usercolortype: logindata[0].color_type,
        userfirstname: logindata[0].first_name,
        usersurname: logindata[0].sur_name,
        userquote: logindata[0].quote,
        userreg: logindata[0].reg,
        userbillboard1: logindata[0].billboard1,
        userbillboardthumb1: logindata[0].billboardthumb1,
        userbillboard2: logindata[0].billboard2,
        userbillboardthumb2: logindata[0].billboardthumb2,
        biography: logindata[0].biography,
        fans: logindata[0].fanCount,
        favorites: logindata[0].favoriteCount,
        connectCount: logindata[0].connectCount,
      };

      return res.send({
        ///gettingcookie: userSessionData,
        message: "logged in",
        payload: payloadValue,
      });
    } catch (e: any) {
      //console.log(e);
      return res.send({ message: "Wrong id" });
    }
  }
);

app.post("/fan_chronological", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(getConnectionsFan, [
      values.id,
      values.id,
    ]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch (e: any) {
    console.log(e);
    return res.send({ message: "error in fetching connections" });
  }
});

app.post("/fan_chronological_more", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(getMoreConnectionsFan, [
      values.id,
      values.id,
      values.limit,
    ]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch (e: any) {
    return res.send({ message: "error in fetching connections" });
  }
});

app.post("/fav_chronological", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(getConnections, [
      values.id,
      values.id,
    ]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch (e: any) {
    console.log(e);
    return res.send({ message: "error in fetching connections" });
  }
});

app.post("/fav_chronological_more", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(getMoreConnections, [
      values.id,
      values.id,
      values.limit,
    ]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch (e: any) {
    return res.send({ message: "error in fetching connections" });
  }
});

app.post("/remove_fav", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    await execPoolQuery(removefav, [values.friendId, values.myId]);
    return res.send({ message: "removed" });
  } catch (e: any) {
    ///console.log(e);
    return res.send({ message: "removed failed" });
  }
});

app.post("/add_fav", async (req: Request, res: Response) => {
  const { values } = req.body;

  var currentTime = new Date();
  var lock: any = `${values.myId}${values.friendId}`;
  let lockNum = parseInt(lock);

  try {
    await execPoolQuery(insertFav, [
      values.myId,
      values.friendId,
      lockNum,
      currentTime,
    ]);
    return res.send({ message: "added" });
  } catch (e: any) {
    ///console.log(e);
    return res.send({ message: "add failed" });
  }
});

app.post("/reaction_chronological", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(getReaction, [
      values.id,
      values.post,
      values.type,
    ]);
    console.log("lkk");
    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch (e: any) {
    console.log(e);
    return res.send({ message: "error in fetching feeds" });
  }
});

app.post(
  "/reaction_chronological_more",
  async (req: Request, res: Response) => {
    const { values } = req.body;

    try {
      const chronologicaldata = await execPoolQuery(getMoreReaction, [
        values.id,
        values.post,
        values.type,
        values.limit,
      ]);

      return res.send({
        ///gettingcookie: userSessionData,
        message: "feeds fetched",
        payload: chronologicaldata,
      });
    } catch (e: any) {
      return res.send({ message: "error in fetching feeds" });
    }
  }
);

app.put("/updateEmo", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    await execPoolQuery(updateEmo, [values.type, values.post, values.user]);
    return res.send({ message: "emo updated" });
  } catch {
    return res.send({ message: "emoFailed" });
  }
});

app.post("/insertEmo", async (req: Request, res: Response) => {
  const { values } = req.body;

  var currentTime = new Date();

  var lock: any = `${values.post}${values.user}`;
  let lockNum = parseInt(lock);
  try {
    await execPoolQuery(insertEmo, [
      values.post,
      values.user,
      values.type,
      lockNum,
      currentTime,
    ]);
    return res.send({ message: "emo updated" });
  } catch (e: any) {
    return res.send({ message: "emoFailed" });
  }
});

app.post(
  "/comments_chronological_more",
  async (req: Request, res: Response) => {
    const { values } = req.body;

    try {
      const chronologicaldata = await execPoolQuery(getMoreComments, [
        values.id,
        values.commentId,
        values.limit,
      ]);

      return res.send({
        ///gettingcookie: userSessionData,
        message: "feeds fetched",
        payload: chronologicaldata,
      });
    } catch {
      return res.send({ message: "error in fetching feeds" });
    }
  }
);

app.post("/delPost", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(delPost, [values.id]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "deleted post",
    });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).send({ message: "Error deleting comment" });
  }
});

app.post("/delcomments", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(delcom, [values.id]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "deleted",
    });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).send({ message: "Error deleting comment" });
  }
});

app.post("/comments_chronological", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(getComments, [
      values.id,
      values.commentId,
    ]);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch {
    return res.send({ message: "error in fetching feeds" });
  }
});

app.post("/Create_comment", async (req: Request, res: Response) => {
  const { values } = req.body;

  var currentTime = new Date();

  try {
    await execPoolQuery(createComment, [
      values.postid,
      values.inputedCom,
      values.id,
      currentTime,
    ]);
    return res.send({ message: "Comment Added" });
  } catch {
    return res.send({ message: "Comment Failed" });
  }
});

app.post("/get_signed_url_4upload_post", async (req: any, res: any) => {
  const { values } = req.body;
  var holder = [];
  for (let i = 0; i < values.count; i++) {
    const urlHD = await generateUploadURL();
    const urlThumb = await generateUploadURL();
    const urlinteraction1 = await generateUploadURL();
    const urlinteraction2 = await generateUploadURL();
    var cc = {
      urlHD: urlHD,
      urlThumb: urlThumb,
      urlinteraction1: urlinteraction1,
      urlinteraction2: urlinteraction2,
    };
    holder[i] = cc;

    if (values.count - 1 === i) {
      res.send({ holder });
    }
  }
});

app.post("/get_signed_url_Sticker", async (req: any, res: any) => {
  const url = await generateUploadURL();
  res.send({ url });
});

app.post("/sticker_upload_data", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    await execPoolQuery(updateSticker, [values.imagedata, values.id]);
    return res.send({ message: "sticker image data updated" });
  } catch {
    return res.send({ message: "Failed" });
  }
});

app.post("/get_signed_url_4upload", async (req: any, res: any) => {
  const urlHD = await generateUploadURL();
  const urlThumb = await generateUploadURL();
  const url = { urlHD: urlHD, urlThumb: urlThumb };
  res.send({ url });
});

app.put("/profile_upload_data", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    await execPoolQuery(updateProfilePic, [
      values.imagedata,
      values.imagedataThumb,
      values.color,
      values.color2,
      0,
      values.id,
    ]);
    return res.send({ message: "profile image data updated" });
  } catch {
    return res.send({ message: "Failed" });
  }
});

app.put("/billboard_upload_data", async (req: any, res: any, next: any) => {
  const { values } = req.body;

  try {
    if (values.type === 0) {
      await execPoolQuery(updatebillboardPic2, [
        values.imagedata,
        values.imagedataThumb,
        values.id,
      ]);
    } else {
      await execPoolQuery(updatebillboardPic, [
        values.imagedata,
        values.imagedataThumb,
        values.id,
      ]);
    }

    return res.send({
      message: "billboard image uploaded",
    });
  } catch {
    return res.send({ message: "images upload failed" });
  }
});

app.post("/post_upload_data", async (req: any, res: any, next: any) => {
  const { values } = req.body;

  var currentTime = new Date();

  console.log(values.I1x);
  try {
    await execPoolQuery(createpost, [
      values.id,
      values.all.length,
      values.topic,
      values.caption,
      values.all[0] ? values.all[0].imagedata : null,
      values.all[0] ? values.all[0].imagedataThumb : null,
      values.all[0] ? 1 : null,

      values.all[0] ? values.all[0].interact1 : null,
      values.I1x ? values.I1x : null,
      values.I1y ? values.I1y : null,

      values.all[0] ? values.all[0].interact2 : null,
      values.I1bx ? values.I1bx : null,
      values.I1by ? values.I1by : null,

      values.all[1] ? values.all[1].imagedata : null,
      values.all[1] ? values.all[1].imagedataThumb : null,
      values.all[1] ? 1 : null,

      values.all[1] ? values.all[1].interact1 : null,
      values.I2x ? values.I2x : null,
      values.I2y ? values.I2y : null,

      values.all[1] ? values.all[1].interact2 : null,
      values.I2bx ? values.I2bx : null,
      values.I2by ? values.I2by : null,

      values.all[2] ? values.all[2].imagedata : null,
      values.all[2] ? values.all[2].imagedataThumb : null,
      values.all[2] ? 1 : null,

      values.all[2] ? values.all[2].interact1 : null,
      values.I3x ? values.I3x : null,
      values.I3y ? values.I3y : null,

      values.all[2] ? values.all[2].interact2 : null,
      values.I3bx ? values.I3bx : null,
      values.I3by ? values.I3by : null,

      values.all[3] ? values.all[3].imagedata : null,
      values.all[3] ? values.all[3].imagedataThumb : null,
      values.all[3] ? 1 : null,
      values.all[4] ? values.all[4].imagedata : null,
      values.all[4] ? values.all[4].imagedataThumb : null,
      values.all[4] ? 1 : null,
      currentTime,
    ]);
    return res.send({ message: "images uploaded" });
  } catch (e: any) {
    console.log(e);
    return res.send({ message: "images upload failed" });
  }
});

app.put("/update_basic", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    await execPoolQuery(updateBasicpage, [
      values.inputedUsername,
      values.inputedQuote,
      values.inputedDescription,
      values.id,
    ]);
    return res.send({ message: "username updated" });
  } catch {
    return res.send({ message: "usernameFailed" });
  }
});

app.put("/update_color", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    await execPoolQuery(updateColor, [values.color1, values.id]);
    return res.send({ message: "color updated" });
  } catch {
    return res.send({ message: "colorFailed" });
  }
});

app.post("/feeds_stickers", async (req: Request, res: Response) => {
  try {
    const chronologicaldata = await execPoolQuery(getstickers);

    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch {
    return res.send({ message: "error in fetching feeds" });
  }
});

app.post("/OptionsPic", async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const chronologicaldata = await execPoolQuery(optionsval, [values]);

    ///console.log(chronologicaldata[7].favCount);
    return res.send({
      ///gettingcookie: userSessionData,
      message: "feeds fetched",
      payload: chronologicaldata,
    });
  } catch (e: any) {
    //console.log(e)
    return res.send({ message: "error in fetching feeds" });
  }
});

app.post("/feeds_chronological", async (req: Request, res: Response) => {
  const { values } = req.body;

  if (values.postPageLimit == 0) {
    try {
      const chronologicaldata = await execPoolQuery(postsx, [
        values.id,
        values.id2,
      ]);

      ///console.log(chronologicaldata[7].favCount);
      return res.send({
        ///gettingcookie: userSessionData,
        message: "feeds fetched",
        payload: chronologicaldata,
        postPageLimit: values.postPageLimit,
      });
    } catch (e: any) {
      //console.log(e)
      return res.send({ message: "error in fetching feeds" });
    }
  } else {
    try {
      const chronologicaldata = await execPoolQuery(posts_more, [
        values.id,
        values.id2,
        values.postPageLimit,
      ]);

      ///console.log(chronologicaldata[7].favCount);
      return res.send({
        ///gettingcookie: userSessionData,
        message: "feeds fetched",
        payload: chronologicaldata,
        postPageLimit: values.postPageLimit,
      });
    } catch (e: any) {
      //console.log(e)
      return res.send({ message: "error in fetching feeds" });
    }
  }
});

app.post(
  "/keepmeloggedin",
  validateToken,
  async (req: Request, res: Response) => {
    if (req.cookies.accesst) {
      const { values } = req.body;
      const userSessionData: any = jwt_decode(req.cookies.accesst);
      const accessToken = createTokensUpdate(userSessionData);
      if (values === "session") {
        return res
          .cookie("accesst", accessToken, {
            sameSite: "strict",
            httpOnly: true,
            //secure: true,
          })
          .send({ message: "session_Cookie_Activated" });
      } else if (values === "forever") {
        const days30inseconds = 60 * 60 * 24 * 30 * 1000;
        const CurrentTimePlusSecs = new Date(
          new Date().getTime() + 60 * 60 * 24 * 30 * 1000
        );

        const userSessionData: any = jwt_decode(req.cookies.accesst);
        const accessToken = createTokensUpdate(userSessionData);

        return res
          .cookie("accesst", accessToken, {
            sameSite: "strict",
            expires: CurrentTimePlusSecs,
            maxAge: days30inseconds,
            httpOnly: true,
            //secure: true,
          })
          .send({ message: "forever_Cookie_Activated" });
      } else {
        const days30inseconds = 2;
        const CurrentTimePlusSecs = new Date(new Date().getTime() + 2);

        const userSessionData: any = jwt_decode(req.cookies.accesst);
        const accessToken = createTokensUpdate(userSessionData);

        return res
          .cookie("accesst", accessToken, {
            sameSite: "strict",
            expires: CurrentTimePlusSecs,
            maxAge: days30inseconds,
            httpOnly: true,
            //secure: true,
          })
          .send({ message: "cookie" });
      }
    } else {
      return res.send({ message: "cookie null" });
    }
  }
);

app.post(
  "/checkIsLogged",
  validateToken,
  async (req: Request, res: Response) => {
    if (req.cookies.accesst) {
      const userSessionData: any = jwt_decode(req.cookies.accesst);

      try {
        const logindata = await execPoolQuery(loginId, [
          userSessionData.id,
          userSessionData.id,
        ]);

        const payloadValue = {
          id: logindata[0].id,
          username: logindata[0].username,
          userimage: logindata[0].profile_image,
          userimagethumb: logindata[0].profile_image_thumb,
          usercolor1: logindata[0].color1,
          usercolor2: logindata[0].color2,
          usercolortype: logindata[0].color_type,
          userfirstname: logindata[0].first_name,
          usersurname: logindata[0].sur_name,
          userquote: logindata[0].quote,
          userreg: logindata[0].reg,
          userbillboard1: logindata[0].billboard1,
          userbillboardthumb1: logindata[0].billboardthumb1,
          userbillboard2: logindata[0].billboard2,
          userbillboardthumb2: logindata[0].billboardthumb2,
          biography: logindata[0].biography,
          fans: logindata[0].fanCount,
          favorites: logindata[0].favoriteCount,
        };

        return res.send({
          ///gettingcookie: userSessionData,
          message: "logged in",
          payload: payloadValue,
        });
      } catch {
        return res.send({ message: "Wrong id" });
      }
    } else {
      return res.send({
        message: "logged out",
      });
    }
  }
);

app.post("/logout", async (req: Request, res: Response) => {
  if (req.cookies.accesst) {
    return res.clearCookie("accesst").send({ message: "cookie deleted" });
  } else {
    return res.send({ message: "cookie null" });
  }
});

app.post(
  "/usernamecheck",
  body("value")
    .isLength({ max: 26 })
    .matches(/^([A-z0-9áéíóúñü\ \_.]+)$/, "gim"),
  async (req: Request, res: Response) => {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      return res.status(400).json({
        method: req.method,
        status: res.statusCode,
        error: validateErrors,
      });
    } else {
      const username = req.body.value;

      try {
        const checkresult = await execPoolQuery(checkpassword, [username]);
        const IdIsAvailable = checkresult[0].id;
        if (IdIsAvailable) {
          return res.send({ message: "username is not unique" });
        }
      } catch {
        return res.send({ message: "username is available" });
      }
    }
  }
);

app.post(
  "/loging",
  body("values.inputedUsername")
    .isLength({ max: 26 })
    .matches(/^([A-z0-9áéíóúñü\ \_.]+)$/, "gim"),
  body("values.inputedPassword")
    .isLength({ min: 8 })
    .exists({ checkFalsy: true }),
  async (req: Request, res: Response) => {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      return res.status(400).json({
        method: req.method,
        status: res.statusCode,
        error: validateErrors,
      });
    } else {
      const { values } = req.body;

      try {
        const logindata = await execPoolQuery(login, [values.inputedUsername]);
        const DatabasePassword = logindata[0].password;
        const PasswordMatchResult = await bcrypt.compare(
          values.inputedPassword,
          DatabasePassword
        );

        if (!PasswordMatchResult) {
          return res.send({ message: "Wrong Password" });
        } else {
          const payloadValue = {
            id: logindata[0].id,
            username: logindata[0].username,
            userimage: logindata[0].profile_image,
            userimagethumb: logindata[0].profile_image_thumb,
            usercolor1: logindata[0].color1,
            usercolor2: logindata[0].color2,
            usercolortype: logindata[0].color_type,
            userfirstname: logindata[0].first_name,
            usersurname: logindata[0].sur_name,
            userquote: logindata[0].quote,
            userreg: logindata[0].reg,
            userbillboard1: logindata[0].billboard1,
            userbillboardthumb1: logindata[0].billboardthumb1,
            userbillboard2: logindata[0].billboard2,
            userbillboardthumb2: logindata[0].billboardthumb2,
            biography: logindata[0].biography,
            fans: logindata[0].fanCount,
            favorites: logindata[0].favoriteCount,
          };
          const days30inseconds = 60 * 60 * 24 * 30 * 1000;
          const CurrentTimePlusSecs = new Date(
            new Date().getTime() + 60 * 60 * 24 * 30 * 1000
          );
          const accessToken = createTokens(logindata);
          //res.clearCookie("accesst");
          //const tokenxx = req.cookies.accesst;
          //const user = jwt_decode(tokenxx);
          ///setting the cookie
          return res
            .cookie("accesst", accessToken, {
              sameSite: "strict",
              expires: CurrentTimePlusSecs,
              maxAge: days30inseconds,
              httpOnly: true,
              //secure: true,
            })
            .send({ payload: payloadValue });
        }
      } catch (e) {
        console.log(e);
        return res.send({ message: "Wrong username" });
      }
    }
  }
);

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var colorHolder = ["#32a852", "#32a0a8", "#6f32a8", "#a83265", "#a4a832"];

app.post(
  "/registration",
  body("values.inputedEmail")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false }),
  body("values.inputedUsername")
    .isLength({ max: 26 })
    .matches(/^([A-z0-9áéíóúñü\ \_.]+)$/, "gim"),
  body("values.inputedPassword")
    .isLength({ min: 8 })
    .exists({ checkFalsy: true }),
  async (req: Request, res: Response) => {
    const validateErrors = validationResult(req);
    if (!validateErrors.isEmpty()) {
      return res.status(400).json({
        method: req.method,
        status: res.statusCode,
        error: validateErrors,
      });
    } else {
      const { values } = req.body;

      var colorans = getRandomInt(0, 4);

      var color = colorHolder[colorans];
      var currentTime = new Date();

      bcrypt.hash(values.inputedPassword, 10).then(async (hash: string) => {
        try {
          const signupData = await execPoolQuery(register, [
            values.inputedUsername,
            hash,
            values.inputedEmail,
            "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/fc284f4924c7405bb44ab8e2c3f05891",
            "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/94e85f77e13ff88e7deb98d65975f39a",
            "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/27e942d28474c2e0bff656c338c563a5",
            "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/d42140d57dc052276dd51af3f461e4f9",
            "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/98356ee74f016f6e019ec687d3a54982",
            "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/2c38be850a49ff355ba1e13a40ebe3f0",
            color,
            color,
            0,
            1,
            0,
            1,
            currentTime,
            1,
          ]);
          //console.log("success");

          const payloadValue = {
            id: signupData.insertId,
            username: values.inputedUsername,
            userimage:
              "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/98356ee74f016f6e019ec687d3a54982",
            userimagethumb:
              "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/2c38be850a49ff355ba1e13a40ebe3f0",
            usercolor1: color,
            usercolor2: color,
            usercolortype: 0,
            userfirstname: "",
            usersurname: "",
            userquote: " ",
            userbillboard1:
              "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/fc284f4924c7405bb44ab8e2c3f05891",
            userbillboardthumb1:
              "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/94e85f77e13ff88e7deb98d65975f39a",
            userbillboard2:
              "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/27e942d28474c2e0bff656c338c563a5",
            userbillboardthumb2:
              "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/d42140d57dc052276dd51af3f461e4f9",
            biography: "",
          };

          const days30inseconds = 60 * 60 * 24 * 30 * 1000;
          const CurrentTimePlusSecs = new Date(
            new Date().getTime() + 60 * 60 * 24 * 30 * 1000
          );
          const accessToken = createTokensUpdate(payloadValue);
          //res.clearCookie("accesst");
          //const tokenxx = req.cookies.accesst;
          //const user = jwt_decode(tokenxx);
          ///setting the cookie
          return res
            .cookie("accesst", accessToken, {
              sameSite: "strict",
              expires: CurrentTimePlusSecs,
              maxAge: days30inseconds,
              httpOnly: true,
              //secure: true,
            })
            .send({ payload: payloadValue });
        } catch (err: any) {
          console.error(err.code);
          if (err.code === "ER_DUP_ENTRY" || err.errno === 1062) {
            return res.send({ message: "username not unique" });
          } else {
            return res.send({ message: "error" });
          }
        }
      });
    }
  }
);

if (process.env.APP_STATE === "prod") {
  var staticServe = express.static(path.join(__dirname, "../../", "build"));
  app.use("/", staticServe);

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../../", "build", "index.html"))
  );
}

app.listen(process.env.LISTEN, (): any => {
  console.log("runnning");
});
