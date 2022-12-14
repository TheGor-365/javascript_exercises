export const getTrianglePerimeter = (a, b, c) => a + b + c;

export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};


import square from './square.js';

import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2);

export default solution;
