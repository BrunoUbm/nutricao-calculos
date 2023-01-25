<template>
    <div>
        <HeaderOptions />
        <div class="playlist" style="margin-top: 50px;">
            <h1 style="font-size: 50px; margin-bottom: 40px; color: rgb(78, 0, 117);">PlayList - Chitãozinho e Xororó</h1>
            <div class="youtube">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLLSE-2SG0YAh73Aiid7uHRtKenV54yBCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <a href="https://www.youtube.com/playlist?list=PLLSE-2SG0YAh73Aiid7uHRtKenV54yBCc" target="blank"><img style="width: 30vh" src="../assets/youtube.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderOptions from '../components/partials/HeaderOptions.vue'

export default {
    components: {
        HeaderOptions
    }
}
</script>

<style scoped>
iframe{
    width: 80vh;
    margin: 0 auto;
}
.youtube{
    display: flex;
    flex-direction: column;
}
img{
    margin-top: 100px;
}


img:hover{
    transform: scale(1.12);
    transition: .3s;
}

</style>