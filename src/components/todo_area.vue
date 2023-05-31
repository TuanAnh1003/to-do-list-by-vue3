<template>
    <div class=".todos__container">
        <todo_add_item @add_todo="add_todo"></todo_add_item>
        <todo_item v-for="todo in todo_list" :key="todo.id" :totoProps="todo" @item_completed="item_completed" @delete_item="delete_item"></todo_item>
    </div>
</template>

<script>
import { ref } from 'vue';
import todo_item from './todo_item.vue'
import todo_add_item from './todo_add_item.vue';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
export default{
    components: {
        todo_item,
        todo_add_item,
    },
    setup (){
        const todo_list = ref([
            {
                id: uuidv4(),
                title: "aaaa",
                completed: false
            },
        ]);
        // const fetchAllTodos = async () => {
        //     try {
        //         const res = await axios.get('http://jsonplaceholder.typicode.com/todos');
        //         todo_list.value=res.data;
        //     }catch(error){
        //         console.log(error);
        //     }
        // }
        // fetchAllTodos();
        // const item_completed = id => {
        //     todo_list.value = todo_list.value.map(todo =>{
        //         if (todo.id == id) todo.completed = !todo.completed;
        //         return todo;
        //     })
        // }
        // const delete_item = async id => {
        //     try {
        //         await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
        //         todo_list.value = todo_list.value.filter(todo => todo.id != id)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // const add_todo = async new_todo => {
        //     try {
        //         const res = await axios.post('http://jsonplaceholder.typicode.com/todos', new_todo);
        //         todo_list.value.push(res.data);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        const fetchAllTodos = () => {
            localStorage.setItem('todo_list', todo_list.value);
            todo_list.value = localStorage.getItem('todo_list');
        }
        fetchAllTodos();
        const item_completed = id => {
            todo_list.value = todo_list.value.map(todo =>{
                if (todo.id == id) todo.completed = !todo.completed;
                return todo;
            })
        }
        const delete_item = async id => {
            todo_list.value = todo_list.value.filter(todo => todo.id != id)
        }
        const add_todo = async new_todo => {
            todo_list.value = todo_list.value.push(new_todo);
        }
        return {
            todo_list,
            item_completed,
            delete_item,
            add_todo
        } 
    }
}
</script>

<style scoped>
</style>