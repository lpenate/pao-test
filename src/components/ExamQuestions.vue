<template>
    <div id="exam-container">
        <div @click="handleShowToolTip" id="resumeTooltip">
            <div v-if="showToolTip" id="bulb"></div>
            <div v-else id="tooltip">
                <TooltipResume />
            </div>

        </div>
        <Question v-for="(item, index) in store.getQuestions" :key="item.id" :id="item.id" :index="index + 1"
            :question="item" :isRight="item.isRight" :right-answer="item.rightAnswer" />
        <div v-show="store.examChecked" id="scoring">
            <p>Respuestas correctas: {{ totalRight }}</p>
            <p>Nota: {{ score }}</p>
        </div>
        <div v-show="store.examChecked">
            <h3>Debes aprender:</h3>
            <div class="mistake" v-for="(mistake, index) in store.mistakesSolved" :key="index">
                <p class="mistake-question">{{ mistake.question }}</p>
                <p class="mistake-answer">{{ mistake.rightOption }}</p>
            </div>
            <div class="retry">
                <button @click="refreshPage()" class="checkButton">
                    Reintentar test
                </button>
            </div>
        </div>

        <div v-show=!store.examChecked id="footer-container">
            <button @click="store.checkExam" class="checkButton">
                Corrige el test
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import Question from './Question.vue';
import { useQuestionsStore } from '../stores/questions';
import TooltipResume from './ToolTipResume.vue';

const store = useQuestionsStore();


const totalRight = computed(() => store.getToTalRights);


const score = computed(() => store.getScore);

const refreshPage = () => {
    window.location.reload();
};

onMounted(() => {
    store.fetchQuestions();
});

import { ref } from 'vue';

const showToolTip = ref(false);
showToolTip.value = !showToolTip.value;
const handleShowToolTip = () => {
    showToolTip.value = !showToolTip.value;
};

</script>

<style scoped>
#bulb {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 80px;
    height: 80px;
    background-image: url('@/assets/bulb-off.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

#bulb:hover {
    background-image: url('@/assets/bulb-on.webp');
}

#exam-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    width: 100%;
    border-radius: 4px;
    padding: 10px;
}

#footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#scoring {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: 'KGNoRegretsSketch';
    padding: 1rem;
    margin: 1rem;
    background-color: #000000;
    color: #ffffff;
    width: 300px;
}

.checkButton:hover {
    font-size: 1.5rem;
    border-radius: 100px 15px 225px 15px/15px 225px 15px 255px;
    border: 1px dashed white;
    font-family: 'KGNoRegretsSketch';
    padding: 1rem;
    margin: 1rem;
    background-color: #f9f9f9;
    color: rgb(12, 12, 12);
    cursor: pointer;
    width: 300px;
}

.checkButton {
    font-size: 1.5rem;
    border: 5px solid white;
    border-radius: 300px 25px 225px 15px/15px 225px 15px 255px;
    font-family: 'KGNoRegretsSketch';
    padding: 1rem;
    margin: 1rem;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    width: 300px;
}

.mistake-question p {
    font-size: 0.8rem;
    font-family: 'Chalky';
}

.mistake-answer p {
    font-size: 0.8rem;
    font-family: 'Chalky';

}

.mistake {
    padding: 10px;
    background-color: #000000;
    border: 1px solid #f9f9f9;
    margin-bottom: 10px;

}

@media screen and (max-width: 450px) {
    #exam-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 0.75rem;
    }

    #scoring {
        padding: 0.5rem;
        margin: 0.5rem;
        width: 200px;
    }

    .checkButton {
        padding: 0.5rem;
        margin: 0.5rem;
        width: 200px;
    }

    #bulb {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 40px;
        height: 40px;
        background-image: url('@/assets/bulb-off.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    #bulb:touch-action {
        background-image: url('@/assets/bulb-on.webp');
    }



    .retry {
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}
</style>