import React from 'react';
import Home from '../../src/pages/Home';
import {
  render,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

describe('Home page', () => {
  describe('On initial fetch', () => {
    it('It Should correctly render the app', async () => {
      const {getAllByText} = render(<Home />);

      await waitFor(() => getAllByText('$365.00'));
      const credits = getAllByText('$365.00');

      expect(credits.length).toBe(1);
    });
  });
  describe('On adding a new transaction', () => {
    it('Should correctly add a new transaction', async () => {
      const {getByText} = render(<Home />);

      //waiting for initial fetch
      await waitForElementToBeRemoved(() => getByText('loading'));

      const addCreditButton = getByText('Add $100');
      fireEvent.press(addCreditButton);

      await waitForElementToBeRemoved(() => getByText('loading'));

      const newTotalValue = getByText('$465.00');

      expect(newTotalValue).not.toBeNull();
    });

    it('Should start with the value returned by the api', async () => {
      //In our case, we mocked the initial value to equal $365.00
      const {getByText} = render(<Home />);
      const value = await waitFor(() => getByText('$365.00'));
      expect(value).toBeTruthy();
    });
  });
});
