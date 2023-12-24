// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { ErrorRequestHandler } from 'express'
// import { ZodError } from 'zod'
// // import AppError from '../errors/AppError'
// // import handleCastError from '../errors/handleCastError'
// // import handleDuplicateError from '../errors/handleDuplicateError'
// // import handleValidationError from '../errors/handleValidationError'
// // import handleZodError from '../errors/handleZodError'

// const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   //setting default values
//   let statusCode = 500
//   let message = 'Something went wrong!'
//   let errorSources: any = { path: '', message: 'Something went wrong' }
//   let errorMessage = `${errorSources.path} ${errorSources.message}`

//   // if (err instanceof ZodError) {
//   //   const simplifiedError = handleZodError(err)
//   //   statusCode = simplifiedError?.statusCode
//   //   message = simplifiedError?.message
//   //   errorMessage = simplifiedError?.errorMessage
//   // } else if (err?.name === 'ValidationError') {
//   //   const simplifiedError = handleValidationError(err)
//   //   statusCode = simplifiedError?.statusCode
//   //   message = simplifiedError?.message
//   //   errorMessage = simplifiedError?.errorMessage
//   // } else if (err?.name === 'CastError') {
//   //   const simplifiedError = handleCastError(err)
//   //   statusCode = simplifiedError?.statusCode
//   //   message = simplifiedError?.message
//   //   errorSources = simplifiedError?.errorSources
//   // } else if (err?.code === 11000) {
//   //   const simplifiedError = handleDuplicateError(err)
//   //   statusCode = simplifiedError?.statusCode
//   //   message = simplifiedError?.message
//   //   errorSources = simplifiedError?.errorSources
//   // } else if (err instanceof AppError) {
//   //   statusCode = err?.statusCode
//   //   message = err.message
//   //   errorSources = [
//   //     {
//   //       path: '',
//   //       message: err?.message,
//   //     },
//   //   ]
//   // } else if (err instanceof Error) {
//   //   message = err.message
//   //   errorSources = [
//   //     {
//   //       path: '',
//   //       message: err?.message,
//   //     },
//   //   ]
//   // }

//   //ultimate return
//   return res.status(statusCode).json({
//     success: false,
//     message,
//     errorMessage,
//     errorDetails: err,
//     stack: err?.stack,
//   })
// }

// export default globalErrorHandler

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500
  const message = err.message || 'Something went wrong!'

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  })
}

export default globalErrorHandler
