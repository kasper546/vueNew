<template>
        <div class="header_container">
                    <div class="header_button_block_inside">
                        <img src="@/assets/SOIL CTRL 1 2.png" alt="" class="message">
                    </div>
                    <div class="header_ul">
                        <p class="header_li">Главная</p>
                        <p class="header_li">Компания</p>
                        <p class="header_li">Направления</p>
                        <p class="header_li">Связаться</p>
                    </div>
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

.header_li {
    display: inline;
 }

 .header_container {
  max-width: 1272px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 67px;
  margin-left: auto;
  margin-right: auto;

  .header_li {
    margin-left: 43px;
  }
  .header_li:last-child {
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
  