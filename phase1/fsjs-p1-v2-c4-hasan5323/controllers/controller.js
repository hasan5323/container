const Model = require(`../models/model`);

class Controller {
  static default(req,res){
    res.render("index")
  }
  static labelList(req,res){
    
    Model.labelList((err,data)=> {
      if(err){
        res.send(err)
      } else {
        
        console.log();
        res.render("labels", {data})
      }
    })
  }
  static labelsDetail(req,res){
    Model.labelsDetail((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("labels-detail", {data})
      }
    })
  }

  static songList(req,res){
    Model.songList((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("songs", {data})
      }
    })
  }
  static formAddSong(req,res){
    Model.formAddSong((err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("add-song", {data})
      }
    })
  }
  static addSong(req,res){
    Model.addSong(req,(err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.redirect("/songs")
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
        res.render("songs", {data})
      }
    })
  }
  static formEditSongById(req,res){
    console.log(req.params);
    id = Number(req.params.id)
    Model.formEditSongById((err,data)=> {
      if(err){
        res.send(err)
      } else {
        data = data.filter(e => e.id===id)
        data = data[0]
        res.render("edit-song", {data})
      }
    })
  }
  static editSongById(req,res){
    let body = req.body
    Model.editSongById(body, (err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.render("/songs")
      }
    })
  }
  static deleteSongById(req,res){
    let id =Number(req.params.id)
    Model.deleteSongById(id,(err,data)=> {
      if(err){
        res.send(err)
      } else {
        res.redirect("/songs")
      }
    })
  }
  
}

module.exports = Controller;
