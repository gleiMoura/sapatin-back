
import config from "config";
import { productType } from "interfaces";
import { getProductsFromDb, insertManyProductInDb, insertProductInDb } from "repository/productRepository";

export const insertProduct = async (productInfo: productType) => {
    if (!productInfo) {
        throw {
            response: {
                status: 400,
                message: "No file was send"
            }
        };
    };

    const product = await insertProductInDb(productInfo);

    return product;
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
}