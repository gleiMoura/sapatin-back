import { GridFSBucketWriteStream, ObjectId } from "mongodb";
import { productType } from "interfaces";
import config from "config";
import { response } from "express";

const { db } = config;

export const insertProductInDb = async (productInfo: productType) => {
    try {
        if (!productInfo) {
            throw {
                response: {
                    status: 400,
                    message: "it is not possible insert withou product information!"
                }
            }
        };

        const products = await db.collection("shoes").insertOne(productInfo);

        return products
    } catch (error) {
        console.log("Error trying get products from db");
    }
};

export const insertManyProductInDb = async (productsInfo: productType[]) => {
    try {
        const products = await db.collection("shoes").insertMany(productsInfo);

        return products
    } catch (error) {
        console.log("Error trying get products from db");
    }
};

export const getProductsFromDb = async () => {
    try {
        const products = await db.collection("shoes").find().toArray();
        return products;
    } catch (error) {
        console.log("Error trying get products from db");
    }

}