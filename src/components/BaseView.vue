<template>
   <div class="under_header">
    <div class="under_header_inside">
    <div class="under_header_inside_top">
      <div class="under_header_inside_top">
        <h1 class="under_header_inside_top_h1">SoilCTRL - Благодатная <br> почва для Ваших <br> финансов</h1>
        <bottom class="under_header_inside_top_bottom">Подробнее</bottom>
      </div>
    </div>
    <div class="under_header_inside_bottom">
      <p class="under_header_inside_bottom_cost">100 000$   размер входа</p>
      <div class="under_header_inside_bottom_line"></div>
      <p class="under_header_inside_bottom_year">Годовая доходность 74%</p>
    </div>
    </div>
   </div>
  <div class="fund">
    <div class="fund_inside">
      <div class="fund_inside_top">
        <div class="fund_inside_top_line"></div>
        <h3 class="fund_inside_top_h3">О ФОНДЕ</h3>
      </div>
      <div class="fund_inside_bottom">
        <div class="fund_inside_bottom_left">
        <h1 class="fund_inside_bottom_left_h1">SOILCTRL - ведущий фонд по управлению <br> активами, с фокусом на инновационных <br> решениях и устойчивом развитии.</h1>
        <p class="fund_inside_bottom_left_p">Мы стремимся создать принципиально новый подход к инвестиционному управлению, <br> преодолевая границы и осуществляя глубокий анализ капиталов и рыночных возможностей.</p>
        <bottom class="fund_inside_bottom_left_button">Подробнее</bottom>
      </div>
      <div class="fund_inside_bottom_right">
        <img src="..\assets\Frame 27.png" alt="" class="fund_inside_bottom_right_img">
      </div>
      </div>
    </div>
  </div>
  <PartnersComponent></PartnersComponent>
  <div class="team">
    <div class="team_inside">
    <div class="team_inside_left">
      <h3 class="team_inside_left_h3">НАША КОМАНДА</h3>
      <h1 class="team_inside_left_h1">How we raised 34M</h1>
      <p class="team_inside_left_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Suspendisse varius enim in eros elementum tristique. Duis <br> cursus, mi quis viverra ornare, eros dolor interdum nulla, ut <br> commodo diam libero vitae erat. Aenean faucibus nibh.</p>
      <div class="team_inside_left_block">
        <div class="team_inside_left_blocks" v-for="(number, index) in team" :key="index">
          <h2 class="team_inside_left_blocks_h2">{{number.numbers}}</h2>
          <p class="team_inside_left_blocks_p">{{number.texts}}</p>
        </div>
      </div>
      <button class="team_inside_left_button">О команде</button>
    </div>
    <div class="team_inside_right">
      <img src="..\assets\Image.png" alt="" class="team_inside_right_img">
    </div>
  </div>
  </div>
  
  <div class="principles">
    <div class="principles_inside">
      <div class="principles_inside_top">
        <div class="principles_inside_top_line"></div>
        <h3 class="principles_inside_top_h3">ПРИНЦИПЫ</h3>
      </div>
      <div class="principles_inside_bottom">
        <div class="principles_inside_bottom_left">
        <h1 class="principles_inside_bottom_left_h1">Главная задача фонда, <br> это приносить доход клиентам</h1>
        <div class="principles_inside_bottom_left_block">
          <div class="principles_inside_bottom_left_blocks" v-for="(principe, index) in principlesArr" :key="index">
            <img class="principles_inside_bottom_left_blocks_img" :src='principe.principleImg'>
            <div class="principles_inside_bottom_left_blocks_inside">
            <h2 class="principles_inside_bottom_left_blocks_h2"> {{principe.principleH2}} </h2>
            <p class="principles_inside_bottom_left_blocks_p"> {{principe.principleP}} </p>
          </div>
          </div>
        </div>
      </div>
      <div class="principles_inside_bottom_right">
        <img src="..\assets\black.png" alt="" class="principles_inside_bottom_right_img">
      </div>
      </div>
    </div>
  </div>
  
  <div class="circle">
    <div class="circle_inside">
    <div class="circle_left">
      <h1 class="circle_left_h1">Направления в которых мы работаем</h1>
      <p class="circle_left_p">Мы исследуем и анализируем различные отрасли и области бизнеса, чтобы <br> выявить потенциальные возможности для инвестиций и диверсификации <br> наших портфелей.</p>
      <div class="circle_left_block">
        <div class="circle_left_blocks" v-for="(circle, index) in circleArr" :key="index">
          <img class="circle_left_blocks_h2" :src="circle.circleImg">
          <p class="circle_left_blocks_p">{{circle.circleP}}</p>
        </div>
      </div>
      <button class="circle_left_button">О команде</button>
    </div>
    <div class="circle_right">
      <img src="..\assets\circle.png" alt="" class="circle_right_img">
    </div>
