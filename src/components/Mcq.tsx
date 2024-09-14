import React, { useState } from 'react';
import { submitMCQ } from '../api';

interface MCQProps {
  isEditMode: boolean;
}

const MCQ: React.FC<MCQProps> = ({ isEditMode }) => {
  const [question, setQuestion] = useState('What is 2 + 2?');
  const [choices, setChoices] = useState(['2', '3', '4', '5']);
  const [selected, setSelected] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selected !== null) {
      submitMCQ({ question, selected });
      alert('Submitted');
    }
  };

  return (
    <div>
      {isEditMode ? (
        <div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {choices.map((choice, index) => (
            <input
              key={index}
              type="text"
              value={choice}
              onChange={(e) => {
                const newChoices = [...choices];
                newChoices[index] = e.target.value;
                setChoices(newChoices);
              }}
            />
          ))}
        </div>
      ) : (
        <div>
          <p>{question}</p>
          {choices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                name="mcq"
                onChange={() => setSelected(index)}
              />
              {choice}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MCQ;
