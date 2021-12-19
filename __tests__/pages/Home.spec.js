import React from 'react';
import App from '../../App';
import {render, waitFor } from '@testing-library/react-native';


describe('Home page', () =>{
    it('It Should correctly render the app', async () => {
        const { getAllByText} = render(<App />);

        await waitFor(() => getAllByText("$100.00"));
        const credits = getAllByText("$100.00");


        expect(credits.length).toBe(1);
    })
})