"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type TestContext = {
  showDiv: boolean;
  setShowDiv: Dispatch<SetStateAction<boolean>>;
};

export const TestContext = createContext<TestContext | null>(null);

const TestContextProvider = ({ children }: { children: ReactNode }) => {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <TestContext.Provider value={{ showDiv, setShowDiv }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
