const projectId = "visbody-e955c"; // Из конфига

const initialModels = [
  {
    id: "visbody-m60",
    name: "Visbody M60",
    description: "Компактное умное зеркало для 3D сканирования. Идеально для бутик-студий и EMS.",
    price: 350000,
    features: ["Оптическое сканирование 3D", "Оценка симметрии осанки", "Автоматические обхваты тела"],
    imageUrl: "/images/m60.png",
    model3dUrl: "/models/visbody-m60.glb"
  },
  {
    id: "visbody-s30",
    name: "Visbody S30",
    description: "Профессиональный фитнес 3D-сканер с технологией биоимпедансного анализа (BIA).",
    price: 1200000,
    features: ["BIA (Анализ состава тела)", "3D Интеллектуальная оценка осанки", "Анализ обхватов тела"],
    imageUrl: "/images/s30.png",
    model3dUrl: "/models/visbody-s30.glb"
  },
  {
    id: "visbody-r60",
    name: "Visbody R60",
    description: "Медицинский сканер и система биомеханического анализа для остеопатов и реабилитологов.",
    price: 1800000,
    features: ["Скрининг риска сколиоза", "Биомеханический анализ опорно-двигательного", "Оценка функций суставов"],
    imageUrl: "/images/s30.png",
    model3dUrl: "/models/visbody-r60.glb"
  },
  {
    id: "visbody-r-explorer",
    name: "Visbody R-Explorer",
    description: "Новейшая модульная архитектура для высокоточного трекинга изменений спортсменов.",
    price: 1500000,
    features: ["Мультисенсорное сканирование", "Отчет в мобильное приложение", "Улучшенная эргономика"],
    imageUrl: "/images/s30.png",
    model3dUrl: "/models/visbody-r-explorer.glb"
  },
  {
    id: "visbody-s20",
    name: "Visbody S20",
    description: "Базовая модель оптического сканера для фитнес-клубов без медицинского BIA анализа.",
    price: 550000,
    features: ["Сканирование за 30 секунд", "Автоматические обхваты", "Сравнение До/После в 3D"],
    imageUrl: "https://visbody.com/wp-content/uploads/2023/10/model-s20.png",
    model3dUrl: "/models/visbody-s20.glb"
  }
];

function convertToFirestoreFormat(data) {
  const fields = {};
  for (const key in data) {
    if (key === 'id') continue; // ID пойдет в URL
    const value = data[key];
    if (typeof value === 'string') {
      fields[key] = { stringValue: value };
    } else if (typeof value === 'number') {
      fields[key] = { integerValue: value.toString() }; // Firestore API wants string for ints too sometimes, but integerValue takes string/number
    } else if (Array.isArray(value)) {
      fields[key] = { arrayValue: { values: value.map(v => ({ stringValue: v })) } };
    }
  }
  return { fields };
}

async function seed() {
  console.log("Отправка начальных данных напрямую в базу (без терминала)...");
  for (const model of initialModels) {
    const firestoreData = JSON.stringify(convertToFirestoreFormat(model));
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/scanners/${model.id}`;
    
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: firestoreData
      });
      
      if (!response.ok) {
        const err = await response.text();
        console.error(`Ошибка при добавлении ${model.name}:`, err);
      } else {
        console.log(`✅ Успешно добавлена модель: ${model.name}`);
      }
    } catch (e) {
      console.error("Сбой сети:", e);
    }
  }
}

seed();
