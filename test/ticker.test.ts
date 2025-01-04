import Ticker from "~/ticker";

import { describe, it, beforeAll, expect, mock } from "bun:test"

describe("Ticker", () => {
  let ticker: Ticker;
  
  describe("with no options", () => {
    beforeAll(() => {
      ticker = new Ticker();
    });
    it("should have a constructor", () => {
      expect(ticker).toBeInstanceOf(Ticker);
    });
    it("should have a start method", () => {
      expect(ticker.start).toBeDefined();
    });
    it("should have a stop method", () => {
      expect(ticker.stop).toBeDefined();
    });
    it("should have FPS 60", () => {
      expect(ticker.FPS).toBe(120);
    });
    it("should have a permittedDelay", () => {
      expect(ticker.permittedDelay).toBeDefined();
    });
    it("should add a job", () => {
      const job = () => {};
      ticker.add(job);
      expect(ticker.jobs.has(job)).toBeTruthy();
    });
    it("should remove a job", () => {
      const job = () => {};
      ticker.add(job);
      ticker.remove(job);
      expect(ticker.jobs.has(job)).toBeFalsy();
    });

    describe("when started", () => {
      it("should have called callback function", () => {
        window.requestAnimationFrame = mock((callback: Function): number => {
          setTimeout(callback, 1);
          return 1;
        });
        ticker.start();
        expect(window.requestAnimationFrame).toHaveBeenCalled();
      });
    });
    describe("when stopped", () => {
      it("should have called cancelAnimationFrame", () => {
        window.cancelAnimationFrame = mock((id: number): void => void 0);
        ticker.stop();
        expect(window.cancelAnimationFrame).toHaveBeenCalled();
      });
    });
  });

  describe("with options", () => {
    let job = () => {};
    beforeAll(() => {
      ticker = new Ticker({ FPS: 120, permittedDelay: 4, jobs: [job] });
    });
    it("should have a FPS property", () => {
      expect(ticker.FPS).toBe(120);
    });
    it("should have a permittedDelay property", () => {
      expect(ticker.permittedDelay).toBe(4);
    });
    it("should have a job", () => {
      expect(ticker.jobs.has(job)).toBeTruthy();
    });
    it("should have done its job after its start", () => {
      window.requestAnimationFrame = mock((callback: Function): number => {
        setTimeout(callback, 1);
        return 1;
      });
      ticker.start();
      expect(window.requestAnimationFrame).toHaveBeenCalled();
    });
  });
});
