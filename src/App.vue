<template>
  <div class="main" id="app">
    <todo_header></todo_header>
    <todo_area></todo_area>
  </div>
</template>

<script>
import todo_area from './components/todo_area.vue'
import todo_header from './components/todo_header.vue'

export default{
  name: 'App',
  components: {
    todo_area,
    todo_header,
  },
  setup(){
    document.body.classList.add('body_class')
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
<style>
*{
  font-family: 'Montserrat', sans-serif;
  color: rgb(211, 211, 211);
}
#app{
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.body_class{
  background-color: rgb(30, 41, 59);
}
</style>