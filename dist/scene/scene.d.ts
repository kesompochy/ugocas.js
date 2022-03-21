import { Stage } from 'egak.js';
import { Mixer } from 'naras.js';
import { TickingFunc } from '../ticker/ticker';
export default class Scene {
    children: Set<Scene>;
    parent: Scene | undefined;
    protected _stage: Stage;
    get stage(): Stage;
    protected _mixer: Mixer;
    get mixer(): Mixer;
    needsInfoNames: Set<string>;
    update: TickingFunc;
    needs(...name: string[]): this;
    unneeds(name: string): this;
    addChild(scene: Scene): this;
    addChildren(...scenes: Scene[]): this;
    removeChild(scene: Scene): this;
    emit(method: string): void;
}
//# sourceMappingURL=scene.d.ts.map