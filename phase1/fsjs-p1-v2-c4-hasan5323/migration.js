const pool = require("./connection")

const dropLabels = `
drop table if exists "Labels"
`
const dropSongs = `
drop table if exists "Songs"
`
const createLabels = `
create table if not exists  "Labels" (
    "id" SERIAL primary key,
    "name" VARCHAR(120) not null,
    "since" DATE not null,
    "city" VARCHAR(20) not null
)
`
const createSongs = `
create table if not exists "Songs" (
	"id" SERIAL primary key,
	"title" VARCHAR(100),
    "bandName" VARCHAR(100),
	"duration" INT,
    "genre" VARCHAR(100),
    "createdDate" DATE,
    "lyric" TEXT,
	"imageUrl" VARCHAR(150),
	"totalVote" INT,
	"labelId" INT references "Labels" ("id")
)
`

pool.query(dropSongs,(err,data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data.command);
        pool.query(dropLabels,(err,data)=>{
            if(err) {
                console.log(err);
            } else {
                console.log(data.command);
                pool.query(createLabels,(err,data)=>{
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(data.command);
                        pool.query(createSongs,(err,data)=>{
                            if(err) {
                                console.log(err);
                            } else {
                                console.log(data.command);
                            }
                        })
                    }
                })
            }
        })
    }
})


