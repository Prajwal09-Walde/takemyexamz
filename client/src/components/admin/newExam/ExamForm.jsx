import { useState } from 'react';


const ExamForm = ({ courseId }) => {
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
    console.warn({ ...examDetails, question, options, correctAnswer });
    const data = { ...examDetails, question, options, correctAnswer };
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
      <div className='examContainer text-align-sm-center align-items-sm-flex-end justify-content-sm-center position-absolute' style={{ 'backgroundColor': '#3dbee9', 'height': '550px', 'maxWidth': '350px', 'padding': '30px', 'marginLeft': '950px', 'marginBottom': '300px', 'top': '225px', 'borderRadius': '10px', 'paddingBottom': '20px' }}>
        <div className='examList align-items-sm-center justify-content-sm-center text-align-sm-center'>
          <form>
            <div className='examListItem'>
              <input
                type='text'
                placeholder='exam name'
                style={{ 'border': 'none', 'outline': 'none' }}
                value={examDetails.name}
                onChange={(e) => setExamDetails({ ...examDetails, name: e.target.value })}
              />
            </div>
            <br />
            <div className='examListItem'>
              <input
                type='number'
                placeholder='total marks'
                style={{ 'border': 'none', 'outline': 'none' }}
                value={examDetails.totalMarks}
                onChange={(e) => setExamDetails({ ...examDetails, totalMarks: e.target.value })}
              />
            </div>
            <br />
            <div className='examListItem'>
              <input
                type='number'
                placeholder='pass marks'
                style={{ 'border': 'none', 'outline': 'none' }}
                value={examDetails.passMarks}
                onChange={(e) => setExamDetails({ ...examDetails, passMarks: e.target.value })}
              />
            </div>
            <br />
            <div className='examListItem'>
              <input
                type='number'
                placeholder='time (in minutes)'
                style={{ 'border': 'none', 'outline': 'none' }}
                value={examDetails.time}
                onChange={(e) => setExamDetails({ ...examDetails, time: e.target.value })}
              />
            </div>
            <br />
            <input
              type='text'
              placeholder='enter question'
              style={{ 'border': 'none', 'outline': 'none' }}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <br />
            {options.map((option, index) => (
              <div className='questionItem' key={index}>
                <input
                  type='text'
                  placeholder='enter option'
                  style={{ 'border': 'none', 'outline': 'none' }}
                  value={option}
                  onChange={(e) => {
                    const updatedOptions = [...options];
                    updatedOptions[index] = e.target.value;
                    setOptions(updatedOptions);
                  }}
                />
                <br />
                <input
                  type='radio'
                  name='correct answer'
                  style={{ 'border': 'none', 'outline': 'none' }}
                  onChange={(e) => setCorrectAnswer(e.target.value)}
                />
                <br />
              </div>
            ))}
            <button type='button' className='examButton d-block align-items-sm-center text-align-sm-center justify-content-center' onClick={handleAddQuestions} style={{ 'marginBottom': '10px', 'marginLeft': '40px' }}>Add question</button>
            <button type='submit' className='examButton d-block align-items-sm-center text-align-sm-center justify-content-center' onClick={handleSubmit} style={{ 'marginBottom': '10px', 'marginLeft': '40px' }}>Create Exam</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExamForm;
