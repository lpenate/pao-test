<template>
    <div class="question-container filter-chalk">
        <p> {{ index }}) {{ question.question }}</p>
        <div class="options" v-for="option in question.options" :key="option.letter">
            <input v-on:click="checkAnswer(option.letter)" type="radio" :disabled="store.examChecked"
                :name="question.question" :value="option.letter" :selected="selectedOption === option.letter"
                v-model="selectedOption" />
            <label class="letter-option">{{ option.letter }}</label>
            <b class="question-text">{{ option.text }}</b>
            <div v-show="store.examChecked" v-if="selectedOption && selectedOption === option.letter">
                <p v-if="isRightMarked === true">✅</p>
                <p v-else> ❌</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, defineProps, ref } from 'vue';
import { useQuestionsStore } from '../stores/questions';

const store = useQuestionsStore();

const props = defineProps({
    index: Number,
    question: Object,
    rightAnswer: String,
    totalRight: Number,
});

const selectedOption = ref(null);

const isRightMarked = computed(() => {
    return selectedOption.value === props.rightAnswer;
});

function checkAnswer(selectedLetter) {
    if (selectedLetter === props.rightAnswer) {
        store.markAsRight(props.question.id);
    }
}

</script>

<style>
.question-container {
    padding: 5px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    margin-bottom: 10px;
    width: 50%;
}

.filter-chalk {
    border: 1px solid #d6d8d9;
    border-radius: 300px 15px 225px 15px/15px 225px 15px 255px;

}

p {
    margin: 0;
    padding: 10px;
}

.question-text {
    margin: 0;
}

.letter-option {
    font-weight: bold;
    color: #60a1eb;
    margin-right: 8px;
    padding: 0 8px;
}

.options {
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 16px;
}

.right {
    font-style: bold;
    background-color: white;
    padding-left: 8px;
    border-color: #c3e6cb;
}

.wrong {
    font-style: right;
    padding-left: 8px;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}

@media screen and (max-width: 450px) {
    .question-container {
        border: 0px solid #d6d8d9;
        border-bottom: 1px solid #d6d8d9;
        border-top: 1px solid #d6d8d9;
        padding: 5px;
        display: flex;
        flex-direction: column;
        font-size: 0.75rem;
        width: 90%;
    }

    .filter-chalk {
        border-radius: 100px 15px 25px 15px/15px 200px 15px 255px;

    }

}
</style>
