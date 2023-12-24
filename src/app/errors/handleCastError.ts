import mongoose from 'mongoose'

const handleCastError = (err: mongoose.Error.CastError) => {
  const errorMessage = {
    path: err.path,
    message: err.message,
  }

  const statusCode = 400

  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage,
  }
}

export default handleCastError
