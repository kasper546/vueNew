<template>
       <NewsComponent :parameters="NewsArr" />
       <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </template>
    
    <script setup>
import  NewsComponent  from "../components/NewsComponent";
import  FooterComponent  from "../components/FooterComponent";
import {reactive  } from "vue";
const NewsArr = reactive([
    {NewsH3: 'Don’t destroy greenery and don’t spoil scenery', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail.png')},
    {NewsH3: 'Is climate change happening faster than expected?', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail2.png')},
    {NewsH3: 'Top 10 facts about wind farms you didn`t know', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail3.png')},
    {NewsH3: 'Our goal is to make water available for everyone', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail4.png')},

    {NewsH3: 'Don’t destroy greenery and don’t spoil scenery', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail.png')},
    {NewsH3: 'Is climate change happening faster than expected?', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail2.png')},
    {NewsH3: 'Top 10 facts about wind farms you didn`t know', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail3.png')},
    {NewsH3: 'Our goal is to make water available for everyone', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail4.png')},

    {NewsH3: 'Don’t destroy greenery and don’t spoil scenery', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail.png')},
    {NewsH3: 'Is climate change happening faster than expected?', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail2.png')},
    {NewsH3: 'Top 10 facts about wind farms you didn`t know', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail3.png')},
    {NewsH3: 'Our goal is to make water available for everyone', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail4.png')},
  ])
    </script>
    
    <style>
    
    </style>
    