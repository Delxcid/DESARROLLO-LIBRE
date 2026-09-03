import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../models/producto";

interface ProductCardProps{
    product:Product
}

export const ProductCard=({product}:ProductCardProps)=>{
return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
 
 <div className="selative">
      <img
      src={product.image}
      alt={product.name}
      className="h-32 w-full object-cover"
      />
 </div>

    <div className="p-3">
        <div className="flex item-start justify-between gap-2">
        <h3 className="text-sm font-bold text-slate-800">{product.name}</h3>
        <span className="whitespaces-nowrap text-xs font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className=" mt-2 h-10 overflow-hidden text-xs">{product.description}</p>
        <div className="mt-4 flex gap-2">
            <button className="flex flex-1 item-center justify-center gap-2 rouded bg-indigo-600 px-2 py-2 text-xs font-bold text-white hover:bg-indigo-700">
                <ShoppingCart size={14}/>
                add to cart
            </button>
            <button
            type="button"
            className="flex item-center justify-center rounded border border-slate-300 p-3 text-slate-500 hover:bg-slate-100"
            >
                <Heart size={14}/>
            </button>
        </div>
    </div>

    </article>
)
}
