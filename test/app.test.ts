import App from "../src/app";

describe("App", () => {
  test("constructor", () => {
    const app = new App();
    expect(app).toBeInstanceOf(App);
  });
});
