import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Platform } from '../hooks/useGames';
import  Genre  from "../Entities/Genre";

export interface GameState {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

type Action =
  | { type: 'SET_GENRE'; genre: Genre | null }
  | { type: 'SET_PLATFORM'; platform: Platform | null }
  | { type: 'SET_SEARCH_TEXT'; searchText: string };


const initialState: GameState = {
  genre: null,
  platform: null,
  searchText: '',
};


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

const GameContext = createContext<
  { state: GameState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);


const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};


const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};


export { GameProvider, useGame };