const { response } = require("express");
const pool = require("../connection");
const { Song, Label, SongDetail, LabelDetailDuration } = require("./class");

class Model {
  static labelList(callback) {
    //--1
    const query = `
    SELECT
    "id",
    "name",
    "since",
    "city"
    FROM "Labels" as l
    order by  l."name" asc   
    `;

    // TO_CHAR("since", 'DY, DD Month YYYY') AS "since",
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows.map((el) => {
          const { id, name, since, city } = el;
          const inputDate = new Date(since);

          const daysOfWeek = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
          ];
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          const dayOfWeek = daysOfWeek[inputDate.getUTCDay()];
          const day = inputDate.getUTCDate();
          const month = months[inputDate.getUTCMonth()];
          const year = inputDate.getUTCFullYear();

          const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

          return new Label(id, name, formattedDate, city);
        });
        callback(null, result);
      }
    });
  }
  static labelsDetail(callback) {
    const query = `
    SELECT
    l."id",
    l."name",
    l."since",
    l."city",
    AVG(s."duration") AS "averageDuration",
    MAX(s."duration") AS "maxDuration",
    MIN(s."duration") AS "minDuration"
    FROM
        "Songs" s
    INNER JOIN
        "Labels" l
    ON
        s."labelId" = l."id"
    GROUP BY
        l."id",
        l."name",
        l."since",
        l."city"
    order by l."id" ;
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows.map((el) => {
          const {
            id,
            name,
            since,
            city,
            averageDuration,
            maxDuration,
            minDuration,
          } = el;
          const inputDate = new Date(since);

          const daysOfWeek = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
          ];
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          const dayOfWeek = daysOfWeek[inputDate.getUTCDay()];
          const day = inputDate.getUTCDate();
          const month = months[inputDate.getUTCMonth()];
          const year = inputDate.getUTCFullYear();

          const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;
          return new LabelDetailDuration(
            id,
            name,
            formattedDate,
            city,
            averageDuration,
            maxDuration,
            minDuration
          );
        });
        callback(null, result);
      }
    });
  }
  static songList(callback) {
    //--1
    const query = `
    select * from "Songs" s ;
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows.map((el) => {
          const { id, title, bandName, duration, genre, totalVote } = el;
          return new Song(id, title, bandName, duration, genre, totalVote);
        });
        callback(null, result);
      }
    });
  }
  static songById(callback) {
    //--1
    const query = `
    select 
    s."id",
    s."title",
    s."bandName",
    s."duration",
    s."genre",
    s."createdDate",
    s."lyric",
    s."imageUrl",
    s."totalVote",
    s."labelId",
    l."name"
    from 
 "Songs" s 
 inner join
 "Labels" l 
 on 
 l."id" = s."labelId" 
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows.map((el) => {
          return new SongDetail(
            el.id,
            el.title,
            el.bandName,
            el.duration,
            el.genre,
            el.totalVote,
            el.createdDate,
            el.lyric,
            el.imageUrl,
            el.labelId,
            el.name
          );
        });
        callback(null, result);
      }
    });
  }
  static formAddSong(callback) {
    const query = `

    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows;
        callback(null, result);
      }
    });
  }
  static addSong(req, callback) {
    const {
      title,
      bandName,
      duration,
      genre,
      totalVote,
      createdDate,
      lyric,
      imageUrl,
      labelId,
      labelName,
    } = req.body;
    const query = `
    insert into "Songs"
    ("title", "bandName", "duration", "genre", "createdDate", "lyric", "imageUrl", "totalVote", "labelId")
    values
    ('${title}', '${bandName}', ${duration}, '${genre}', '${createdDate}', '${lyric}', '${imageUrl}', ${totalVote}, ${labelId})
    returning *;
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows;
        callback(null, result);
      }
    });
  }
  static formEditSongById(callback) {
    const query = `
    select 
    s."id",
    s."title",
    s."bandName",
    s."duration",
    s."genre",
    s."createdDate",
    s."lyric",
    s."imageUrl",
    s."totalVote",
    s."labelId",
    l."name"
    from 
 "Songs" s 
 inner join
 "Labels" l 
 on 
 l."id" = s."labelId" 
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows.map((el) => {
          return new SongDetail(
            el.id,
            el.title,
            el.bandName,
            el.duration,
            el.genre,
            el.totalVote,
            el.createdDate,
            el.lyric,
            el.imageUrl,
            el.labelId,
            el.name
          );
        });
        callback(null, result);
      }
    });
  }
  static editSongById(body, callback) {
    const {
      title,
      bandName,
      duration,
      genre,
      totalVote,
      createdDate,
      lyric,
      imageUrl,
      labelId,
      labelName,
    } = body;
    const query = `
    insert into "Songs"
    ("title", "bandName", "duration", "genre", "createdDate", "lyric", "imageUrl", "totalVote", "labelId")
    values
    ('${title}', '${bandName}', ${duration}, '${genre}', '${createdDate}', '${lyric}', '${imageUrl}', ${totalVote}, ${labelId})
    returning *;
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows;
        callback(null, result);
      }
    });
  }
  static deleteSongById(id, callback) {
    const query = `
    delete from "Songs" s
    where 	s."id"=${id} 
    returning *;
    `;
    pool.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let result = data.rows;
        console.log(result);
        callback(null, result);
      }
    });
  }
}

module.exports = Model;
