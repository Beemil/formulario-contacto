import { useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Contacto, ContactoKey } from '../types/Contacto';

const useFormularioContacto = () => {
    //Estado Inicial
    const [ form, setForm] = useState<Contacto> ({
        nombre: "",
        email: "",
        mensaje: "",
    });

    //cambiar los valores de los campos
    const handleChange = ( name: ContactoKey, value: string) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Validaciones
    const validarFormulario = (): boolean => {
        if (!form.nombre.trim()) {
            toast.error ('El nombre no puede estar vacio.');
            return false;
        }

        if (!form.email.trim()){
            toast.error ('Introduzca un correo electronico');
            return false;
        }

        if (!form.mensaje.trim()) {
            toast.error('El mensaje no puede estar vacio');
            return false;
        }

        return true;
    }

    //Envio del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validarFormulario()) return;

        toast.success("Gracias por tu mensaje. Te contactaremos pronto.");

        //Limpiar
        setForm({
            nombre: "",
            email: "",
            mensaje: "",
        });
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
};

export default useFormularioContacto;