</div>
  </div>
  <QuestionsComponent></QuestionsComponent>
  <NewsComponent :parameters="NewsArr" />
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import PartnersComponent from '../components/PartnersComponent'
  import  QuestionsComponent  from "../components/QuestionsComponent";
  import  NewsComponent  from "../components/NewsComponent";
  import  FooterComponent  from "../components/FooterComponent";
  const team = reactive([
    { numbers: '226M+', texts: 'Donation Received' },
    { numbers: '54%+', texts: 'Volunters' },
    { numbers: '18+', texts: 'Команда' }
  ])
  const principlesArr = reactive([
    {principleH2: 'Профессионализм', principleP: 'Наша задача не считывать возможности, а создавать их', principleImg: require('/src/assets/Icon1.svg')},
    {principleH2: 'Клиентоориентированность', principleP: 'Полностью фокусируемся на потребностях и целях наших клиентов.', principleImg: require('/src/assets/Icon2.svg')},
    {principleH2: 'Активное управление рисками', principleP: 'Мы акцентируем внимание на эффективном управлении рисками.', principleImg: require('/src/assets/Icon3.svg')},
    {principleH2: 'Результативность', principleP: 'Мы направляем все свои усилия на достижение высокой результативности в управлении активами', principleImg: require('/src/assets/Icon4.svg')}
  ])
  const circleArr = reactive([
    {circleP: '55% Фондовый рынок', circleImg: require('/src/assets/Rectangle 1311.png')},
    {circleP: '35% КриптоАктивы', circleImg: require('/src/assets/Rectangle 1312.png')},
    {circleP: '10% Другие отрасли', circleImg: require('/src/assets/Rectangle 1313.png')}
  ])
  
  const NewsArr = reactive([
    {NewsH3: 'Don’t destroy greenery and don’t spoil scenery', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail.png')},
    {NewsH3: 'Is climate change happening faster than expected?', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail2.png')},
    {NewsH3: 'Top 10 facts about wind farms you didn`t know', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail3.png')},
    {NewsH3: 'Our goal is to make water available for everyone', NewsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim', NewsImg: require('/src/assets/Thumbnail4.png')},
  ])
  </script>
  
  <style lang="scss">
  * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  .under_header {
    background: url('../assets/BG Image.png');
    height: 735px;
    background-size: cover;
  }
  .under_header_inside_top_h1 {
    color: white;
    font-size: 64px;
    padding-top: 140px;
    margin-bottom: 50px;
  }
  .under_header_inside {
    width: 1292px;
    margin-left: auto;
    margin-right: auto;
  .under_header_inside_top_bottom {
    background-color: white;
    color: black;
    padding-left: 34px;
    padding-right: 34px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 4px;
  }
  .under_header_inside_bottom {
    color: white;
    display: flex;
    align-items: center;
    margin-top: 190px;
  .under_header_inside_bottom_line {
    width: 837px;
    height: 1px;
    background-color: #E5E5E5;
    margin-left: 19px;
    margin-right: 19px;
  }
  }
  }
  .fund {
    height: 388px;
    margin-top: 77px;
  .fund_inside {
    width: 1281px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  .fund_inside_top {
    display: flex;
    align-items: center;
  .fund_inside_top_line {
    width: 72px;
    height: 2px;
    margin-right: 36px;
    background-color: #272727;
  }
  }
  }
    .fund_inside_bottom {
      display: flex;
      justify-content: space-between;
      width: 1167.94px;
      float: right;
      align-items: center;
      .fund_inside_bottom_right_img {
        height: 353px;
      }
      .fund_inside_bottom_left_p {
        margin-bottom: 46px;
        margin-top: 38px;
      }
      .fund_inside_bottom_left_button {
        background-color: black;
        color: white;
        padding-left: 34px;
        padding-right: 34px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 4px;
      }
    }
  
  }
  .team {
  margin-top: 81px;
    .team_inside {
      width: 1292px;
      height: 568px;
      background-color: black;
      color: white;
      border-radius: 4px;
      display: flex;
      margin-right: auto;
      margin-left: auto;
      .team_inside_left {
        margin-top: 59px;
        width: 50%;
        margin-left: 110px;
        .team_inside_left_h3 {
          font-size: 16pxs;
          margin-bottom: 23px;
        }
        .team_inside_left_h1 {
          font-size: 48px;
          margin-bottom: 25px;
        }
        .team_inside_left_p {
          font-size: 16px;
          opacity: 0.4;
          line-height: 160%;
          margin-bottom: 38px;
        }
        .team_inside_left_block {
          display: flex;
          .team_inside_left_blocks {
            margin-right: 35px;
          }
        }
        .team_inside_left_blocks_h2 {
          font-size: 24px;
        }
        .team_inside_left_blocks_p {
          font-size: 12px;
        }
        .team_inside_left_button {
          font-size: 16px;
          padding-left: 34px;
          padding-right: 34px;
          padding-top: 16px;
          padding-bottom: 16px;
          background-color: white;
          border-radius: 4px;
          margin-top: 40px;
        }
      }
      .team_inside_right { 
        width: 50%;
        margin-top: 59px;
        .team_inside_right_img {
          float: right;
        }
      }
    }
  }
  .principles {
    display: flex;
    margin-top: 80px;
    width: 100%;
    height: 823px;
    align-items: center;
    background-color: #FFF3EF;
  .principles_inside {
    margin-left: auto;
    margin-right: auto;
    .principles_inside_top {
      margin-bottom: 53px;
      width: 1280px;
      display: flex;
      align-items: center;
      .principles_inside_top_line {
        width: 72px;
  
        height: 2px;
        margin-right: 36px;
        background-color: #272727;
      }
  
  }
    .principles_inside_bottom {
      width: 1171px;
      display: flex;
      float: right;
      .principles_inside_bottom_left_h1 {
        font-size: 45px;
      }
      .principles_inside_bottom_left_blocks_h2 {
        font-size: 25px;
        margin-bottom: 20px;
      }
      .principles_inside_bottom_left_blocks_p {
        color: #747474;
      }
  .principles_inside_bottom_left_blocks {
    display: flex;
    align-items:start;
    margin-top: 20px;
    
    .principles_inside_bottom_left_blocks_inside {
      margin-left: 25px;
    }
  }
  .principles_inside_bottom_left_blocks_img {
    align-items:end;
  }
  }
  }
  }
  
  .circle {
    background-color: #272727;
    color: white;
    margin-bottom: 80px;
    margin-top: 80px;
    .circle_inside {
        display: flex;
        align-items: center;
        height: 548px;
        width: 1500px;
        margin-left: auto;
        margin-right: auto;
    .circle_left {
      width: 50%;
      margin-left: 110px;
      .circle_left_h1 {
        font-size: 48px;
      }
      .circle_left_p {
        margin-top: 43px;
        margin-bottom: 42px;
        line-height: 160%;
        color: #747474;
      }
    .circle_left_button {
      padding-left: 34px;
      padding-right: 34px;
      padding-top: 16px;
      padding-bottom: 16px;
      background-color: white;
      border-radius: 4px;
      margin-top: 61px;
    }
    .circle_left_block {
      display: flex; 
      .circle_left_blocks {
        display: flex;
        margin-right: 20px;
        .circle_left_blocks_h2 {
          margin-right: 10px;
        }
      }
    }
  }
  .circle_right {
    width: 50%;
    .circle_right_img {
      float: right;
      margin-right: 110px;
    }
  }
  }
}
  
  footer {
    width: 100%;
    height: 398px;
    background-color: #272727;
    color: white;
  }
  }
  </style>
  