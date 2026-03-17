"use client";

import React from "react";
import {
  initialState,
  workbookReducer,
  type WorkbookAction,
  type WorkbookState,
} from "../lib/workbookState";

const WorkbookContext = React.createContext<{
  state: WorkbookState;
  dispatch: React.Dispatch<WorkbookAction>;
} | null>(null);

export function WorkbookProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(workbookReducer, initialState);

  React.useEffect(() => {
    dispatch({ type: "hydrate" });
  }, []);

  return (
    <WorkbookContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkbookContext.Provider>
  );
}

export function useWorkbook() {
  const ctx = React.useContext(WorkbookContext);
  if (!ctx) {
    throw new Error("useWorkbook must be used within WorkbookProvider");
  }
  return ctx;
}

