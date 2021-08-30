export interface CategoryModel {
    id?: number;
    description?: string;
    name?: string;
    img_url?: string;
    deleted_at?: null;
    created_at?: string;
    updated_at?: string;
    pivot?: Pivot;
}

export interface Pivot {
    enterprise_id?: number;
    category_id?: number;
    created_at?: string;
    updated_at?: string;
}
