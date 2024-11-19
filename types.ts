export interface Order {
    id: number;
    name: string;
    surname: string;
    phoneNumber: number;
    time: number;

    quantity: number;
    purchaseType: string;
    price: number;
    paymentType: string;
    location: string;
}