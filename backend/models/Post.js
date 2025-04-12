const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    body:{
        type:String,
        require:[true,'please provide body of the post']
    },
    photo:{
      type:String,
      default:"no photo"
    },
    postedBy:{
     type:mongoose.SchemaTypes.ObjectId,
      ref: 'User' 
    }
});
const post=mongoose.model('post',postSchema);
module.exports=post;

