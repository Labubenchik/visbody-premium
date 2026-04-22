import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// New Pages
import Fitness from "./pages/solutions/Fitness";
import Medical from "./pages/solutions/Medical";
import Cases from "./pages/Cases";
import Technology from "./pages/Technology";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-transparent min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-brand-accent/30">
        <CustomCursor />
        <div className="noise-overlay" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 min-h-[calc(100vh-400px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/solutions/fitness" element={<Fitness />} />
            <Route path="/solutions/medical" element={<Medical />} />
            
            <Route path="/cases" element={<Cases />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
