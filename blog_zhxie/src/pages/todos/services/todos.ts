import { useState, useEffect, useRef } from "react"; 
import axios from 'axios';
// This custom hook centralizes and streamlines handling of HTTP calls 

export const TODO_HOST = "http://localhost:8081/"

export function getTodoList() {
    return axios.get(TODO_HOST + "task").then(response=> response.data);
}