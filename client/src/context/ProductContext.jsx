import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("📦 Cargando productos desde Firestore...");
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        console.log("✅ Productos obtenidos:", productList);
        setProducts(productList);
      } catch (error) {
        console.error("❌ Error obteniendo productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);