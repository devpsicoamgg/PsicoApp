import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Contexto no creado");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const suscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("No usuario registrado");
        setUser("");
      } else {
        setUser(currentUser);
      }
    });
    return () => suscribe();
  }, []);

  const register = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registro exitoso:", response);
    } catch (error) {
      console.error("Error al registrar:", error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso en authContext:", response);
      return response;
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, googleProvider);
      console.log("Inicio de sesión con Google exitoso:", response);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  const logout = async () => {
    try {
      const response = await signOut(auth);
      console.log("Cierre de sesión exitoso:", response);
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <authContext.Provider
      value={{ user, register, login, loginWithGoogle, logout }}
    >
      {children}
    </authContext.Provider>
  );
}
