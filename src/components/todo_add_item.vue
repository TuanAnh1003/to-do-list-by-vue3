<template>
<form @submit.prevent="Add_item">
    <input type="text" placeholder="Add new task" v-model="title">
    <input type="submit" value="ADD">
</form>
</template>

<script>
import { ref } from 'vue';
import {v4 as uuidv4} from 'uuid';
export default {
    setup(props, context){
        const title = ref('');
        const Add_item = () => {
            const new_item = {
                id: uuidv4(),
                title: title.value,
                completed: false,
            }
            context.emit('add_todo', new_item);
        }
        return {
            title,
            Add_item
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
}
input[type = 'text']{
    font-size: 14px;
    padding: 18px;
    width: 370px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 1px;
    background-color: rgb(30, 41, 59);
    border-bottom: solid 2px rgb(0 0 0 );
    margin-top: 12px;
    margin-right: 12px;
}
input:focus{
    outline-width: 0;
}
input[type = 'submit']{
    text-align: center;
    padding: 18px;
    width: 120px;
    border-radius: 10px;
    background-color: rgb(15 23 42);
    border: none;
    font-size: 14px;
    cursor: pointer;
    margin-top: 12px;
}
.add_btn:hover{
    opacity: .8;
    background-color: rgba(15 23 42 .1);
}
</style>