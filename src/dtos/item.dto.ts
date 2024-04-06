export class ItemDto {
    constructor(id: string, description: string, price: number, quantity: number) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    id: string;
    description: string;
    price: number;
    quantity: number;
}
