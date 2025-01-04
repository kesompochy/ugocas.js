interface Options {
  children?: {
    scene: Scene,
    props?: { [key: string]: () => any },
  }[];
}

export default class Scene<T extends object = {}, > {
  children: Map<Scene<any>, { [key: string]: () => any }> = new Map();

  parent: Scene<any> | undefined;

  props: Set<string> = new Set();

  constructor(options?: Options) {
    const { children } = options || {};
    if (children !== undefined ) {
      this.addChildren(...children);
    }
  }

  update(delta?: number, props?: T) {
    this.children.forEach((propsMap, scene) => {
      const data = {};
      scene.props.forEach((name: string) => {
        data[name] = propsMap[name]();
      });
      scene.update(delta, data);
    });
  }

  need(keys: string[]): this {
    keys.forEach((key) => {
      this.props.add(key);
    });
    return this;
  }

  unneed(keys: string[]): this {
    keys.forEach((key) => {
      this.props.delete(key);
    });
    return this;
  }

  addChild<C extends object>(scene: Scene<C>, props?: { [K in keyof C]: () => C[K] }): this {
    if (scene.parent == undefined) {
      if (props === undefined) {
        props = {} as { [K in keyof C]: () => C[K] };
      }
      this.children.set(scene, props);
      scene.parent = this;
    }
    return this;
  }
  addChildren(...children: {scene: Scene, props?: {[key: string]: ()=>any}}[]): this {
    for (let i = 0, len = children.length; i < len; i++) {
      this.addChild(children[i].scene, children[i].props);
    }
    return this;
  }
  removeChild(scene: Scene): this {
    this.children.delete(scene);
    scene.parent = undefined;
    return this;
  }
}
