// import { ZodError, ZodIssue } from 'zod'

// const handleZodError = (errorDetails: ZodError) => {
//   const errorMessage: any = errorDetails.issues.map((issue: ZodIssue) => {
//     return {
//       path: issue?.path[issue.path.length - 1],
//       message: issue.message,
//     }
//   })

//   const statusCode = 400

//   return {
//     statusCode,
//     message: 'Validation Error',
//     errorMessage,
//   }
// }

// export default handleZodError
