export const submitMCQ = async (data: { question: string; selected: number }) => {
  try {
    const response = await fetch('http://localhost:5001/submit-mcq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Server Response:', result);
  } catch (error) {
    console.error('Error submitting MCQ:', error);
  }
};
