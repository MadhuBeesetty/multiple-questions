import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MCQ from './Mcq';

interface EditorProps {
  isEditMode: boolean;
}

const Editor: React.FC<EditorProps> = ({ isEditMode }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editable: isEditMode,
  });

  return (
    <div>
      <EditorContent editor={editor} />
      <MCQ isEditMode={isEditMode} />
    </div>
  );
};

export default Editor;
