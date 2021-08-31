export interface OrderDetailModel {
    id?: number;
    enterprise_id?: number;
    name?: string;
    price?: string;
    description?: string;
    img_url?: string;
    like_counter?: number;
    deleted_at?: null;
    created_at?: string;
    updated_at?: string;
    pivot?: Pivot;
}

export interface Pivot {
    product_id?: number;
    order_id?: number;
    created_at?: string;
    updated_at?: string;
}

