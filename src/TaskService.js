import store from './store';

export const TaskService = async (taskData) => {
    fetch(taskData.url).then(response => response.json()).then(json => {
        const [{ url }] = json;
        store.dispatch({ type: 'UPDATE_URL', url });
    } )
};

export default TaskService;