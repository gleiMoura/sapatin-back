
import { productType } from "interfaces";
import { getProductByLink, getProductsFromDb, insertManyProductInDb, insertProductInDb } from "repository/productRepository";

export const insertProduct = async (productInfo: productType) => {
    if (!productInfo || !productInfo.url) {
        throw {
            response: {
                status: 400,
                message: "No file was send or problem with file upload"
            }
        };
    };
    const existProduct = getProductByLink(productInfo.url);
    if(existProduct) {
        throw{
            response: {
                status: 409,
                message: "Product aready exist!"
            }
        }
    };
    
    const product = await insertProductInDb(productInfo);

    if (!product) {
        throw {
            response: {
                status: 400,
                message: "It was not possible save product. Try again later."
            }
        }
    };

    return productInfo
};

export const insertManyProducts = async (productsInfo: productType[]) => {
    if (!productsInfo) {
        throw {
            response: {
                status: 400,
                message: "No file was send"
            }
        };
    };

    const products = await insertManyProductInDb(productsInfo);

    return products;
};



export const getAllProducts = async () => {
    const allProducts = await getProductsFromDb();

    if (!allProducts || allProducts.length === 0) {
        throw {
            response: {
                status: 404,
                message: "Can't find products"
            }
        }
    };

    return allProducts;
};