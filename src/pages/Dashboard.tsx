import type React from "react";

import { Drawer } from "../components/Drawer";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../context/useAuth";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";


export const DashboardPage: React.FC = () => {

    const {logout, user}= useAuth()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50">
            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
            <main className="min-w-0 flex-1">
                <header className="flex h-16 items-center justify-between border-b bg-white px-5">
                    <button
                        type="button"
                        onClick={() => setIsDrawerOpen(true)}
                        className="rounded-lg border p-2 text-slate-700 md:hidden"
                        aria-label="Abrir menu"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="text-xl font-semibold text-slate-800">
                        Catalogo de producto
                    </h1>

                    <button
                    type="button"
                    onClick={logout}
                    className="rounded-lg bg-red-400 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                    >
                        Cerrar Sesion
                    </button>

                </header>
                <section className="p-6">
                    <div className="mb-8">
                    <h2 className="text-3xl font-normal  font-black text-slate-900">
                        Comida lista para entregar a la puerta de tu casa
                    </h2>
                    <p className="mt-2 text-sm texte-slate-600">
                      Descubre los mejores productos para ti, {" "}
                      {user?.name}
                    </p>
                    </div>
                <div className="grid grid-cols gap-5 sm:grid-colos-2 xl:grid-cols-4">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
                </div>
                </section>
            </main>
        </div>
    );
};