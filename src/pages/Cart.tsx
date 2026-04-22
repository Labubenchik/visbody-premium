import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function Cart() {
  // Mock cart logic
  const cartItems = []; 

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-4">
         <ShoppingCart size={36} className="text-brand-accent" /> Ваша заявка
      </h1>

      {cartItems.length === 0 ? (
         <div className="glass-card rounded-3xl p-12 text-center border border-white/5 shadow-2xl">
            <div className="w-24 h-24 bg-brand-light/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Добавьте модели в корзину для запроса коммерческого предложения или расчета стоимости доставки.</p>
            <Link to="/catalog" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all">
                Перейти в каталог <ArrowRight size={18} />
            </Link>
         </div>
      ) : (
         <div>{/* Cart items map */}</div>
      )}
    </motion.div>
  );
}
