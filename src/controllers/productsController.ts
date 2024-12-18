import { Request, Response } from "express";
import { productType } from "interfaces";
import { generateProductLink } from "repository/productRepository";
import { getAllProducts, insertManyProducts, insertProduct } from "services/productsService";

export const PutSingleProduct = async (req: Request, res: Response) => {
    const productInfo: productType = req.body;

    const product = await insertProduct(productInfo);

    res.status(200).send(product);
};

export const PutManyProducts = async (req: Request, res: Response) => {
    const productsInfo: productType[] = req.body;

    const products = await insertManyProducts(productsInfo);

    res.status(200).send(products);
};

export const getProducts = async (req: Request, res: Response) => {
    const products = await getAllProducts();

    res.status(201).send(products);
};

export const putProductAsFile = async (req: Request, res: Response) => {
    const file = req.file;
    const productInfo: productType = req.body;

    const productLink = await generateProductLink(file);

    const product = await insertProduct({ ...productInfo, url: productLink });

    res.status(201).send(product);
};