import React from 'react';
import './examination.css';
import { Link } from 'react-router-dom';

const Examination = () => {
    return (
        <div className='examination'>
            <div className='examinationContainer'>
              <span className='examInstructionTitle'>Please carefully read the instructions before proceeding towards the exam</span>
              <ul>
                <li className='examInstruction'>Close all the tabs before taking the exam.</li>
                <br/>
                <li className='examInstruction'>Correct answer will fetch you 5 marks whereas, wrong answer may lead to deduction of 1 mark. So answer carefully.</li>
                <br/>
                <li className='examInstruction'>Complete the exam within the given time. Failing to do so if the timer runs out your responses will be automatically submitted and lead you to the result page.</li>
                <br/>
              </ul>
              <span className='examTimer'>Time left: 00</span>
              <div className='examinationComponent'>
                <ol>
                  <label>Q1. </label>
                  <span className='examQuestion'>Who discovered Python?</span>
                  <ol>
                     <br/>
                     <li>Wick van Rossum  <input type='radio'/></li>
                     <br/>
                     <li>Rasmus Lerdorf  <input type='radio'/></li>
                     <br/>
                     <li>Guido van Rossum  <input type='radio'/></li>
                     <br/>           
                     <li>Niene Stom  <input type='radio'/></li>
                     <br/>           
                  </ol>
                  <br/>
                  <label>Q2. </label>
                  <span>Which type of programming does Python support?</span>
                  <ol>
                     <br/>
                     <li>object-oriented programming  <input type='radio'/></li>
                     <br/>
                     <li>structured programming  <input type='radio'/></li>
                     <br/>
                     <li>functional programming  <input type='radio'/></li>
                     <br/>         
                     <li>all of the mentioned <input type='radio'/></li>
                     <br/>          
                  </ol>
                  <br/>
                  <label>Q3. </label>
                  <span>Is Python case sensitive when dealing with identifiers?</span>
                  <ol>
                     <br/>
                     <li>no  <input type='radio' name='options' value='option 1'/></li>
                     <br/>
                     <li>yes  <input type='radio' name='options' value='option 2'/></li>
                     <br/>
                     <li>machine dependent  <input type='radio' name='options' value='option 3'/></li>
                     <br/>          
                     <li>none of the mentioned  <input type='radio' name='options' value='option 4'/></li>
                     <br/>           
                  </ol>
                  <br/>
                  <label>Q4. </label>
                  <span>Which of the following is the correct extension of the Python file?</span>
                  <ol>
                     <br/>
                     <li>.python  <input type='radio' name='options' value='option 1'/></li>
                     <br/>
                     <li>.p  <input type='radio' name='options' value='option 2'/></li>
                     <br/>
                     <li>.py  <input type='radio' name='options' value='option 3'/></li>  
                     <br/>         
                     <li>.pl  <input type='radio' name='options' value='option 4'/></li>  
                     <br/>         
                  </ol>
                  <br/>
                  <label>Q5. </label>
                  <span>Is Python code compiled or interpreted?</span>
                  <ol>
                     <br/>
                     <li>Python code is both compiled and interpreted  <input type='radio' name='options' value='option 1'/></li>
                     <br/>
                     <li>Python code is neither compiled nor interpreted  <input type='radio' name='options' value='option 2'/></li>
                     <br/>
                     <li>Python code is only compiled  <input type='radio' name='options' value='option 3'/></li>
                     <br/>           
                     <li>Python code is only interpreted  <input type='radio' name='options' value='option 4'/></li>
                     <br/>           
                  </ol>
                  <br/>
                </ol>
              </div>
              <Link to='/exams/:id/results'>
                 <button className='submitButton'>Submit</button>
              </Link>
            </div>
        </div>
    );
}

export default Examination;
