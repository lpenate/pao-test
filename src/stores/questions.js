import { defineStore } from 'pinia'
import { reactive } from 'vue'

const keepOnly30RandomUniqueQuestions = data =>
  data.sort(() => 0.5 - Math.random()).slice(0, 30)

export const useQuestionsStore = defineStore('questions', {
  state: () => {
    return {
      questions: reactive([]),
      examChecked: false,
    }
  },

  getters: {
    getQuestions(state) {
      return state.questions
    },
    getToTalRights(state) {
      return state.questions.filter(q => q.isRight).length
    },
    getScore(state) {
      const totalQuestions = state.questions.length
      const totalRights = state.questions.filter(q => q.isRight).length
      return ((totalRights / totalQuestions) * 10).toFixed(2)
    },
    mistakesSolved(state) {
      return state.questions
        .filter(q => q.isRight === false)
        .map(q => {
          return {
            question: q.question,
            rightOption: q.options.find(o => o.letter === q.rightAnswer).text,
          }
        })
    },
  },
  actions: {
    async fetchQuestions() {
      try {
        const response = await fetch('/questions.json')
        const data = await response.json()
        console.log(data)

        this.questions.splice(
          0,
          this.questions.length,
          ...keepOnly30RandomUniqueQuestions(data),
        )

        return this.questions
      } catch (error) {
        console.error(error)
      }
    },
    updateIsRight(questionId, isRight) {
      const question = this.questions.find(q => q.id === questionId)
      if (question) {
        question.isRight = isRight
      }
    },
    markAsRight(questionId) {
      const question = this.questions.find(q => q.id === questionId)
      if (question) {
        question.isRight = true
      }
    },
    updateTotalRight() {
      return this.questions.filter(q => q.isRight).length
    },
    checkExam() {
      this.examChecked = true
    },
  },
})
