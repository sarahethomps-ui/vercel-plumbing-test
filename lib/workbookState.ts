import { clearAnswers, loadAnswers, saveAnswers, type StoredAnswers } from "./storage";

export type WorkbookState = {
  answers: StoredAnswers;
};

export type WorkbookAction =
  | { type: "hydrate" }
  | { type: "setAnswer"; fieldId: string; value: string }
  | { type: "reset" };

export const initialState: WorkbookState = {
  answers: {},
};

export function workbookReducer(
  state: WorkbookState,
  action: WorkbookAction,
): WorkbookState {
  switch (action.type) {
    case "hydrate": {
      return { answers: loadAnswers() };
    }
    case "setAnswer": {
      const next = {
        ...state.answers,
        [action.fieldId]: action.value,
      };
      saveAnswers(next);
      return { answers: next };
    }
    case "reset": {
      clearAnswers();
      return { answers: {} };
    }
    default: {
      return state;
    }
  }
}

