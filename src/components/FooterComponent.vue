<template>
        <div class="footer_inside">
            <div class="footer_inside_top">
                <img class="footer_inside_top_text_img" src="..\assets\SOIL CTRL 11 2.png">
            </div>
            <div class="footer_inside_bottom">
                    <div class="footer_inside_bottom_first">
                        <h3 class="footer_inside_bottom_first_h3">Социальные сети</h3>
                        <div class="footer_inside_bottom_first_line"></div>
                        <div class="footer_inside_bottom_first_block">
                            <div class="footer_inside_bottom_first_blocks"><img src="..\assets\Group.png"><p class="footer_inside_bottom_first_blocks_p">Facebook</p></div>
                            <div class="footer_inside_bottom_first_blocks"><img src="..\assets\Group2.png"><p class="footer_inside_bottom_first_blocks_p">Telegram</p></div>
                            <div class="footer_inside_bottom_first_blocks"><img src="..\assets\Group3.png"><p class="footer_inside_bottom_first_blocks_p">Twitter</p></div>
                        </div>
                    </div>
                    <div class="footer_inside_bottom_second">
                        <h3 class="footer_inside_bottom_second_h3">Основное</h3>
                        <div class="footer_inside_bottom_second_line"></div>
                        <ul class="footer_inside_bottom_second_ul">
                            <li class="footer_inside_bottom_second_li">О нас</li>
                            <li class="footer_inside_bottom_second_li">Новости</li>
                            <li class="footer_inside_bottom_second_li">Контакты</li>
                        </ul>
                    </div>
                    <div class="footer_inside_bottom_third">
                        <h3 class="footer_inside_bottom_third_h3">Подписаться на обновления</h3>
                        <div class="footer_inside_bottom_third_line"></div>
                        <form action="">
                            <input type="text" class="footer_inside_bottom_third_text" placeholder="Your email">
                            <input type="button" class="footer_inside_bottom_third_button" value="Подписаться">
                        </form>
                    </div>
                </div>
        </div>
    </template>
    
    <script>
    export default {
    name: 'FooterComponent'
    }
    </script>
    
    <style lang="scss">
.footer_inside {
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 1278px;
    padding-top: 61px;
    li {
        list-style: none;
    }
input:focus {
    outline: none;
   }
.footer_inside_bottom {
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .footer_inside_bottom_first {
        width: 251px;
    .footer_inside_bottom_first_block {
        .footer_inside_bottom_first_blocks {
            display: flex;
            align-items: center;
            margin-top: 23px;
            .footer_inside_bottom_first_blocks_p {
                margin-left: 11px;
            }
        }
    }
    .footer_inside_bottom_first_line {
        height: 1px;
        width: 100%;
        background-color: #626366;
        margin-top: 31px;
        margin-bottom: 23px;
    }
    }
    .footer_inside_bottom_second {
        width: 251px;
        .footer_inside_bottom_second_ul {
            align-items: center;
            .footer_inside_bottom_second_li {
                margin-top: 34px;
        }
    }
    .footer_inside_bottom_second_line {
        height: 1px;
        width: 100%;
        background-color: #626366;
        margin-top: 31px;
        margin-bottom: 23px;
    }
}
.footer_inside_bottom_third {

    .footer_inside_bottom_third_line {
        height: 1px;
        width: 100%;
        background-color: #626366;
        margin-top: 31px;
        margin-bottom: 23px;
    }
    .footer_inside_bottom_third_text {
        padding-left: 34px;
        padding-right: 34px;
        padding-top: 16px;
        padding-bottom: 16px;
        background-color: #272727;
        border-color: #EBF0F9;
        position: relative;
        opacity: 0.3;
        border-radius: 4px;
        z-index: 0;
    }
    .footer_inside_bottom_third_button {
        padding-left: 34px;
        padding-right: 34px;
        padding-top: 18px;
        padding-bottom: 18px;
        background-color: white;
        border-radius: 4px;
        position: relative;
        border: none;
        margin-left: -10px;
        z-index: 1;
    }
}
}
}
    </style>

