import { Cake, Coffee, LayoutGrid, Pizza, Salad } from "lucide-react"

interface DrawerProps{
    isOpen: boolean
    onClose:()=>void
}

const menuItems = [
    {label:"All categorias", icon: LayoutGrid},
    {label:"Fast Food", icon:Pizza},
    {label:"Healty", icon:Salad},
    {label:"Desserts",icon:Cake},
    {label:"Beverages",icon:Coffee}
]

export const Drawer:React.FC<DrawerProps>=({
    isOpen,
    onClose
})=>{
    return(
        <>
            {isOpen &&(
                <button
                type="button"
                aria-label="cerrar menu"
                onClick={onClose}
                className="fixed inset-0 z-30 bg-slate-900 md:hidden"
                />
            )}

            <aside
                className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white transition-transform duration-300 md:static md:z-auto md:block md:translate-x-0 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
                    <div>
                        <p className="text-xs font-semibold text-slate-400">Delivery</p>
                        <h2 className="text-lg font-bold text-slate-800">Categorias</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100 md:hidden"
                    >
                        x
                    </button>
                </div>

                <nav className="p-4">
                    <p className="mb-3 text-xs font-bold uppercase text-slate-400">Filters</p>
                    <ul className="list-none space-y-2 pl-0">
                        {menuItems.map((item, index) => {
                            const Icon= item.icon
                            return(
                                <li key={item.label}>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-slate-100 ${
                                        index === 0 ? "bg-cyan-100 font-semibold text-cyan-700" : "text-slate-600"
                                    }`}
                                >
                                    <Icon size={18}/>
                                    {item.label}
                                  
                                </button>
                            </li>
                            )
                            
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    )
}