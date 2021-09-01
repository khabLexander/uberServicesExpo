
export interface OrderModel {
    id?: number;
    client_id?: number;
    delivery_id?: number;
    calification?: string;
    delivery_cost?: number;
    delivery_date?: string;
    state?: string;
    payment_method?: string;
    wait_time?: string;
    total_price?: string;
}
