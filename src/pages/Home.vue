<template>
  <div class="main">
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
@base-font:'Pathway Gothic One', sans-serif;

.main {
  margin-top: 135px;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 6em);
  position: fixed;
}

@media (min-width: 700px) {
  .main {
    margin-top: 2%;
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 6em);
    position: fixed;
  }
}
</style>
