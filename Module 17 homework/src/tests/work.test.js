import { getMonth } from '../work.js';

describe("test getMonth", () => {
    it("getMonth 1 to equal 'январь'", () => {
      const result = getMonth(1);
      expect(result).toBe('январь');
    }),
      it("getMonth 2 to equal 'февраль'", () => {
        const result = getMonth(2);
        expect(result).toBe('февраль');
      });
      it("getMonth 3 to equal 'март'", () => {
        const result = getMonth(3);
        expect(result).toBe('март');
      });
      it("getMonth 4 to equal 'апрель'", () => {
        const result = getMonth(4);
        expect(result).toBe('апрель');
      });
      it("getMonth 5 to equal 'май'", () => {
        const result = getMonth(5);
        expect(result).toBe('май');
      });
      it("getMonth 6 to equal 'июнь'", () => {
        const result = getMonth(6);
        expect(result).toBe('июнь');
      });
      it("getMonth 7 to equal 'июль'", () => {
        const result = getMonth(7);
        expect(result).toBe('июль');
      });
      it("getMonth 8 to equal 'август'", () => {
        const result = getMonth(8);
        expect(result).toBe('август');
      });
      it("getMonth 9 to equal 'сентябрь'", () => {
        const result = getMonth(9);
        expect(result).toBe('сентябрь');
      });
      it("getMonth 10 to equal 'октябрь'", () => {
        const result = getMonth(10);
        expect(result).toBe('октябрь');
      });
      it("getMonth 11 to equal 'ноябрь'", () => {
        const result = getMonth(11);
        expect(result).toBe('ноябрь');
      });
      it("getMonth 12 to equal 'декабрь'", () => {
        const result = getMonth(12);
        expect(result).toBe('декабрь');
      });
      it("getMonth  to equal 'неизвестно'", () => {
        const result = getMonth(0) || getMonth(string) || getMonth(15-100);
        expect(result).toBe('неизвестно');
      });
  });


  describe("test getMonth", () => {
    it('getMonth length', () => {
      const result = [getMonth(1), getMonth(2), getMonth(3), getMonth(4), getMonth(5), getMonth(6), getMonth(7), getMonth(8), getMonth(9), getMonth(10), getMonth(11), getMonth(12)];
        expect(result.length).toBe(12);
    })
  })

