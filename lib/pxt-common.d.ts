type Action = () => void;
/**
 * Constant representing Not-A-Number.
 */
declare const NaN: number;
/**
 * Constant representing positive infinity.
 */
declare const Infinity: number;
declare function isNaN(x: number): boolean;
declare namespace Number {
    /**
     * Check if a given value is of type Number and it is a NaN.
     */
    function isNaN(x: any): boolean;
}
/**
 * A dictionary from string key to string values
 */
interface StringMap {
    [index: string]: string;
}
/**
  * Convert a string to an integer.
  * @param text A string to convert into an integral number. eg: "123"
  * @param radix optional A value between 2 and 36 that specifies the base of the number in text.
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
declare function parseInt(text: string, radix?: number): number;
declare namespace helpers {
    function arrayFill<T>(O: T[], value: T, start?: number, end?: number): T[];
    function arraySplice<T>(arr: T[], start: number, len: number): void;
    function arrayReverse<T>(arr: T[]): void;
    function arrayShift<T>(arr: T[]): T;
    function arrayJoin<T>(arr: T[], sep?: string): string;
    function arrayUnshift<T>(arr: T[], value: T): number;
    function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[];
    function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[];
    function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean;
    function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean;
    function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void;
    function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[];
    function arrayFind<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T;
    function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;
    function arrayConcat<T>(arr: T[], otherArr: T[]): T[];
    function arrayPickRandom<T>(arr: T[]): T;
    function arraySlice<T>(arr: T[], start?: number, end?: number): T[];
    function stringReplace(s: string, toReplace: string, replacer: string | ((sub: string) => string)): string;
    function stringReplaceAll(s: string, toReplace: string, replacer: string | ((sub: string) => string)): string;
    function stringSubstr(s: string, start: number, length?: number): string;
    function stringSlice(s: string, start: number, end?: number): string;
    function stringToUpperCase(s: string): string;
    function stringToLowerCase(s: string): string;
    function stringSplit(S: string, separator?: string, limit?: number): string[];
    function stringTrim(s: string): string;
    function isWhitespace(c: number): boolean;
    function stringEmpty(S: string): boolean;
}
declare namespace Math {
    function clamp(min: number, max: number, value: number): number;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    function abs(x: number): number;
    /**
      * Returns the sign of the x, indicating whether x is positive, negative or zero.
      * @param x The numeric expression to test
      */
    function sign(x: number): number;
    /**
      * Returns the larger of two supplied numeric expressions.
      */
    function max(a: number, b: number): number;
    /**
      * Returns the smaller of two supplied numeric expressions.
      */
    function min(a: number, b: number): number;
    /**
     * Rounds ``x`` to a number with the given number of ``digits``
     * @param x the number to round
     * @param digits the number of resulting digits
     */
    function roundWithPrecision(x: number, digits: number): number;
}
declare namespace __internal {
    /**
     * A shim to render a boolean as a down/up toggle
     */
    function __downUp(down: boolean): boolean;
    /**
     * A shim to render a boolean as a up/down toggle
     */
    function __upDown(up: boolean): boolean;
    /**
     * A shim to render a boolean as a high/low toggle
     */
    function __highLow(high: boolean): boolean;
    /**
     * A shim to render a boolean as a on/off toggle
     */
    function __onOff(on: boolean): boolean;
    /**
     * A shim to render a boolean as a yes/no toggle
     */
    function __yesNo(yes: boolean): boolean;
    /**
     * A shim to render a boolean as a win/lose toggle
     */
    function __winLose(win: boolean): boolean;
    /**
     * Get the color wheel field editor
     * @param color color
     */
    function __colorNumberPicker(value: number): number;
    /**
     * Get the color wheel field editor
     * @param value value between 0 to 255 to get a color value, eg: 10
     */
    function __colorWheelPicker(value: number): number;
    /**
    * Get the color wheel field editor using HSV values
    * @param value value between 0 to 255 to get a color value, eg: 10
    */
    function __colorWheelHsvPicker(value: number): number;
    /**
     * A speed picker
     * @param speed the speed, eg: 50
     */
    function __speedPicker(speed: number): number;
    /**
     * A turn ratio picker
     * @param turnratio the turn ratio, eg: 0
     */
    function __turnRatioPicker(turnratio: number): number;
    /**
     * A field editor that displays a protractor
     */
    function __protractor(angle: number): number;
    /**
      * Get the time field editor
      * @param ms time duration in milliseconds, eg: 500, 1000
      */
    function __timePicker(ms: number): number;
}
