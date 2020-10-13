import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('ContactForm component', () => {
    it('renders', () => {
        render(<Contact />);
    });


    /*
        In the next test, use the data-testid attribute for the <h1> tag in the ContactForm component to match the text content to be "Contact me".
    */

    // Second Test
    it('matches text content', () => {
        const { asFragment } = render(<contact-form currentCategory={Contact} />)
        expect(asFragment()).toMatchSnapshot()
    });

    /*
        The last test should also use the data-testid attribute to locate the <button>, to match the text content "Submit".
        
    */
    it('renders', () => {
        const { asFragment } = render(<contact-form currentCategory={Contact} /> )
        expect(asFragment()).toMatchSnapshot()
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<contact-form currentCategory={Contact} />)
        expect(asFragment('button')).toMatchSnapshot()
    })
})