import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MainContent } from '../../../components/Header/index';

describe('Component MainContent', () => {
  it('Should have title and description', () => {
    const { getByText } = render(<MainContent />);
    expect(getByText('Easily create or join a local nanny share with Hapu')).toBeInTheDocument();
  });
});
