import mongoose from 'mongoose'
import { TErrorSources, TGenericErrorResponse } from '../interface/error'

const handleCastError = (
  err: mongoose.Error.CastError
): TGenericErrorResponse => {
  const errorMessage: TErrorSources = [
    {
      path: err.path,
      message: `${err.value} is not a valid ID!`,
    },
  ]

  const statusCode = 400

  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage,
  }
}

export default handleCastError
