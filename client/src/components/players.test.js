import React from 'react';
import Players from './players';
import "@testing-library/jest-dom/extend-expect"
import { render } from '@testing-library/react';

test("search numbers are rendered", () => {
    const container = render(<Players />)
  
    container.getByText(/searches/i);
  }) 