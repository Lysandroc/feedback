export default class Invites {

  invites = [{
    id: 23,
    name: 'Chico',
    start: new Date,
    finish: new Date,
    url: 'https://pbs.twimg.com/profile_images/85884918/barroso_200x200.JPG',
    positive1: '',
    positive2: '',
    positive3: '',
    negative1: '',
    negative2: '',
    negative3: ''
  },{
    id: 30,
    start: new Date,
    finish: new Date,
    name: 'renoir',
    positive1: '',
    positive2: '',
    positive3: '',
    negative1: '',
    negative2: '',
    negative3: ''
  }];

  getInvites(req, res) {
    res.send(this.invites);
  }

  getInvite(req, res) {
    let invite = this.invites.reduce(function(a, b){
      if(b.id == req.params.id) return b;
      return a;
    }, {});

    res.send(invite);
  }

  save(req, res) {
    let invite = this.invites.reduce(function(a, b){
      if(b.id == req.params.id) return b;
      return a;
    }, {});

    Object.keys(req.body).forEach(function(key){
      let value = req.body[key];
      invite[key] = value;
    })

    res.send({});
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/invites/:id.json', this.getInvite.bind(this));
    app.get('/invites.json', this.getInvites.bind(this));
    app.put('/invites/:id.json', this.save.bind(this))
  }

}