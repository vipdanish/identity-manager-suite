
const errorHandler = (err, req, res, next) => {
  // Get status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  // Log error for server-side debugging
  console.error(`Error: ${err.message}`.red);
  console.error(err.stack);
  
  // Send error response
  res.status(statusCode);
  res.json({
    message: err.message,
    // Only send stack trace in development
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    // Add error code if available
    errorCode: err.code || 'UNKNOWN_ERROR'
  });
};

// 404 Not Found middleware
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, notFound };
