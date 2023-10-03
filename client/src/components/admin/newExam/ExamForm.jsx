import { useState } from 'react';
import './examForm.css';

const ExamForm = ({courseId}) => {
    const [examDetails, setExamDetails] = useState({
        name: '',
        totalMarks: '',
        passMarks: '',
        time: '',
        questions: [],
    });

    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleAddQuestions = () => {
        if (question && options.length <= 2 && correctAnswer !== '') {
            setExamDetails({
                ...examDetails, 
                questions: [
                    ...examDetails.questions,
                    {
                        question,
                        options,
                        correctAnswer,
                    }
                ]
            });
        };
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn({...examDetails, question, options, correctAnswer});
        const data = {...examDetails, question, options, correctAnswer};
        fetch(`http://localhost:8500/api/exams/${courseId}`, {
          method: 'POST',
          headers: {
            'Accepted': 'application/json',
            'Content-type': 'application/json',
          }, body: JSON.stringify(data)
        }).then((res) => {
          res.json((rs) => {
            console.log('rs', rs);
          })
        })
    }

    return (
        <div className='examForm'>
            <div className='examContainer'>
              <div className='examList'>
                <form>
                   <div className='examListItem'>
                     <input
                       type='text'
                       placeholder='exam name'
                       value={examDetails.name}
                       onChange={(e) => setExamDetails({...examDetails, name: e.target.value})}
                     />
                   </div>
                   <br/>
                   <div className='examListItem'>
                        <input
                            type='number'
                            placeholder='total marks'
                            value={examDetails.totalMarks}
                            onChange={(e) => setExamDetails({...examDetails, totalMarks: e.target.value})}
                        />
                   </div>
                   <br/>
                   <div className='examListItem'>
                        <input
                            type='number'
                            placeholder='pass marks'
                            value={examDetails.passMarks}
                            onChange={(e) => setExamDetails({...examDetails, passMarks: e.target.value})}
                        />
                   </div>
                   <br/>
                   <div className='examListItem'>
                        <input
                            type='number'
                            placeholder='time (in minutes)'
                            value={examDetails.time}
                            onChange={(e) => setExamDetails({...examDetails, time: e.target.value})}
                        />
                   </div>
                   <br/>
                   <input
                     type='text'
                     placeholder='enter question'
                     value={question}
                     onChange={(e) => setQuestion(e.target.value)}
                   />
                   <br/>
                   {options.map((option, index) => (
                      <div className='questionItem' key={index}>
                        <input
                          type='text'
                          placeholder='enter option'
                          value={option}
                          onChange={(e) => {
                            const updatedOptions = [...options];
                            updatedOptions[index] = e.target.value;
                            setOptions(updatedOptions);
                          }}
                        />
                        <br/>
                        <input
                          type='radio'
                          name='correct answer'
                          onChange={(e) => setCorrectAnswer(e.target.value)}
                        />
                        <br/>
                      </div>
                   ))}
                   <button type='button' className='examButton' onClick={handleAddQuestions}>Add question</button>
                   <button type='submit' className='examButton' onClick={handleSubmit}>Create Exam</button>
                </form>
              </div>
            </div>
        </div>
    );
}

export default ExamForm;
