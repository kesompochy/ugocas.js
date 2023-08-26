import App from "~/app";
import Ticker from "~/ticker";
import Scene from "~/scene";

describe("App", () => {
  let app: App;
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
  it("can start the app", () => {
    expect(app.start).toBeDefined();
  });
  it("can stop the app", () => {
    expect(app.stop).toBeDefined();
  });

  describe("with options", () => {
    let app: App;
    beforeAll(() => {
      app = new App({ autoStart: true });
    });
    it("can start the app automatically", () => {
      const spy = vi.spyOn(app, "start");
      expect(spy).toHaveBeenCalled();
    });
  });
});
