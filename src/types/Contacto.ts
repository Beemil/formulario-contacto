export interface Contacto {
    nombre: string;
    email: string;
    mensaje: string;
}

export type ContactoKey = keyof Contacto;