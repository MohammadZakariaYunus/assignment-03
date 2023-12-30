/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import AppError from '../errors/AppError'
import handleCastError from '../errors/handleCastError'
import handleDuplicateError from '../errors/handleDuplicateError'
import handleValidationError from '../errors/handleValidationError'
import handleZodError from '../errors/handleZodError'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500
  let message = 'Something went wrong!'
  let errorMessage = 'Something went wrong'

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessage = simplifiedError?.errorMessage
      .map(error => `${error.path} ${error.message}`)
      .join(', ')
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessage = simplifiedError?.errorMessage
      .map(error => `${error.path} ${error.message}`)
      .join(', ')
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessage = simplifiedError?.errorMessage
      .map(error => `${error.path} ${error.message}`)
      .join(', ')
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message

    if (Array.isArray(simplifiedError?.errorMessage)) {
      // If errorMessage is an array, join its elements into a string
      errorMessage = simplifiedError?.errorMessage
        .map(error => `${error.path} ${error.message}`)
        .join(', ')
    } else if (
      typeof simplifiedError?.errorMessage === 'object' &&
      simplifiedError?.errorMessage !== null
    ) {
      // If errorMessage is an object, use a default message or handle it accordingly
      errorMessage = 'Duplicate key violation' // Example default message
    } else {
      // If errorMessage is not an array or object, use it directly
      errorMessage = simplifiedError?.errorMessage
    }
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessage = `${err?.message}`
  } else if (err instanceof Error) {
    message = err.message
    errorMessage = `${err?.message}`
  }

  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: err,
    stack: err?.stack,
  })
}

export default globalErrorHandler
