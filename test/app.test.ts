import App from "~/app";
import Ticker from "~/ticker";
import Scene from "~/scene";

describe("App", () => {
  let app;
  beforeAll(() => {
    app = new App();
  });
  it("shouold have a constructor", () => {
    expect(app).toBeInstanceOf(App);
  });
  it("should have a ticker", () => {
    expect(app.ticker).toBeInstanceOf(Ticker);
  });
  it("should have the base scene", () => {
    expect(app.baseScene).toBeInstanceOf(Scene);
  });
});
