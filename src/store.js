import { createStore } from 'redux';

export const store = createStore((state = {
    url: "https://cdn2.thecatapi.com/images/e11.jpg"
}, action) => {
    switch (action.type) {
        case 'UPDATE_URL':
            return { url: action.url };
        default:
            return state;
    }
});

export default store;

