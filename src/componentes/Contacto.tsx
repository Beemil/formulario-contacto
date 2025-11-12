import useFormularioContacto from "../hooks/useFormularioContacto";
import { Toaster } from "react-hot-toast";

const Contacto: React.FC = () => {
    const { form, handleChange, handleSubmit } = useFormularioContacto();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 border border-gray-200">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Formulario de Contacto
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nombre */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            value={form.nombre}
                            onChange={(e) => handleChange("nombre", e.target.value)}
                            placeholder="Tu nombre completo"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="ejemplo@correo.com"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Mensaje
                        </label>
                        <textarea
                            value={form.mensaje}
                            onChange={(e) => handleChange("mensaje", e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>

            {/* React Hot Toast */}
            <Toaster position="top-center" />
        </div>
    );
};

export default Contacto;
