import React, {useEffect} from "react";
import { useRegisterViewModel } from "../viewmodels/use-register";
import { toast } from "sonner";

interface RegisterPageProps {
  onNavigateToLogin: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  onNavigateToLogin,
}) => {

  const {
form,
confirmPassword,
setConfirmPassword,
isLoading,
error,
handleChange,
success,
submit
  }=useRegisterViewModel();

  useEffect(() => {
    if(error){
      toast.error(error)
    }
  }, [error])

  useEffect(() => {
    if(success){
      toast.success(success)
    }
  }, [success])
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans">
      <header className="relative w-full border border-slate-100 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">ErnestoDev</h1>

            <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#">Explorar</a>
              <a href="#">Ofertas</a>
              <a href="#">Historia</a>
              <a href="#">Ayuda</a>
            </nav>
          </div>

          <button
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold"
            onClick={onNavigateToLogin}
          >
            Loguearse
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-8xl w-full mx-auto flex items-center justify-center px-6 py-10">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-lg rounded-lg shadow-xl border p-8 sm:p-10">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900">
                Crear cuenta
              </h1>
              <p className="mt-2 text-sm font-medium">
                Crea tu cuenta y disfruta de las promociones
              </p>
            </div>
            <form onSubmit={submit} action="">
              <label
                htmlFor=""
                className="block text-xs font-semibold uppercase mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate400"
                placeholder="Ingrese su nombre "
              />
               <label
                htmlFor=""
                className="block text-xs font-semibold uppercase mb-2"
              >
                Apellido
              </label>
              <input
                type="text"
                value={form.lastname}
                onChange={(e) => handleChange("lastname", e.target.value)}
                className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate400"
                placeholder="Ingrese su Apellido" 
              />
              <label
                htmlFor=""
                className="block text-xs font-semibold uppercase mb-2"
              >
                Dirección de correo electrónico
              </label>
              <input
                type="text"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate400"
                placeholder="example@gmail.com"
              />

                 <label
                htmlFor=""
                className="block text-xs font-semibold uppercase mb-2"
              >
               Telefono
              </label>
              <input
              value={form.phone}
             
                type="text"
                 onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate400"
                placeholder="7799-9909"
              />

              <div>
                <label
                  htmlFor=""
                  className="block text-xs font-semibold uppercase mb-2"
                >
                  contraseña
                </label>
                <input
                  value={form.password}
                  type="text"
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate400"
                  placeholder="Digita tu contraseña"
                />
              </div>

                <div>
                <label
                  htmlFor=""
                  className="block text-xs font-semibold uppercase mb-2"
                >
                  Confirmar contraseña
                </label>
                <input
                  value={confirmPassword}
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate400"
                  placeholder="Digita tu contraseña de confirmación"
                />
              </div>
             
              <button
                type="submit"

                className="w-full py-3 px-4 bg-blue-500 text-white  hover:bg-blue-600 hover:shadow-lg rounded-lg transition-all 
            duration-200 active:scale-[0.98] disabled:opacity-50"
              >
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
              </button>
             
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
