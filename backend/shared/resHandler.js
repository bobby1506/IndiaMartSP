const resHandler = (ctx, status, message, success,data=null) => {
    ctx.status=status;
    ctx.body={success,message,data}
};

module.exports={resHandler}
