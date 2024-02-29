import db from '../Services/Firebase/Firebase';
import { collection, getDocs } from "firebase/firestore";

const mostrarDatosConsola = async () => {
    try {
        const datosSnapshot = await getDocs(collection(db, "baterias"));
        datosSnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
};

mostrarDatosConsola();
