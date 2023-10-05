<template>
  <div class="container">
    <ul class="navar">
      <li><router-link to="/">Home</router-link></li>
      <li>Sorteo Rapido</li>
      <li>Soy una empresa</li>
      <li><router-link to="/login">Acceder</router-link></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container{
    background-color: red;
}
.navar{
    display: flex;
    justify-content: flex-end;
    list-style: none;
}
.navar li{
    padding: 1em 4em;
    width: auto;
}
</style>
