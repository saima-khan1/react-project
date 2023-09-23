import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Platform } from '../hooks/useGames';
import  Genre  from "../Entities/Genre";

export interface GameState {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

// Define actions to update the game state
type Action =
  | { type: 'SET_GENRE'; genre: Genre | null }
  | { type: 'SET_PLATFORM'; platform: Platform | null }
  | { type: 'SET_SEARCH_TEXT'; searchText: string };

// Create the initial state
const initialState: GameState = {
  genre: null,
  platform: null,
  searchText: '',
};

// Create a reducer function to handle state updates
function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'SET_GENRE':
      return { ...state, genre: action.genre };
    case 'SET_PLATFORM':
      return { ...state, platform: action.platform };
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
}

// Create a context to provide the state and dispatch function
const GameContext = createContext<
  { state: GameState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Create a custom provider component to wrap your app
const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

// Create a custom hook to access the state and dispatch function
const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { GameProvider, useGame };