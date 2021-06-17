import React, { useState } from 'react';

import Button from '../Button';
import InterviewerList from '../InterviewerList';

const Form = (props) => {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || '');
  const [error, setError] = useState('');

  // Resets the name and interview state
  const reset = () => {
    setInterviewer(null);
    setName('');
  };

  // Cancel onClick handler, closes edit mode
  const cancel = () => {
    reset();
    props.onCancel();
  };

  // Validates user name, saves a new interview
  const validate = () => {
    if (name === '') {
      return setError('Student name cannot be blank');
    }

    setError('');
    props.onSave(name, interviewer);
  };

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form autoComplete='off' onSubmit={(event) => event.preventDefault()}>
          <input
            data-testid='student-name-input'
            className='appointment__create-input text--semi-bold'
            name='name'
            type='text'
            placeholder='Enter Student Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <section className='appointment__validation'>{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className='appointment__card-right'>
        <section className='appointment__actions'>
          <Button onClick={cancel} danger>
            Cancel
          </Button>
          <Button onClick={() => validate()} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
