import type React from "react";
import { useAuth } from "../context/useAuth";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, UserRound } from "lucide-react";
import { Drawer } from "./Drawer";

export const MainLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
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
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-semibold text-slate-800">
                Fast Delivery
            </h1>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold text-slate-00 hover:bg-slate-100"
              >
                <UserRound size={17} />
                <span>{user?.name ?? "Mi perfil"}</span>
              </button>
              <button
                type="button"
                onClick={logout}
                className="rounded-lg bg-red-400 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Cerrar Sesion
              </button>
            </div>
          </header>

            <div className="flex-1 p-6">
                <Outlet />
            </div>

        </main>
      </div>
    </div>
  );
};
