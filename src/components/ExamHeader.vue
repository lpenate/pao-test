<template>
    <div id="exam-header">
        <h2 id="title-text">Test 20 preguntas</h2><img id="exam-icon" src="/apple-touch-icon.png" alt="exam-icon">
    </div>

</template>
<script setup>
</script>
<style scoped>
#exam-header {
    padding: 10px;
    font-family: 'KGNoRegretsSketch';
    text-transform: capitalize;
    color: #fef8f8;
    text-align: center;
    display: flex;
    font-size: 2rem;
    align-items: center;
    justify-content: space-evenly;
    height: 100px;
    width: 100vw;

}



#title-text {
    display: flex;
    font-size: calc(1em + 1vw);
}

#exam-icon {
    display: flex;
    width: 50px;
    height: 50px;
}

@media screen and (max-width: 450px) {
    #exam-header {
        padding: 10px;
        display: flex;
        font-size: 1.25rem;
    }

}
</style>
