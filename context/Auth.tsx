"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  mode: string;
  setAuth: (mode: string) => void;
  getAuth: () => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [mode, setAuth] = useState("light");

  const handleAuthChange = () => {
    if (mode) localStorage.setItem("auth", mode);
  };

  useEffect(() => {
    handleAuthChange();
  }, [mode]);

  const getAuth = () => {
    const auth = localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : mode;
    return auth || "";
  };

  return (
    <AuthContext.Provider value={{ mode, setAuth, getAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
