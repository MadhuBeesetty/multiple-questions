import React from 'react';

interface ToggleProps {
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
}

const ToggleView: React.FC<ToggleProps> = ({ isEditMode, setIsEditMode }) => {
  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        Switch to {isEditMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  );
};

export default ToggleView;
