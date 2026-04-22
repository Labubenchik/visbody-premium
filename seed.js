import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9OIoERyjAdtpkwalkiCCb8nch04H2894",
  authDomain: "visbody-e955c.firebaseapp.com",
  projectId: "visbody-e955c",
  storageBucket: "visbody-e955c.firebasestorage.app",
  messagingSenderId: "797069343543",
  appId: "1:797069343543:web:5807d9824ba5087d3ab8b2",
  measurementId: "G-E1BWTPBX3Q"
};

// Инициализация
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialModels = [
  {
    id: "visbody-m60",
    name: "Visbody M60",
    description: "Медицинский 3D-сканер тела с технологией оптического сканирования и биоимпедансного анализа.",
    price: 350000,
    features: ["Оптическое сканирование 3D", "BIA (биоимпедансный анализ)", "Высокая точность"],
    imageUrl: "https://example.com/m60.jpg",
    model3dUrl: "/models/visbody-m60.glb" // Путь к будущей реальной 3D-модели
  },
  {
    id: "visbody-s30",
    name: "Visbody S30",
    description: "Компактный фитнес 3D-сканер для спортивных залов и студий.",
    price: 250000,
    features: ["Быстрое сканирование", "Анализ осанки", "Интеграция с фитнес-приложениями"],
    imageUrl: "https://example.com/s30.jpg",
    model3dUrl: "/models/visbody-s30.glb"
  }
];

async function seedDatabase() {
  console.log("Начинаем заливку данных в Firebase...");
  
  try {
    for (const model of initialModels) {
      // Используем setDoc с указанием id документа (visbody-m60 и т.д.)
      // Это предотвратит создание дубликатов, если запустить скрипт дважды
      const modelRef = doc(db, "scanners", model.id);
      await setDoc(modelRef, model);
      console.log(`✅ Добавлена модель: ${model.name}`);
    }
    
    console.log("🎉 Все данные успешно загружены в базу!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Ошибка при загрузке данных:", error);
    process.exit(1);
  }
}

seedDatabase();
