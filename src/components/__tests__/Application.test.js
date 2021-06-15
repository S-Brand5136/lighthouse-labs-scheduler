import React from 'react';

import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from '@testing-library/react';

import Application from 'components/Application';

afterEach(cleanup);

it('defaults to Monday and changes the schedule when a new day is slected', async () => {
  const { getByText } = render(<Application />);

  await waitForElement(() => getByText('Monday'));

  const day = getByText('Tuesday');

  fireEvent.click(day);

  expect(getByText('Leopold Silvers')).toBeInTheDocument();
});
