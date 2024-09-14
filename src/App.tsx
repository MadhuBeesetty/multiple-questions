import React, { useState } from 'react';
import Editor from './components/Editor';
import ToggleView from './components/ToggleView';

const App: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(true);

  return (
    <div>
      <ToggleView isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      <Editor isEditMode={isEditMode} />
    </div>
  );
};

export default App;
