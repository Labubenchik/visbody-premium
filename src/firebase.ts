import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9OIoERyjAdtpkwalkiCCb8nch04H2894",
  authDomain: "visbody-e955c.firebaseapp.com",
  projectId: "visbody-e955c",
  storageBucket: "visbody-e955c.firebasestorage.app",
  messagingSenderId: "797069343543",
  appId: "1:797069343543:web:5807d9824ba5087d3ab8b2",
  measurementId: "G-E1BWTPBX3Q"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);

// Инициализируем Firestore базу данных
export const db = getFirestore(app);

export const MOCK_PRODUCTS = [
  {
    id: "visbody-s30",
    name: "Visbody S30",
    price: 1200000,
    description: "Флагманская модель 3D-сканера с технологией BIA. Идеально для крупных клубов.",
    features: ["BIA анализ состава тела", "3D анализ осанки", "Динамика прогресса"],
    imageUrl: "https://via.placeholder.com/400x500/123C66/FFFFFF?text=S30",
    model3dUrl: "/models/visbody-s30.glb"
  },
  {
    id: "visbody-m60",
    name: "Visbody M60",
    price: 350000,
    description: "Медицинский 3D-сканер тела с технологией оптического сканирования и биоимпедансного анализа.",
    features: ["Оптическое сканирование 3D", "BIA (биоимпедансный анализ)", "Высокая точность"],
    imageUrl: "https://via.placeholder.com/400x500/123C66/FFFFFF?text=M60",
    model3dUrl: "/models/visbody-m60.glb"
  },
  {
    id: "r60",
    name: "Visbody R60",
    price: 1500000,
    description: "Медицинский сканер для скрининга позвоночника и биомеханики.",
    features: ["Скрининг сколиоза", "Биомеханика суставов", "Медицинская сертификация"],
    imageUrl: "https://via.placeholder.com/400x500/123C66/FFFFFF?text=R60"
  }
];

export async function fetchProducts() {
  try {
    const snapshot = await getDocs(collection(db, "scanners"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.warn("Firebase not configured, falling back to mock");
    return MOCK_PRODUCTS;
  }
}

export async function fetchProductById(id: string) {
  try {
    // We fetch all and find, or we could just fetch a single doc if we knew the doc ID.
    // If the doc ID is exactly 'id', we can do:
    // import { doc, getDoc } from "firebase/firestore";
    // const docRef = doc(db, "scanners", id);
    // const docSnap = await getDoc(docRef);
    // return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    
    // However, since we just have getDocs imported right now, for simplicity:
    const snapshot = await getDocs(collection(db, "scanners"));
    const found = snapshot.docs.find(d => d.id === id);
    if (found) return { id: found.id, ...found.data() };
    return MOCK_PRODUCTS.find(p => p.id === id);
  } catch (e) {
    return MOCK_PRODUCTS.find(p => p.id === id);
  }
}
