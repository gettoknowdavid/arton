"use client";

import React, {createContext, useCallback, useContext, useReducer} from "react";
import {SearchAction, SearchState} from "@/lib/types/search.types";

// Initial State
const initialState: SearchState = {
    isOpen: false
};

// Reducer
function searchReducer(state: SearchState, action: SearchAction): SearchState {
    switch (action.type) {
        case "OPEN_SEARCH":
            return {...state, isOpen: true};

        case "CLOSE_SEARCH":
            return {...state, isOpen: false};

        case "TOGGLE_SEARCH":
            return {
                ...state,
                isOpen: !state.isOpen,
            };

        default:
            return state;
    }
}

// Context Type
interface SearchContextType {
    state: SearchState;
    dispatch: React.Dispatch<SearchAction>;
    // Helper functions (optional, but makes usage cleaner)
    openSearch: () => void;
    closeSearch: () => void;
    toggleSearch: () => void;
}

// Create Context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider Component
export function SearchProvider({children}: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    // Helper functions
    const openSearch = useCallback(() => {
        dispatch({type: "OPEN_SEARCH"});
    }, []);

    const closeSearch = useCallback(() => {
        dispatch({type: "CLOSE_SEARCH"});
    }, []);

    const toggleSearch = useCallback(() => {
        dispatch({type: "TOGGLE_SEARCH"});
    }, []);

    const value: SearchContextType = {
        state,
        dispatch,
        openSearch,
        closeSearch,
        toggleSearch,
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

// Hook
export function useSearch() {
    const context = useContext(SearchContext);

    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }

    return context;
}