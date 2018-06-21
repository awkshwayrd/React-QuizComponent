import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  render() {
    const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length
    if (isQuizEnd) {
      return (
          <div>
            <QuizEnd />
          </div>
      )
    } else {
      return (
        <div>
          <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
        </div>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {quiz_position: 1}
  }
}

export default Quiz
