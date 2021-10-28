import React, { useState } from 'react';
import './Mcq.css'

export default function App(props) {

	const questions = props.allqs;


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [ scoreDisplay, setScoreDisplay] = useState(false)

    const result= (ans)=>{
        props.allqs[currentQuestion].clr = "white"
        if(ans==true)
        {
            setScore(score=>score+1)
        }
        if(currentQuestion<questions.length-1)
            setCurrentQuestion(currentQuestion=>currentQuestion+1)
        else
            setScoreDisplay(prev=>!prev)
    }


	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{scoreDisplay ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {questions[currentQuestion].qno}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{/* {
                            questions[currentQuestion].answerOptions.map(answer=>{
                                return <button onClick={()=>result(answer.isCorrect)}>{answer.answerText}</button>
                            })
                        } */}

						{
							questions[currentQuestion].answerOptions.map(answer=>{
								return (
									<div>
								<input type="radio" id="ans" name="fav_language" value={answer.answerText} />
								<label for="ans">Hartik</label><br />
								</div>
								)
							})
						}
					</div>
				</>
			)}
            
		</div>
	);
}
