/* eslint-disable @typescript-eslint/no-explicit-any */

/* Type definitions for Velocity 1.2.2 */

declare module "velocity-animate" {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type Properties = Object;
  type Easing = string | number[];
  type ElementCallback = (elements: NodeListOf<HTMLElement>) => void;
  type ProgressCallback = (
    elements: NodeListOf<HTMLElement>,
    percentComplete: number,
    timeRemaining: number,
    timeStart: number
  ) => void;
  type EffectCall =
    | [Properties]
    | [Properties, number]
    | [Properties, EffectCallOptions]
    | [Properties, number, EffectCallOptions];

  interface EffectCallOptions {
    delay?: any;
    easing?: any;
  }

  interface CommonOptions {
    duration?: string | number;
    begin?: ElementCallback;
    complete?: ElementCallback;
    display?: string | boolean;
    delay?: number | boolean;
    mobileHA?: boolean;
    _cacheValues?: boolean;
    axis?: string;
    offset?: number;
  }

  interface Options extends CommonOptions {
    queue?: string | boolean;
    easing?: Easing;
    progress?: ProgressCallback;
    loop?: number | boolean;
  }

  interface RegisterEffectOptions {
    defaultDuration?: number;
    calls: EffectCall[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    reset?: Object;
  }

  interface RegisteredEffectOptions extends CommonOptions {
    stagger?: number;
    drag?: boolean;
    backwards?: boolean;
  }

  interface SequenceCall {
    e: HTMLElement;
    p: Properties;
    o: SequenceOptions;
  }

  interface SequenceOptions extends Options {
    sequenceQueue?: boolean;
  }

  interface VelocityStatic {
    Sequences: any;
    animate(options: {
      elements: NodeListOf<HTMLElement>;
      properties: Properties;
      options: Options;
    }): any;
    animate(
      elements: HTMLElement | NodeListOf<HTMLElement>,
      properties: Properties,
      options: Options
    ): any;
    RegisterEffect(
      name: string,
      options: RegisterEffectOptions
    ): VelocityStatic;
    RunSequence(sequence: SequenceCall[]): VelocityStatic;

    /**
     * Get a hook value. Hooks are the subvalues of multi-value CSS properties.
     * It features the same API as $.css().
     */
    hook(element: HTMLElement, cssKey: string): string;

    /**
     * Set a hook value. Hooks are the subvalues of multi-value CSS properties.
     * It features the same API as $.css().
     */
    hook(element: HTMLElement, cssKey: string, cssValue: string): void;
  }

  let instance: VelocityStatic;
  export default instance;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
