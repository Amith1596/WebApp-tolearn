import { ICustomer, IOrder } from "../common";
import { ObjectFormatter } from "../utilities";

class Order implements IOrder {
    public constructor(public orderId:number, 
        public orderDate: Date,
        public customerReference: ICustomer,
        public customerExperienceFeedback: string, 
        public billingAddress: string,
        public shippingAddress: String, 
        public units: number,
        public productID: number, 
        public unitPrice:number,
        public discountApplied:number, 
        public taxAmount: number, 
        public remarks: string,
        public customerProductFeedback ?:string[] ) {
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export {
    IOrder
};