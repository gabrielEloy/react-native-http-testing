import React from 'react';
import Home from '../../src/pages/Home';
import {render, waitFor} from '@testing-library/react-native';

describe('Home page', () => {
  it('It Should correctly render the app', async () => {
    const {getAllByText} = render(<Home />);

    await waitFor(() => getAllByText('$365.00'));
    const credits = getAllByText('$365.00');

    expect(credits.length).toBe(1);
  });
});
