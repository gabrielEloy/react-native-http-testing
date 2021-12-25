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
  describe('On adding a new transactions', () => {
    it('Should correctly add a new credit transaction', async () => {
      const {getByText} = render(<Home />);

      //waiting for initial fetch
      await waitForElementToBeRemoved(() => getByText('loading'));

      const addCreditButton = getByText('Add $100');
      fireEvent.press(addCreditButton);

      await waitForElementToBeRemoved(() => getByText('loading'));

      const newTotalValue = getByText('$465.00');

      expect(newTotalValue).not.toBeNull();
    });
    it('Should correctly add a new debit transaction', async () => {
      const {getByText} = render(<Home />);

      //waiting for initial fetch
      await waitForElementToBeRemoved(() => getByText('loading'));

      const addCreditButton = getByText('Remove $100');
      fireEvent.press(addCreditButton);

      await waitForElementToBeRemoved(() => getByText('loading'));

      const newTotalValue = getByText('$265.00');

      expect(newTotalValue).not.toBeNull();
    });

    it('Should start with the value returned by the api', async () => {
      //In our case, we mocked the initial value to equal $365.00
      const {getByText} = render(<Home />);
      const value = await waitFor(() => getByText('$365.00'));
      expect(value).toBeTruthy();
    });
  });
  describe('When removing values', () => {
    it('Should be able to remove a credit and update the total value accordingly', async () => {
      const {getByText} = render(<Home />);

      //waiting for initial fetch
      await waitForElementToBeRemoved(() => getByText('loading'));

      const removeCreditButton = getByText('X');
      fireEvent.press(removeCreditButton);

      await waitForElementToBeRemoved(() => getByText('loading'));

      const newTotalValue = getByText('$0.00');

      expect(newTotalValue).not.toBeNull();
    });
  });
});
