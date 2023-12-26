import { RequestHandler } from 'express'
import { categoryServices } from './category.service'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../utils/catchAsync'

// Creating Category

const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const result = await categoryServices.createCategoryIntoDB(req.body)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Get All Category

const getAllCategories: RequestHandler = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoriesFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result,
  })
})

export const categoryController = {
  createCategory,
  getAllCategories,
}
