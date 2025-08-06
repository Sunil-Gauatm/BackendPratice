import { ProductModel } from "../models/product.model.js";

export const ProductContoller = {
    createProduct: async (req, res) => {
        try {
            const { name, price, description, category, image } = req.body;
            const newProduct = await ProductModel.create({
                name,
                price,
                description,
                category,
                image
            })
            return res.status(201).json({ message: "Product created successfully", product: newProduct })

        } catch (error) {
            return res.status(500).json({ message: "Internal server error", error: error.message })
        }
    }
    ,
    getAllProduct: async (req, res) => {
        try {
            const products = await ProductModel.find();
            return res.status(200).json({ message: "Products fetched successfully", products: products })

        } catch (error) {
            return res.status(500).json({ message: "internal server error", error: error.message })
        }
    },

    getProductByid: async (req, res) => {
        try {
            const { id } = req.params
            const ProductDetail = await ProductModel.findById(id)
            if (!ProductDetail) {
                return res.status(400).json({ message: "Product not Found" })
            }
            return res.status(200).json({ message: "Product Fetched Sucessfully", product: ProductDetail })

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server error', error: error.message })
        }

    },
    editProductByID: async (req, res) => {
        try {
            const { id } = req.params
            const updates = req.body
            const EditProduct = await ProductModel.findByIdAndUpdate(
                id,
                updates,
                { new: true }

            )
            return res.status(200).json({ message: "Product Updated Sucessfully", Product: EditProduct })


        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    },
    deleteProductByID: async (req, res) => {
        try {
            const { id } = req.params

            const deletedProduct = await ProductModel.deleteProductByID(id)
            return res.status(200).json({ message: "Product Deleted Sucessfully", Product: deletedProduct })
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    }

}