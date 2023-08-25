const authorize=(req,res,next)=>{
  console.log('Authorises the Person')
  console.log(req.query)
  next()
}

module.exports=authorize