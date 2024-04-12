<template>
    <div class="news">
        <div class="news_inside">
            <div class="news_inside_top">
                <h2 class="news_inside_top_text_h2">
                    Главные новости
                </h2>
                <div class="news_inside_top_line"></div>
            </div>
            <div class="news_inside_bottom">
                <div class="news_inside_bottom_block">
                    <div class="news_inside_bottom_blocks" v-for="(parameter, index) in parameters" :key="index">
                        <img class="news_inside_bottom_blocks_img" :src="parameter.NewsImg">
                        <h3 class="news_inside_bottom_blocks_h3">{{parameter.NewsH3}}</h3>
                        <p class="news_inside_bottom_blocks_p">{{parameter.NewsP}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>

    import { defineProps } from 'vue';
    defineProps({parameters: Array});
    </script>
    
    <style lang="scss">
    .news {
        margin-top: 92px;
        margin-bottom: 80px;
    .news_inside {
        width: 1282px;
        margin-left: auto;
        margin-right: auto;
        .news_inside_top_text_h2 {
            margin-bottom: 54px;
            font-size: 40px;
        }
.news_inside_bottom_block {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    .news_inside_bottom_blocks {
        width: 302px;
        height: 334px;
        .news_inside_bottom_blocks_h3 {
            font-size: 20px;
            margin-bottom: 10px;
            margin-top: 20px;
        }
        .news_inside_bottom_blocks_p {
            color: #747474;
        }
    }
}
    }
}
    </style>
    