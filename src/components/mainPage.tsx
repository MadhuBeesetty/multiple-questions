import React, { useState } from 'react';
import Editor from './Editor';
import ToggleView from './ToggleView';

const MainPage: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(true);

  return (
    <div>
      <ToggleView isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      <Editor isEditMode={isEditMode} />
    </div>
  );
};

export default MainPage;
