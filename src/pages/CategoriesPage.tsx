import type React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryForm } from "../components/CategoryForm";

export const CategoriesPage:React.FC=()=>{
    const navigate = useNavigate()
    return(
         <div className="space-y-6">
<div>
                <h2 className="text-3xl font-bold text-slate-800">Gestion de Categoria</h2>
                <p className="mt-1 text-sm text-slate-500">Crea y administra las categorías para tus productos</p>
            </div>

            <CategoryForm
             onCancel={()=>navigate("/catalog")}
            />

            </div>
    )
}