import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import App from './App';

describe('App', () => {
 
  it('should render without errors', () => {
    const test = render(
      <App />
    );
    expect(test).toBeTruthy()
  });
});