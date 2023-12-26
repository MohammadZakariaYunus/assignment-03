const handleDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/)
  const extractedMessage = match && match[1]
  const errorMessage = {
    path: '',
    message: `${extractedMessage} is already exists`,
  }
  const statusCode = 400
  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage,
  }
}

export default handleDuplicateError
