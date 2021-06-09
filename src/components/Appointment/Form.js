import React, { useState } from 'react';

import Button from '../Button';
import InterviewerList from '../InterviewerList';

const Form = (props) => {
  const [interviewer, setInterviewer] = useState(props.interviewer);
  const [name, setName] = useState(props.name || '');

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form autoComplete='off'>
          <input
            className='appointment__create-input text--semi-bold'
            name='name'
            type='text'
            placeholder={'Enter Student Name'}
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
          <Button onClick={props.onCancel} danger>
            Cancel
          </Button>
          <Button onClick={props.onSave} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
