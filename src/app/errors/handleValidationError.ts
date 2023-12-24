// import mongoose from 'mongoose'

// const handleValidationError = (
//   errorDetails: mongoose.Error.ValidationError
// ) => {
//   const errorMessage: string = Object.values(errorDetails.errors)
//     .map((val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
//       return `${val?.path} is ${val?.message}`
//     })
//     .join('. ')

//   const statusCode = 400

//   return {
//     statusCode,
//     message: 'Validation Error',
//     errorMessage,
//   }
// }

// export default handleValidationError
