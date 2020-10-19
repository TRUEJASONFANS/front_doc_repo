import axios from 'axios';
// This custom hook centralizes and streamlines handling of HTTP calls 


export const TODO_HOST = process.env.NODE_ENV === "production" ? "http://www.zhongwei.tech/todos/api/" : "http://localhost:8081/todos/api/"

export function getTodoList() {
    return axios.get(TODO_HOST + "task").then(response => response.data);
}


export function postTodo(todo: { Name: string }) {
    return axios.post(TODO_HOST + "task", todo).then(response => response.data);
}


export function deleteTodo(id: number) {
    return axios.delete(TODO_HOST + "task/" + id).then(response => response.data);
}