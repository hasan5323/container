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

class Tanggal {
  static formatDate(){
      let date = new Date(this.createdDate)
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let newFormat = date.toLocaleDateString('id-ID', options)
      return newFormat
  }
  static newDate(){
      let date = new Date(this.createdDate)
      let years = date.getFullYear()
      let month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1
      let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      return `${years}-${month}-${day}`
  }
}

module.exports = { Song, Label, SongDetail, LabelDetailDuration };
