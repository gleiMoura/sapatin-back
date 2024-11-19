import { productType } from "interfaces";
import config from "config";
import { bucket, bucketName } from "config/cloud";

const { db } = config;

export const insertProductInDb = async (productInfo: productType) => {
    try {
        if (!productInfo) {
            throw {
                response: {
                    status: 400,
                    message: "it is not possible insert without product information!"
                }
            }
        };

        const products = await db.collection("products").insertOne(productInfo);

        return products
    } catch (error) {
        console.log("Error trying get products from db");
    }
};

export const insertManyProductInDb = async (productsInfo: productType[]) => {
    try {
        const products = await db.collection("products").insertMany(productsInfo);

        return products
    } catch (error) {
        console.log("Error trying get products from db");
    }
};

export const getProductsFromDb = async () => {
    try {
        const products = await db.collection("products").find().toArray();
        return products;
    } catch (error) {
        console.log("Error trying get products from db");
    }
};

export const generateProductLink = async (file) => {
    try {
        const filePath = file.path;
        const fileName = file.originalname;
        const destination = bucket.file(fileName);

        // Enviando o arquivo para o Google Cloud Storage
        await bucket.upload(filePath, {
            destination: fileName,
        });

        // Tornando o arquivo público
        await destination.makePublic();

        const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
        console.log(publicUrl)
        return publicUrl;
    } catch (error) {
        console.error('Erro no upload:', error);
    }
};

export const getProductByLink = async (link: string) => {
    try {
        if (!link) {
            throw {
                response: {
                    status: 400,
                    message: "It's necessary create link"
                }
            }
        };

        const product = await db.collection("products").findOne({ url: link });
        return product;
    } catch (error) {

    }
}