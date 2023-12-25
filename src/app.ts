import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { courseRoutes } from './app/modules/course/course.route'
import { categoriesRoutes } from './app/modules/category/category.route'
import { reviewRoutes } from './app/modules/review/review.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Course Reviews....')
})

app.use('/api', courseRoutes)
app.use('/api', categoriesRoutes)
app.use('/api', reviewRoutes)

app.use(globalErrorHandler)
app.use(notFound)

export default app
