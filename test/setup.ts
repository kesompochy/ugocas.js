if (typeof window === 'undefined') {
  global.window = {
    requestAnimationFrame: (callback: FrameRequestCallback): number => {
      return setTimeout(() => callback(performance.now()), 1000 / 60) as unknown as number;
    },
    cancelAnimationFrame: (handle: number): void => {
      clearTimeout(handle);
    }
  };
}
