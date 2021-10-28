import React from 'react'
import Mcq from '../components/Mcq'
import { useState, useEffect } from 'react'
import SidebarCamera from '../components/SidebarCamera'

const Mcqpage = () => {
    const questions = [
        {
            qno: 1,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
            clr: "yellow",
            isAnswered: false
        },
        {
            qno: 2,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
            clr: "yellow",
        },
        {
            qno: 3,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
            clr: "yellow",

        },
        {
            qno: 4,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
            clr: "yellow",
        },
        {
            qno: 5,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '11', isCorrect: false },
                { answerText: '41', isCorrect: false },
                { answerText: '61', isCorrect: false },
                { answerText: '71', isCorrect: true },
            ],
            clr: "yellow",
        },
        {
            qno: 6,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '12', isCorrect: false },
                { answerText: '42', isCorrect: false },
                { answerText: '62', isCorrect: false },
                { answerText: '72', isCorrect: true },
            ],
            clr: "yellow",
        },
        {
            qno: 7,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '13', isCorrect: false },
                { answerText: '43', isCorrect: false },
                { answerText: '63', isCorrect: false },
                { answerText: '73', isCorrect: true },
            ],
            clr: "yellow",
        },
        {
            qno: 8,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '14', isCorrect: false },
                { answerText: '44', isCorrect: false },
                { answerText: '64', isCorrect: false },
                { answerText: '74', isCorrect: true },
            ],
            clr: "yellow",
        },
        {
            qno: 9,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '15', isCorrect: false },
                { answerText: '45', isCorrect: false },
                { answerText: '65', isCorrect: false },
                { answerText: '75', isCorrect: true },
            ],
            clr: "yellow",
        },
        {
            qno: 10,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '16', isCorrect: false },
                { answerText: '46', isCorrect: false },
                { answerText: '66', isCorrect: false },
                { answerText: '76', isCorrect: true },
            ],
            clr: "yellow",
        },
    ];
    const [clr, setClr] = useState(["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [scoreDisplay, setScoreDisplay] = useState(false)
    const [counter, setCounter] = useState(5);


    useEffect(() => {
        setCounter(5)
        const interval = setInterval(() => {
            if (counter > 0) {
                // console.log(counter)
                setCounter((pre) => {
                    if (pre > 0) {
                        return pre - 1;
                    } else {
                        if (currentQuestion < questions.length - 1) {
                            console.log(currentQuestion)
                            timeUpMoveToNextQuestion()
                        }
                        return pre;
                    }
                })
            }

        }, 1000)

        return () => clearInterval(interval)
    }, [currentQuestion])

    const timeUpMoveToNextQuestion = () =>{
        
            setClr(clr.map((c, idx) => {
                if (idx == currentQuestion) {
    
                    c = "red"
    
                }
                return c
            }))
        

        if (currentQuestion < questions.length - 1) {
            console.log(currentQuestion)
            setCurrentQuestion(currentQuestion => currentQuestion + 1)
            setCounter(5)
        }
        else
            setScoreDisplay(prev => !prev)
    }


    // function changeCounter() {
    //     const interval = setInterval(() => {
    //         setCounter((pre) => {
    //             if (pre > 0) {
    //                 return pre - 1;
    //             } else {
    //                 if (currentQuestion < questions.length)
    //                 {   console.log(currentQuestion)
    //                     // handleNext();
    //                 }
    //                 return pre;
    //             }
    //         });
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }


    // const result = (ans) => {
    //     setClr(clr.map((c, idx) => {
    //         if (idx == currentQuestion) {
    //             c = "green"

    //         }
    //         return c
    //     }))


    //     if (ans == true) {
    //         setScore(score => score + 1)
    //     }

    //     if (currentQuestion < questions.length - 1) {
    //         setCurrentQuestion(currentQuestion => currentQuestion + 1)
    //         setCounter(5)
    //     }

    //     else
    //         setScoreDisplay(prev => !prev)
    // }

    const ansarray = [];

    const handleNext = () => {
        var marked = false;

        {
            questions[currentQuestion].answerOptions.map((ansop, idx)=>{
                    if(document.getElementById(idx).checked)
                    {
                        marked = true;
                        ansarray.push(ansop.answerText)
                    }
                }   
            )
            
        }
        if(!marked)
        {
            ansarray.push("NO")
        }

        if(marked)
        {
            setClr(clr.map((c, idx) => {
                if (idx == currentQuestion) {

                    c = "green"

                }
                return c
            }))
        }
        else
        {
            setClr(clr.map((c, idx) => {
                if (idx == currentQuestion) {
    
                    c = "red"
    
                }
                return c
            }))
        }

        if (currentQuestion < questions.length - 1) {
            console.log(currentQuestion)
            setCurrentQuestion(currentQuestion => currentQuestion + 1)
            setCounter(5)
        }
        else
            setScoreDisplay(prev => !prev)

        marked = false;
    }

    const [state, setState] = useState("")

    const handleChange= (e)=>{
        setState((prev) => e.target.value)
    }


    return (
        <div>

            <div className="split left">
                {/* <Mcq allqs={questions}/> */}

                <div className='app'>

                    {scoreDisplay ? (
                        <div className='score-section'>You scored {score} out of {questions.length}</div>
                    ) : (
                            <>
                                <div className="mcqformat">
                                    <div className='question-section'>

                                        <div className='question-count'>
                                            <span>Question {questions[currentQuestion].qno}</span>/{questions.length}
                                        </div>

                                        <p className="timer-text">{counter}</p>

                                        <div className='question-text' >{questions[currentQuestion].questionText}</div>
                                    </div>
                                    <div className='answer-section'>
                                        {/* {
                                            questions[currentQuestion].answerOptions.map(answer => {
                                                return <button onClick={() => result(answer.isCorrect)}>{answer.answerText}</button>
                                            })
                                        } */}

                                        {
                                            questions[currentQuestion].answerOptions.map((answer, idx) => {
                                                return (
                                                    <div>
                                                        <input type="radio" checked={state == answer.answerText} id={idx} name="answer_options" value={answer.answerText} onChange={handleChange}/>{answer.answerText}
                                                        <br />
                                                    </div>
                                                )
                                            })
                                        }


                                    </div>
                                </div>

                                <button type="button" class="btn btn-primary" onClick={handleNext}>Next</button>
                            </>
                        )}

                </div>


            </div>

            <div className="right split">
                {/* <SidebarCamera /> */}
                <center>
                    <font style={{ display: "block", width: "inherit", margin: "0.5rem" }}>
                        <div
                            style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "yellow",
                                display: "inline-block",
                            }}
                        ></div>{" "}
          Left to answer
        </font>
                    <font style={{ display: "block", width: "inherit", margin: "0.5rem" }}>
                        <div
                            style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "green",
                                display: "inline-block",
                            }}
                        ></div>{" "}
          visited and Answered
        </font>
                    <font style={{ display: "block", width: "inherit", margin: "0.5rem" }}>
                        <div
                            style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "red",
                                display: "inline-block",
                            }}
                        ></div>{" "}
          visted but unanswered
        </font>
                </center>





                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", alignContent: "flex-start", marginLeft: "1rem" }}>

                    {
                        questions.map((question, idx) => {
                            return (
                                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", backgroundColor: clr[idx], display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem 0.5rem 0.5rem 0.5rem", border: "3px solid black", boxShadow: "1px 3px #2b2b2b" }}>

                                    <div style={{ color: "black", fontSize: "2rem" }}>
                                        {question.qno}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Mcqpage;
