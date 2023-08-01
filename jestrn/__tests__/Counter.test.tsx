import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';

import Counter from '../components/Counter';

// Una practica comun de la empresa es tener un describe para
// encapsular 2 describe mas, uno para el render otro para comportamiento
describe('Counter component', () => {
  beforeEach(() => {
    render(<Counter initialValue={0} />);
  });

  describe('Counter Render', () => {
    // Para la cuestion del render, la empresa tiene la practica de probar:
    // 1. correcto render
    // 2. contenido correcto
    // 3. estilos correctos
    it('should render default Counter', () => {
      const decreaseBtn = screen.getByTestId('decrease');
      const increaseBtn = screen.getByTestId('increase');
      const countText = screen.getByTestId('counter-count');

      expect(decreaseBtn).toBeTruthy();
      expect(decreaseBtn).toHaveTextContent('-');
      expect(increaseBtn).toBeTruthy();
      expect(increaseBtn).toHaveTextContent('+');
      expect(countText).toBeTruthy();
    });

    it('should render counter text', () => {
      const text = screen.getByTestId('counter-count');
      // screen.debug();
      expect(text).toHaveTextContent('0');
    });
  });

  describe('Counter Behavior', () => {
    it('should decrease the value on decrease press', () => {
      const decreaseBtn = screen.getByTestId('decrease');
      const countText = screen.getByTestId('counter-count');

      fireEvent.press(decreaseBtn);

      expect(countText).toHaveTextContent('-1');
    });

    it('should increase the value on increase press', () => {
      const countText = screen.getByTestId('counter-count');
      const increaseBtn = screen.getByTestId('increase');

      fireEvent.press(increaseBtn);

      expect(countText.children[0]).toBe('1');
    });
  });
});
