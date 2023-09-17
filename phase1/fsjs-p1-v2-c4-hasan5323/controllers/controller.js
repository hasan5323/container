const Model = require(`../models/model`);

class Controller {
  static default(req,res){
    res.send("_")
  }
  static labelList(req,res){
    Model.labelList((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("list-Labels", {data})
      }
    })
  }
  static labelsDuration(req,res){
    Model.labelsDuration((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("labels-Duration", {data})
      }
    })
  }

  static songList(req,res){
    Model.songList((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("list-Songs", {data})
      }
    })
  }
  static formAddSong(req,res){
    Model.formAddSong((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("form-add-song", {data})
      }
    })
  }
  static addSong(req,res){
    Model.addSong(req,(err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("add-Song-toDatabase", {data})
      }
    })
  }
  static songById(req,res){
    const id = Number(req.params.id)
    Model.songById((err,data)=> {
      if(err){
        res.send(err)
      } else {
        data = data.filter(e => e.id===id)
        res.render("song-by-id", {data})
      }
    })
  }
  static formEditSongById(req,res){
    const id = Number(req.params.id)
    Model.formEditSongById((err,data)=> {
      if(err){
        res.send(err)
      } else {
        data = data.filter(e => e.id===id)
        data = data[0]
        res.render("form-edit-song-by-id", {data})
      }
    })
  }
  static editSongById(req,res){
    let body = req.body
    Model.editSongById(body, (err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("edit-song-by-id", {data})
      }
    })
  }
  static deleteSongById(req,res){
    Model.deleteSongById((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("delete-song-by-id", data)
      }
    })
  }
  
}

module.exports = Controller;
