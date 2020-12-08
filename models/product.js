"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const utilities_1 = require("../utilities");
class Product {
    constructor(productId, title, description, unitsInStock, unitPrice, sellingPrice, itemDiscount, remarks) {
        this.productId = productId;
        this.title = title;
        this.description = description;
        this.unitsInStock = unitsInStock;
        this.unitPrice = unitPrice;
        this.sellingPrice = sellingPrice;
        this.itemDiscount = itemDiscount;
        this.remarks = remarks;
    }
    toString() {
        return utilities_1.ObjectFormatter.format(this);
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map