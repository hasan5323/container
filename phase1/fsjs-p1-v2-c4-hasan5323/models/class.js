class Label {
  constructor(id, name, since, city) {
    this.id = id;
    this.name = name;
    this.since = since;
    this.city = city;
  }
}
class LabelDetailDuration extends Label {
  constructor(
    id,
    name,
    since,
    city,
    averageDuration,
    minDuration,
    maxDuration
  ) {
    super(id, name, since, city);
    this.averageDuration = averageDuration;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
  }
}
class Song {
  constructor(id, title, bandName, duration, genre, totalVote) {
    this.id = id;
    this.title = title;
    this.bandName = bandName;
    this.duration = duration;
    this.genre = genre;
    this.totalVote = totalVote;
  }
}

class SongDetail extends Song {
  constructor(
    id,
    title,
    bandName,
    duration,
    genre,
    totalVote,
    createdDate,
    lyric,
    imageUrl,
    labelId,
    labelName
  ) {
    super(id, title, bandName, duration, genre, totalVote);
    this.createdDate = createdDate;
    this.lyric = lyric;
    this.imageUrl = imageUrl;
    this.labelId = labelId;
    this.labelName = labelName;
  }
}

module.exports = { Song, Label, SongDetail, LabelDetailDuration };
