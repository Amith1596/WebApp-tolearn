"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class Order {
    constructor(orderId, orderDate, customerReference, customerExperienceFeedback, billingAddress, shippingAddress, units, productID, unitPrice, discountApplied, taxAmount, remarks, customerProductFeedback) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.customerReference = customerReference;
        this.customerExperienceFeedback = customerExperienceFeedback;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.units = units;
        this.productID = productID;
        this.unitPrice = unitPrice;
        this.discountApplied = discountApplied;
        this.taxAmount = taxAmount;
        this.remarks = remarks;
        this.customerProductFeedback = customerProductFeedback;
    }
    toString() {
        return utilities_1.ObjectFormatter.format(this);
    }
}
//# sourceMappingURL=order.js.map