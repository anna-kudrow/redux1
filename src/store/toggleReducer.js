const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => ({type: TOGGLE_THEME });

const initialState = {
    theme: 'light',
}

export const toggleThemeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_THEME: 
            return{...state, theme: state.theme === 'light' ? 'dark' : 'light'};
        default: 
            return state;
    }
}