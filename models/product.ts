import { IProduct } from "../common";
import { ObjectFormatter } from "../utilities";

class Product implements IProduct {
    public constructor(public productId:number, public title:string,public description:string,
        public unitsInStock:number,public unitPrice:number,public sellingPrice:number,
        public itemDiscount:number,public remarks:string ) {
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export {
    Product
};