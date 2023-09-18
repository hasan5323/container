const pool = require("./connection");
const fs = require("fs");

const seedlabels = JSON.parse(fs.readFileSync("./data/labels.json", "utf-8"))
  .map((label) => {
    const {id, name, since, city } = label;
    return `('${name}', '${since}', '${city}')`;
  })
  .join(",\n");

const seedSongs = JSON.parse(fs.readFileSync("./data/songs.json", "utf-8"))
  .map((song) => {
    const {
      id,
      title,
      bandName,
      duration,
      genre,
      createdDate,
      lyric,
      imageUrl,
      totalVote,
      LabelId,
    } = song;
    return `('${title}', '${bandName}', ${duration}, '${genre}', '${createdDate}', '${lyric}', '${imageUrl}', ${totalVote}, ${LabelId})`;
  })
  .join(",\n");

const tableLabelsInsert = `
insert  into "Labels"
("name", "since", "city")
values
${seedlabels}
`;
const tableSongsInsert = `
insert into "Songs"
("title", "bandName", "duration", "genre", "createdDate", "lyric", "imageUrl", "totalVote", "labelId")
values
${seedSongs}
`;

pool.query(tableLabelsInsert, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.command)
    console.log(`table Labels is seeded`);
    // console.log(data.rows);
    pool.query(tableSongsInsert, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data.command)
        console.log(`table Songs is seeded`);
      }
    });
  }
});
