import { getMonth } from '../work.js';

describe("test getMonth", () => {
    it("getMonth 1 to equal 'январь'", () => {
      const result = getMonth(1);
      expect(result).toBe('январь');
    }),
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(2);
        expect(result).toBe('февраль');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(3);
        expect(result).toBe('март');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(4);
        expect(result).toBe('апрель');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(5);
        expect(result).toBe('май');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(6);
        expect(result).toBe('июнь');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(7);
        expect(result).toBe('июль');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(8);
        expect(result).toBe('август');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(9);
        expect(result).toBe('сентябрь');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(10);
        expect(result).toBe('октябрь');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(11);
        expect(result).toBe('ноябрь');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(12);
        expect(result).toBe('декабрь');
      });
      it("multiply 1 * 1 to equal 1", () => {
        const result = getMonth(0);
        expect(result).toBe('неизвестно');
      });
  });

