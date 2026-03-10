
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      // BVT/ECP TESTS
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
    });

    // ECP TESTS
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 12)).toBe('Isosceles');
      expect(classifyTriangle(20, 20, 10)).toBe('Isosceles');
    // BVT TESTS
      expect(classifyTriangle(200, 200, 195)).toBe('Isosceles');
      expect(classifyTriangle(1, 1, 1.5)).toBe('Isosceles');

    });

    // ECP TESTS
    test('should classify an Scalene triangle', () => {
      expect(classifyTriangle(23, 20, 12)).toBe('Scalene'); 
      expect(classifyTriangle(20, 40, 34)).toBe('Scalene');
      expect(classifyTriangle(13, 10, 11)).toBe('Scalene');
    
      // BVT TEST
      expect(classifyTriangle(1, 2, 2.5)).toBe('Scalene'); 
      expect(classifyTriangle(145, 122, 200)).toBe('Scalene'); 
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      // BVT TESTS
      expect(classifyTriangle(.5, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(100, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(20, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(.10, .10, .10)).toBe('Error: Input conditions C1, C2, or C3 failed.');

    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      // ECP TESTS
      expect(classifyTriangle(1, 2, 40)).toBe('Not a Triangle');
      expect(classifyTriangle(2, 2, 30)).toBe('Not a Triangle');
      // BVT TESTS
      expect(classifyTriangle(1, 1, 2)).toBe('Not a Triangle');
      expect(classifyTriangle(1, 200, 1)).toBe('Not a Triangle');
    });
  });
  
  