import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { utcConverter } from './Cards.js';

test('should return number 0-7', () => {
    const utcTest = utcConverter(1648575895);
    expect(utcTest).toBe(2);
})