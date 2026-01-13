export interface SearchState {
    isOpen: boolean;
}

export type SearchAction = | { type: 'OPEN_SEARCH' } | { type: 'CLOSE_SEARCH' } | { type: 'TOGGLE_SEARCH' };