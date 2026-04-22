import { collection, getDocs, getDoc, doc, query } from "firebase/firestore";
import { db } from "../firebase";

export interface Scanner {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  imageUrl: string;
  model3dUrl: string;
}

export async function getScanners(): Promise<Scanner[]> {
  try {
    const q = query(collection(db, "scanners"));
    const querySnapshot = await getDocs(q);
    
    const scanners: Scanner[] = [];
    querySnapshot.forEach((document) => {
      scanners.push({ id: document.id, ...document.data() } as Scanner);
    });
    
    return scanners;
  } catch (error) {
    console.error("Error fetching scanners:", error);
    return [];
  }
}

export async function getScannerById(id: string): Promise<Scanner | null> {
  try {
    const docRef = doc(db, "scanners", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Scanner;
    }
    return null;
  } catch (error) {
    console.error("Error fetching scanner:", error);
    return null;
  }
}
