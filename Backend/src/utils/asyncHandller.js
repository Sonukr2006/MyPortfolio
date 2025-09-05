const asyncHandller = (requestHandler) =>{
    return (req, res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
    }
}



// const asyncHandller = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (err) {
//     res.status(err.statusCode || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export default asyncHandller;