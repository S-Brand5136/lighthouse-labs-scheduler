import React, { useState } from 'react';

import Button from '../Button';
import InterviewerList from '../InterviewerList';

const Form = (props) => {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || '');

  const reset = () => {
    setInterviewer(null);
    setName('');
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  const validate = () => {
    if (name === '') {
      setError('Student name cannot be blank');
      return;
    }

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
          <Button
            disabled={!name}
            onClick={() => props.onSave(name, interviewer)}
            confirm
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
