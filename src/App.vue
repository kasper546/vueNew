<template>
  <div class="header_container">
              <div class="header_button_block_inside">
                  <img src="@/assets/SOIL CTRL 1 2.png" alt="" class="message">
              </div>
              <div class="header_block">
                  <p class="header_text">
                    <RouterLink to="/"  style="text-decoration: none; color: inherit;">
                    Главная
                  </RouterLink>
                  </p>
                  <p class="header_text">Компания</p>
                  <p class="header_text">
                    <RouterLink to="/media"  style="text-decoration: none; color: inherit;">
                      <span>
                    Направления
                  </span>
                  </RouterLink>
                  </p>
                  <p class="header_text">Связаться</p>
              </div>
  </div>
  <div class="app_main">
    <RouterView/>
  </div>
</template>

<script>
export default {
name: 'HeaderComponent'
}
</script>

<style lang="scss">
body {
margin: 0;
padding: 0;

.header_container {
max-width: 1272px;
display: flex;
justify-content: space-between;
align-items: center;
height: 67px;
margin-left: auto;
margin-right: auto;

.header_text {
margin-left: 43px;
display: inline;
}
.header_text:last-child {
padding-left: 34px;
padding-right: 34px;
padding-top: 16px;
padding-bottom: 16px;
background-color: black;
color: white;
border-radius: 4px;
}
}
}
</style>
