// const orderModel = require("../models/orderModel")


// const placeOrder = async (req, res) => {
//     try {
//         const { customer, products, TotalAmount } = req.body;

//         if(!products || products.length === 0){ 
//             return res.status(400).json({ message: "No products in the order" });
//         }

        
//         let TotalAmountCalculated = 0;
//         let orders = []

//         for(let item of products){
//             const productData = await orderModel.findById(item.productId);

//             if(!productData){
//                 return res.status(404).json({ message: `Product with ID ${item.productId} not found` });
//             }
//         }

//         let price = productData.price;
//         let quantity = item.quantity;
//         TotalAmountCalculated += price * quantity;

//         productData.quantity -= quantity;
//         await productData.save();

//         orders.push({
//             productId: productData._id,
//             quantity: item.quantity,
//             price,
//             totalPrice: price * quantity



//         })

//        if(!customer){
//         return res.status(400).json({ message: "Customer information is required" });
//        }

//        const newOrder = new orderModel({
//         customer,
//         products: orders,
//         TotalAmount: TotalAmountCalculated
//        })

//        await newOrder.save();

//        res.send(newOrder)

//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message })
//     }
// }


// //read all orders


// module.exports = { placeOrder}





//
const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

const placeOrder = async (req, res) => {
  try {
    const { customer, products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products in the order" });
    }

    let TotalAmountCalculated = 0;
    let orders = [];

    for (let item of products) {
      // hel product ka database-ka
      const productData = await productModel.findById(item.productId);

      if (!productData) {
        return res.status(404).json({ message: `Product with ID ${item.productId} not found` });
      }

      // xisaabi qiimaha iyo tirada
      let price = productData.price;
      let quantity = item.quantity;
      TotalAmountCalculated += price * quantity;

      // update garee product quantity
      productData.quantity -= quantity;
      await productData.save();

      // ku dar order-ka product-kan
      orders.push({
        productId: productData._id,
        quantity,
        price,
        totalPrice: price * quantity,
      });
    }

    if (!customer) {
      return res.status(400).json({ message: "Customer information is required" });
    }

    const newOrder = new orderModel({
      customer,
      products: orders,
      TotalAmount: TotalAmountCalculated,
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//read order
const readOrder = async (req, res) =>{
  const getOrder = await orderModel.find()
  if(getOrder){
    res.send(getOrder)
  }
}

//total amount
const getTotalAmount = async (req, res) =>{
  const totalAmount = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: "$TotalAmount" }
      
      } 
     
    }
  ])

   if(totalAmount){
        res.send(totalAmount)
      }
}



module.exports = { placeOrder, readOrder, getTotalAmount };
