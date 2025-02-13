const Bluebird = require("bluebird");
const { Promise } = Bluebird;

const validateAll = (validations) => {
  return async (ctx, next) => {
    const err = await Promise.mapSeries(validations, async(validate) => {
      return validate(ctx);
    });
    const error=err.filter((val)=> val!=null);
    if(error.length){
        ctx.status=400;
        ctx.body=error;
        return
    }
    await next()
  };
};

module.exports={validateAll}