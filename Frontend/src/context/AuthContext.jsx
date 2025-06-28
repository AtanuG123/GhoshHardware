import React, { createContext, useContext, useState,useEffect } from "react";
import axios from "axios";
const AuthContext = createContext(undefined);



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
useEffect(() => {
    const savedUser = localStorage.getItem('fishery_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('fishery_user');
      }
    }
  }, []);

  // Save user to localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('fishery_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fishery_user');
    }
  }, [user]);


  const login = async (Email, Password) => {
    try {
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_PORT}/login`, {
        Email,
        Password,
      });
      if (result.data !== "false") {
        localStorage.setItem('fishery_user', JSON.stringify(result.data));
        setUser(result.data);
        return true;
      }
      return false;
    } 
    
    catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (formData) => {
  try {
    const result = await axios.post(`${import.meta.env.VITE_BACKEND_PORT}/register`, formData);
    if (result.data !== false) {
      localStorage.setItem('fishery_user', JSON.stringify(result.data));
      setUser(result.data);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
