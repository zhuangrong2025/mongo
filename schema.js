var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    name  : { type: String, unique: true },
    posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});
var User = mongoose.model('User', UserSchema);

var PostSchema = new Schema({
    poster   : { type: Schema.Types.ObjectId, ref: 'User' },
    comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    title    : String,
    content  : String
});
var Post = mongoose.model('Post', PostSchema);

var CommentSchema = new Schema({
    post      : { type: Schema.Types.ObjectId, ref: "Post" },
    commenter : { type: Schema.Types.ObjectId, ref: 'User' },
    content   : {
        main: String,
        label: String
    },
    points: [
        point: [{type: Schema.Types.ObjectId, ref: 'Point'}]
    ]
});
var Comment = mongoose.model('Comment', CommentSchema);

var PointSchema = new mongoose.Schema({
  name: String,
  parent: {type: Schema.Types.ObjectId, ref: 'point'},
  children: [{type: Schema.Types.ObjectId, ref: 'point'}]
})
var Point = mongoose.model('Point', PointSchema);
