const errorHandler = (err, req, res, next) => {
 console.error(`[ERROR] ${err.message}`);
 res.status(err.status || 500).json({
   error: err.message || "Internal Server Error",
   details: err.stack,
 });
};

export default errorHandler;
