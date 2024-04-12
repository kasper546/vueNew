<template>
<div class="question">
    <div class="question_inside">
        <div class="question_inside_text">
            <h2 class="question_inside_text_h2">
                Если у вас есть вопросы, <br> мы будем рады на них <br> ответить
            </h2>
            <button class="question_inside_text_button">
                Связаться
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'QuestionsComponent'
}
</script>

<style lang="scss">
.question {
    width: 100%;
    height: 415px;
    .question_inside {
        margin-left: auto;
        margin-right: auto;
        width: 1280px;
        height: 100%;
        background: url('../assets/BG.png');
        background-size: no-repeat;
        background-position: center;
        background-size: cover;
        .question_inside_text {
            padding-top: 81px;
            text-align: center;
            .question_inside_text_h2 {
                font-size: 48px;
                color: white;
            }
            .question_inside_text_button {
                font-size: 16px;
                padding-left: 34px;
                padding-right: 34px;
                padding-top: 16px;
                padding-bottom: 16px;
                border-radius: 4px;
                background-color: #D5CEA3;
                border: none;
                color: white;
                margin-top: 20px;
            }
        }
    }
}
</style>
