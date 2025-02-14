const userValidator = (ctx)=>{
    const {isSeller} = ctx.state.user
    if(isSeller) return {field:"user", message:"you are not a user"}
    return null
}

const sellersValidator = (ctx)=>{

    const {isSeller} = ctx.state.user
    console.log(isSeller)
    if(!isSeller) return {field:"user", message:"you are not a seller"}
    return null
}

module.exports={userValidator,sellersValidator}