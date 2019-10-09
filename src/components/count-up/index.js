import { CountUp } from 'countup.js';
/**
 * countup.js
 * @params - target: string | HTMLElement | HTMLInputElement - id of html element, input, svg text element, or DOM element reference where counting occurs
 * @params - endVal: [number] - the value you want to arrive at
 * @params? - [options]: CountUpOptions - optional configuration object for fine-grain control
 *
 * options: {
 *  startVal?: number; // number to start at (0)
    decimalPlaces?: number; // number of decimal places (0)
    duration?: number; // animation duration in seconds (2)
    useGrouping?: boolean; // example: 1,000 vs 1000 (true)
    useEasing?: boolean; // ease animation (true)
    smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
    smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)
    separator?: string; // grouping separator (',')
    decimal?: string; // decimal ('.')
    // easingFn: easing function for animation (easeOutExpo)
    easingFn?: (t: number, b: number, c: number, d: number) => number;
    formattingFn?: (n: number) => string; // this function formats result
    prefix?: string; // text prepended to result
    suffix?: string; // text appended to result
    numerals?: string[]; // numeral glyph substitution
 * }
 */

export default {
  name: 'CountUp',
  props: {
    value: [String, Number]
  },
  data() {
    return {
      header: 'Count',
      user: {
        firstName: 'Leborn',
        lastName: 'James'
      }
    };
  },
  mounted() {
    this._countup = new CountUp(this.$refs.count, this.value);
    this._countup.start();
  }
}
