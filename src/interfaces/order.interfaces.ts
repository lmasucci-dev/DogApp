export interface Orders {
    idOrder:       string;
    direccion:     string;
    localidad:     string;
    pago:          boolean;
    productsOrder: ProductsOrder[];
}

export interface ProductsOrder {
    cantidad:            number;
    idProducto:          string;
    descripcionProducto: string;
    costo:               number;
    precio:              number;
}
