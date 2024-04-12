<template>
    <div class="our_partners">
        <div class="our_partners_top">
            <p class="our_partners_top_p">НАШИ ПАРТНЕРЫ</p>
            <div class="our_partners_top_line"></div>
        </div>
        <div class="our_partners_bottom">
                <div class="our_partners_container">
                    <img src="@/assets/Logo1.png" alt="" class="our_partners_img">
                    <img src="@/assets/Logo2.png" alt="" class="our_partners_img">
                    <img src="@/assets/Logo3.png" alt="" class="our_partners_img">
                    <img src="@/assets/Logo4.png" alt="" class="our_partners_img">
                    <img src="@/assets/Logo5.png" alt="" class="our_partners_img">
                    <img src="@/assets/Logo6.png" alt="" class="our_partners_img">
                </div>
            </div>
    </div>

</template>

<script>
export default {
name: 'PartnersComponent'
}
</script>

<style lang="scss">
.our_partners {
    width: 1281px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    .our_partners_top {
        display: flex;
        align-items: center;
        margin-bottom: 34px;
        .our_partners_top_p {
            font-size: 16px;
            font-weight: bold;
        }
    .our_partners_top_line {
        width: 1082px;
        height: 1px;
        background-color: #E5E5E5;
        margin-left: 35px;
    }
}
    .our_partners_container {
        display: flex;
        justify-content: space-between;
    }
}
</style>
