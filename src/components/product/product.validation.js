import joi from "joi";

export const addProductSchema = {
    body: joi.object().required().keys({
        title: joi.string().required(),
        price: joi.number().required(),
        oldPrice: joi.number().valid(),//************************************* */
        description: joi.string().required(),
        categoryId: joi.string().required().max(24).min(24),
        video: joi.allow(),
        images: joi.allow(),
        mainImage: joi.allow()
    }),
    params: joi.object().required().keys({}),
    query: joi.object().required().keys({}),
}


export const updateProductSchema = {
    body: joi.object().required().keys({
        title: joi.string(),
        oldPrice: joi.number().required(),
        price: joi.number().required(),
        description: joi.string(),
        video: joi.allow(),
        images: joi.allow(),
        mainImage: joi.allow()

    }),
    params: joi.object().required().keys({
        _id: joi.string().required().max(24).min(24)
    }),
    query: joi.object().required().keys({}),

}

export const deleteProductSchema = {
    body: joi.object().required().keys({}),
    params: joi.object().required().keys({
        _id: joi.string().required().max(24).min(24)
    }),
    query: joi.object().required().keys({}),
}

export const getProducts = {
    body: joi.object().required().keys({}),
    params: joi.object().required().keys({}),
    query: joi.object().required().keys({
        page: joi.number().min(1),
        size: joi.number().min(1).max(20).message('size must be a number between 1 and 20'),
    }),
}


export const getProductById = {
    body: joi.object().required().keys({}),
    params: joi.object().required().keys({
        productId: joi.string().required().max(24).min(24)
    }),
    query: joi.object().required().keys({}),

}

export const NoDataSchema = {
    body: joi.object().required().keys({}),
    params: joi.object().required().keys({}),
    query: joi.object().required().keys({}),
}