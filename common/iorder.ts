import { ICustomer } from "./icustomer"

interface IOrder{
    orderId:number; 
    orderDate: Date; 
    customerReference: ICustomer; 
    customerExperienceFeedback: string; 
    billingAddress: string; 
    shippingAddress: String; 
    units: number;
    productID: number; 
    unitPrice:number; 
    discountApplied:number; 
    taxAmount: number; 
    remarks: string;
    customerProductFeedback ?:string[];
}

export {
    IOrder
}