// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from '@jest/globals';
import { paginate } from '../helper';

describe('paginate', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  it('should return only first page', () => {
    expect(paginate(1, 3, arr)).toEqual([1, 2, 3]);
  });

  it('should return only 3 page', () => {
    expect(paginate(3, 3, arr)).toEqual([7, 8, 9]);
  });

  it('should return only last page', () => {
    expect(paginate(1000, 3, arr)).toEqual([13]);
  });
});
