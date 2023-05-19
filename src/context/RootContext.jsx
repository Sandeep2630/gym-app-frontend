import React, { Children, createContext, useContext, useState } from "react";

export const Context = createContext(null);

export default function RootContext({ children }) {
  const [color, setColor] = useState("red");
  return (
    <Context.Provider value={{ color, setColor }}>{children}</Context.Provider>
  );
}
