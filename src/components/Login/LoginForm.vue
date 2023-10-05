<template>
    <main>
        <div class="divLogin">

        <form action="#" method="post">
            <label for="user">Usuario</label>
            <input type="text">
            <label for="pwd">Contraseña</label>
            <input type="password">
        </form>

        </div>
    </main>
</template>
    
<script setup lang='ts'>
    import Navar from '../Navar/Navar.vue'
</script>
    
<style>
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        padding: 6em 3em;
        width: 200px;
        border-radius: 10px;
    }

    .divLogin{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


</style>