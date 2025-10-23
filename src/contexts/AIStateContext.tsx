"use client";
import React, { createContext, ReactNode, useContext, useReducer } from "react";

// 🧩 Types
interface Message {
  id: string;
  text: string;
  createdAt: Date;
  isUser?: boolean;
}

interface AIState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  htmlContent: string | null;
  htmlUpdateCount: number; // ✅ new counter to track changes
}

type AIAction =
  | { type: "SET_MESSAGES"; payload: Message[] }
  | { type: "DELETE_MESSAGE"; payload: string }
  | { type: "CLEAR_MESSAGES" }
  | { type: "GENERATE_START" }
  | {
      type: "GENERATE_SUCCESS";
      payload: {
        id: string;
        name: string;
        html: string;
        css: string;
        jsx: string;
        createdAt: Date;
      };
    }
  | { type: "GENERATE_ERROR"; payload: string }
  | { type: "SET_HTML_CONTENT"; payload: string };

// 🧠 Initial state
const initialState: AIState = {
  messages: [],
  isLoading: false,
  error: null,
  htmlContent: null,
  htmlUpdateCount: 0, // ✅
};

// ⚙️ Reducer
const aiReducer = (state: AIState, action: AIAction): AIState => {
    switch (action.type) {
        case "SET_MESSAGES": {
      let htmlContent = state.htmlContent;
      let htmlUpdateCount = state.htmlUpdateCount;

      for (const message of action.payload) {
        console.log(
          // "message🟢🟢🟢🟢🟢🟢 Set messages context reducer",
          action.payload,
        );
        // console.log("message.text", message.text);

        const htmlPattern =
          /```html\s*([\s\S]*?)```|<!DOCTYPE\s+html[\s\S]*?<\/html>|<html[\s\S]*?<\/html>/i;
        const htmlMatch = message.text.match(htmlPattern);

        if (htmlMatch) {
          const newHtml = (htmlMatch[1] || htmlMatch[0]).trim();

          if (newHtml !== htmlContent) {
            htmlContent = newHtml;
            htmlUpdateCount += 1; // ✅ increase whenever new HTML is found
          }
        }
      }

      return {
        ...state,
        messages: action.payload,
        htmlContent,
        htmlUpdateCount,
      };
    }

    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((msg) => msg.id !== action.payload),
      };

    case "CLEAR_MESSAGES":
      return { ...state, messages: [], htmlContent: null, htmlUpdateCount: 0 };

    case "GENERATE_START":
      return { ...state, isLoading: true, error: null };

    case "GENERATE_SUCCESS":
      return { ...state, isLoading: false, error: null };
    case "GENERATE_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// 🧩 Context
const AIContext = createContext<{
  state: AIState;
  dispatch: React.Dispatch<AIAction>;
} | null>(null);

// 🧠 Provider
export const AIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(aiReducer, initialState);
  return (
    <AIContext.Provider value={{ state, dispatch }}>
      {children}
    </AIContext.Provider>
  );
};

// 🎣 Custom hook
export const useAIState = () => {
  const context = useContext(AIContext);
  if (!context) throw new Error("useAIState must be used within an AIProvider");
  return context;
};
