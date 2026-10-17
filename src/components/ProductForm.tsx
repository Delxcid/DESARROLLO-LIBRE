import type React from "react";
import { useState } from "react";
import { useProductViewModel } from "../viewmodels/use-product";

interface ProductFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}



export const ProductForm: React.FC<ProductFormProps> = ({
 onCancel,
 onSuccess,}) => {

  const {
    form,
    handleChange,
    submit,
    isLoading,
    categories,
    isLoadingCategoies,
  
}=useProductViewModel()
 
  return (
    <div className="max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-sm over">
      <div className="border-b border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-800">
          Crear nuevo producto
        </h3>
        <p className="text-xs text-slate-400 mb-1">
          ingresa los datos esenciales del producto para registrarlo en el
          catalogo
        </p>
      </div>
      <form onSubmit={submit} className="p-6 space-y-6">
        <div>
          <label
            htmlFor=""
            className="block text-xs font-bold text-slate-700 uppercase mb-2"
          >
            Nombre del producto
          </label>
          <input
            type="text"
            value={form.name}
            required
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Ej. Pizza Artesanal"
            className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-xs font-bold text-slate-700 uppercase mb-2"
          >
            categoria
          </label>
          <select
            required
            value={form.categoryId}
            onChange={(e) => handleChange("categoryId", e.target.value)}
            className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs text-slate-700 focus:border-indigo-600 focus:outline-none"
          >
            <option value="">
    {isLoadingCategoies ? "Cargando categorias": "Selecciona la categoria"}
</option>
{categories.map((cat)=>(
    <option key={cat.id} value={cat.id}>
        {cat.name}
    </option>
))}

          </select>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-xs font-bold text-slate-700 uppercase mb-2"
          >
            codigo de barra
          </label>
          <input
            type="text"
            required
            value={form.sku}
            onChange={(e) => handleChange("sku", e.target.value)}
            placeholder="Ej. 1234567890123"
            className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none"
          />
          <span className="text-[10px] text-slate-400 block mt-1">
            Codigo internode inventario
          </span>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-xs font-bold text-slate-700 uppercase mb-2"
          >
            Descripcion detallada del producto
          </label>
          <textarea
            required
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="describe la preparacion, y notas de preparacion"
            className="w-full h-32 rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none"
          />
          <span className="text-[10px] text-slate-400 block mt-1">
            Asegurate de incluir advertencias o especificaciones de porcuines
            para los repartidores
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Precio regular
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-700">
                $
              </span>
              <input
                type="text"
                value={form.regularPrice}
                onChange={(e) => handleChange("regularPrice", e.target.value)}
                step="0.01"
                min="0"
                required
                placeholder="Ej. 0.0"
                className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none pl-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Precio oferta
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-700">
                $
              </span>
              <input
                type="text"
                value={form.offerPrice}
                onChange={(e) => handleChange("offerPrice", e.target.value)}
                step="0.01"
                min="0"
                required
                placeholder="Ej. 0.0"
                className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none pl-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              stock inicial
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-700">
                $
              </span>
              <input
                type="text"
                value={form.initialStock}
                onChange={(e) => handleChange("initialStock", e.target.value)}
                step="0.01"
                min="0"
                required
                placeholder="Ej. 0.0"
                className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none pl-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                stock minimo
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-700">
                $
              </span>
              <input
                type="text"
                value={form.minStockAlert}
                onChange={(e) => handleChange("minStockAlert", e.target.value)}
                step="0.01"
                min="0"
                required
                placeholder="Ej. 0.0"
                className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder:-slate-400 focus:border-indigo-600 focus:outline-none pl-6"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
          {" "}
        </div>
        <button
          onClick={onCancel}
          className="rounded-lg bg-slate-100 hover:bg-slate-200 px-5 py-2 text-xs font-semibold text-slate-600"
        >
          Cancelar
        </button>
        <button className="rounded-lg bg-indigo-600 hover:bg-slate-200 px-5 py-2 text-xs font-semibold text-white">
          {isLoading ? "Creando..." : "Crear producto"}
        </button>
      </form>
    </div>
  );
};
