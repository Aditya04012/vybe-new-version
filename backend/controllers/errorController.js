const AppError=require('./../utils/AppError');

const DevelopmentErr=(err,res)=>{
res.status(err.statusCode||500).json({
status:"error",
error:err.message,
stack:err.stack,
});
}

const ProductionErr=(err,res)=>{
    res.status(err.statusCode||500).json({
        status:"error",
        error:err.message,
        });
}
module.exports=(err,req,res,next)=>{
   
    if(process.env.NODE_ENV.trim()=='developement'){
     DevelopmentErr(err,res);
    }else{
      ProductionErr(err,res);
    }
}