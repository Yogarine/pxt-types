/// <reference no-default-lib="true"/>
declare namespace pins {
    function sizeOf(format: NumberFormat): 1 | 2 | 4 | 8 | 0;
    function createBufferFromArray(bytes: number[]): Buffer;
    function packedSize(format: string): number;
    function packBuffer(format: string, nums: number[]): Buffer;
    function packIntoBuffer(format: string, buf: Buffer, offset: number, nums: number[]): void;
    function unpackBuffer(format: string, buf: Buffer, offset?: number): number[];
    function concatBuffers(bufs: Buffer[]): Buffer;
}
declare namespace msgpack {
    /**
     * Unpacks a buffer into a number array.
     */
    function unpackNumberArray(buf: Buffer, offset?: number): number[];
    /**
     * Pack a number array into a buffer.
     * @param nums the numbers to be packed
     */
    function packNumberArray(nums: number[]): Buffer;
}
declare namespace helpers {
    function bufferConcat(a: Buffer, b: Buffer): Buffer;
    function bufferEquals(l: Buffer, r: Buffer): boolean;
    function bufferIndexOf(a: Buffer, b: Buffer): number;
    function bufferUnpack(buf: Buffer, format: string, offset?: number): number[];
    function bufferPackAt(buf: Buffer, offset: number, format: string, nums: number[]): void;
    function bufferChunked(buf: Buffer, maxBytes: number): Buffer[];
    function bufferToArray(buf: Buffer, format: NumberFormat): number[];
    const _b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function bufferToBase64(buf: Buffer): string;
}
interface Buffer {
    [index: number]: number;
    /**
     * Return concatenation of current buffer and the given buffer
     */
    concat(other: Buffer): Buffer;
    /**
     * Return position of other buffer in current buffer
     */
    indexOf(other: Buffer): number;
    /**
     * Reads numbers from the buffer according to the format
     */
    unpack(format: string, offset?: number): number[];
    /**
     * Writes numbers to the buffer according to the format
     */
    packAt(offset: number, format: string, nums: number[]): void;
    /**
     * Returns true if this and the other buffer hold the same data
     */
    equals(other: Buffer): boolean;
    /**
     * Splits buffer into parts no larger than specified
     */
    chunked(maxSize: number): Buffer[];
    /**
     * Read contents of buffer as an array in specified format
     */
    toArray(format: NumberFormat): number[];
    /**
     * Convert buffer to ASCII base64 encoding.
     */
    toBase64(): string;
}
declare namespace Buffer {
    /**
     * Allocate a new buffer.
     * @param size number of bytes in the buffer
     */
    function create(size: number): Buffer;
    /**
     * Create a new buffer, decoding a hex string
     */
    function fromHex(hex: string): Buffer;
    /**
     * Create a new buffer, decoding a Base64 string
     */
    function fromBase64(b64: string): Buffer;
    /**
     * Create a new buffer from an UTF8-encoded string
     * @param str the string to put in the buffer
     */
    function fromUTF8(str: string): Buffer;
    function chunkedFromUTF8(str: string, maxBytes: number): Buffer[];
    /**
     * Create a new buffer initialized to bytes from given array.
     * @param bytes data to initialize with
     */
    function fromArray(bytes: number[]): Buffer;
    /**
     * Concatenates all buffers in the list
     */
    function concat(buffers: Buffer[]): Buffer;
    function packedSize(format: string): number;
    function pack(format: string, nums: number[]): Buffer;
    function __packUnpackCore(format: string, nums: number[], buf: Buffer, isPack: boolean, off?: number): number;
    /**
     * Get the size in bytes of specified number format.
     */
    function sizeOfNumberFormat(format: NumberFormat): 1 | 2 | 4 | 8 | 0;
}
declare enum ConsolePriority {
    None = -1,
    Debug = 0,
    Log = 1,
    Warning = 2,
    Error = 3,
    Silent = 4
}
/**
 * Reading and writing data to the console output.
 */
declare namespace console {
    /**
     * Minimum priority to send messages to listeners
     */
    let minPriority: ConsolePriority;
    function add(priority: ConsolePriority, message: any): void;
    function debug(text: any): void;
    function warn(text: any): void;
    function error(text: any): void;
    /**
     * Write a line of text to the console output.
     * @param value to send
     */
    function log(value: any): void;
    /**
     * Write a name:value pair as a line of text to the console output.
     * @param name name of the value stream, eg: "x"
     * @param value to write
     */
    function logValue(name: any, value: any): void;
    /**
     * Convert any object or value to a string representation
     * @param obj value to be converted to a string
     * @param maxElements [optional] max number values in an object to include in output
     */
    function inspect(obj: any, maxElements?: number): string;
    /**
     * Adds a listener for the log messages
     * @param listener
     */
    function addListener(listener: (priority: ConsolePriority, text: string) => void): void;
    /**
     * Removes a listener
     * @param listener
     */
    function removeListener(listener: (priority: ConsolePriority, text: string) => void): void;
}
/**
* Program controls and events.
*/
declare namespace control {
    /**
     * Deprecated, use ``control.runInParallel`` instead.
     */
    function runInBackground(a: () => void): void;
    const enum PXT_PANIC {
        CODAL_OOM = 20,
        GC_OOM = 21,
        GC_TOO_BIG_ALLOCATION = 22,
        CODAL_HEAP_ERROR = 30,
        CODAL_NULL_DEREFERENCE = 40,
        CODAL_USB_ERROR = 50,
        CODAL_HARDWARE_CONFIGURATION_ERROR = 90,
        INVALID_BINARY_HEADER = 901,
        OUT_OF_BOUNDS = 902,
        REF_DELETED = 903,
        SIZE = 904,
        INVALID_VTABLE = 905,
        INTERNAL_ERROR = 906,
        NO_SUCH_CONFIG = 907,
        NO_SUCH_PIN = 908,
        INVALID_ARGUMENT = 909,
        MEMORY_LIMIT_EXCEEDED = 910,
        SCREEN_ERROR = 911,
        MISSING_PROPERTY = 912,
        INVALID_IMAGE = 913,
        CALLED_FROM_ISR = 914,
        HEAP_DUMPED = 915,
        STACK_OVERFLOW = 916,
        BLOCKING_TO_STRING = 917,
        VM_ERROR = 918,
        SETTINGS_CLEARED = 920,
        SETTINGS_OVERLOAD = 921,
        SETTINGS_SECRET_MISSING = 922,
        DELETE_ON_CLASS = 923,
        CAST_FIRST = 980,
        CAST_FROM_UNDEFINED = 980,
        CAST_FROM_BOOLEAN = 981,
        CAST_FROM_NUMBER = 982,
        CAST_FROM_STRING = 983,
        CAST_FROM_OBJECT = 984,
        CAST_FROM_FUNCTION = 985,
        CAST_FROM_NULL = 989,
        UNHANDLED_EXCEPTION = 999
    }
    /**
     * Display an error code and stop the program.
     * @param code an error number to display. eg: 5
     */
    function panic(code: number): void;
    /**
     * Display an error code and stop the program when the assertion is `false`.
     */
    function assert(cond: boolean, code: number): void;
    function fail(message: string): void;
    function allocateEventSource(): number;
    class AnimationQueue {
        running: boolean;
        eventID: number;
        interval: number;
        constructor();
        /**
         * Runs 'render' in a loop until it returns false or the 'stop' function is called
         */
        runUntilDone(render: () => boolean): void;
        isCancelled(evid: number): boolean;
        /**
         * Cancels the current running animation and clears the queue
         */
        cancel(): void;
    }
    function getConfigValue(key: int32, defl: int32): number;
    function programHash(): number;
    function programName(): string;
    /** Returns estimated size of memory in bytes. */
    function ramSize(): number;
    /** Runs the function and returns run time in microseconds. */
    function benchmark(f: () => void): number;
}
/**
 * Convert any value to text
 * @param value value to be converted to text
 */
declare function convertToText(value: any): string;
declare namespace control.simmessages {
    const CONTROL_MESSAGE_EVT_ID = 2999;
    const CONTROL_MESSAGE_RECEIVED = 1;
    function send(channel: string, message: Buffer, parentOnly?: boolean): void;
    /**
     * Registers the handler for a message on a given channel
     **/
    function onReceived(channel: string, handler: (msg: Buffer) => void): void;
}
declare namespace control {
    /**
     * Run code when a registered event happens.
     * @param id the event compoent id
     * @param value the event value to match
     */
    function onEvent(src: number, value: number, handler: () => void, flags?: number): void;
    class FrameCallback {
        order: number;
        handler: () => void;
    }
    class EventContext {
        private handlers;
        private frameCallbacks;
        private frameWorker;
        private framesInSample;
        private timeInSample;
        private lastPerfDump;
        deltaTimeMillis: number;
        private prevTimeMillis;
        private idleCallbacks;
        static lastStats: string;
        static onStats: (stats: string) => void;
        constructor();
        get deltaTime(): number;
        private runCallbacks;
        private runningCallbacks;
        private registerFrameCallbacks;
        register(): void;
        unregister(): void;
        registerFrameHandler(order: number, handler: () => void): FrameCallback;
        unregisterFrameHandler(fn: FrameCallback): void;
        registerHandler(src: number, value: number, handler: () => void, flags: number): void;
        addIdleHandler(handler: () => void): void;
        removeIdleHandler(handler: () => void): void;
        private runIdleHandler;
    }
    /**
     * Gets the current event context if any
     */
    function eventContext(): EventContext;
    /**
     * Pushes a new event context and clears all handlers
     */
    function pushEventContext(): EventContext;
    /**
     * Pops the current event context and restore handlers if any previous context
     */
    function popEventContext(): void;
    /**
     * Registers a function to run when the device is idling
     * @param handler
    */
    function onIdle(handler: () => void): void;
    function removeIdleHandler(handler: () => void): void;
}
interface Fx8 {
    _dummyFx8: string;
}
declare function Fx8(v: number): Fx8;
declare namespace Fx {
    const zeroFx8: Fx8;
    const oneHalfFx8: Fx8;
    const oneFx8: Fx8;
    const twoFx8: Fx8;
    function neg(a: Fx8): Fx8;
    function toIntShifted(a: Fx8, n: number): number;
    function add(a: Fx8, b: Fx8): Fx8;
    function iadd(a: number, b: Fx8): Fx8;
    function sub(a: Fx8, b: Fx8): Fx8;
    function mul(a: Fx8, b: Fx8): Fx8;
    function imul(a: Fx8, b: number): Fx8;
    function div(a: Fx8, b: Fx8): Fx8;
    function idiv(a: Fx8, b: number): Fx8;
    function compare(a: Fx8, b: Fx8): number;
    function abs(a: Fx8): Fx8;
    function min(a: Fx8, b: Fx8): Fx8;
    function max(a: Fx8, b: Fx8): Fx8;
    function floor(v: Fx8): Fx8;
    function ceil(v: Fx8): Fx8;
    function leftShift(a: Fx8, n: number): Fx8;
    function rightShift(a: Fx8, n: number): Fx8;
    function toInt(v: Fx8): number;
    function toFloat(v: Fx8): number;
}
/**
 * Repeats the code forever in the background. On each iteration, allows other codes to run.
 * @param body code to execute
 */
declare function forever(a: () => void): void;
declare namespace basic {
    function forever(a: () => void): void;
}
declare namespace control {
    interface GCStats {
        numGC: number;
        numBlocks: number;
        totalBytes: number;
        lastFreeBytes: number;
        lastMaxBlockBytes: number;
        minFreeBytes: number;
    }
    /**
     * Get various statistics about the garbage collector (GC)
     */
    function gcStats(): GCStats;
}
declare namespace control {
    enum IntervalMode {
        Interval = 0,
        Timeout = 1,
        Immediate = 2
    }
    function setInterval(func: () => void, delay: number, mode: IntervalMode): number;
    function clearInterval(intervalId: number, mode: IntervalMode): void;
}
declare namespace JSON {
    function parseIntRadix(s: string, base?: number): number;
    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer Not supported; use null.
     * @param indent Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     */
    function stringify(value: any, replacer?: any, indent?: number): string;
    /**
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     */
    function parse(s: string): any;
}
declare namespace Math {
    const E = 2.718281828459045;
    const LN2 = 0.6931471805599453;
    const LN10 = 2.302585092994046;
    const LOG2E = 1.4426950408889634;
    const LOG10E = 0.4342944819032518;
    const PI = 3.141592653589793;
    const SQRT1_2 = 0.7071067811865476;
    const SQRT2 = 1.4142135623730951;
    /**
     * Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.
     * @param value value to map in ranges
     * @param fromLow the lower bound of the value's current range
     * @param fromHigh the upper bound of the value's current range, eg: 1023
     * @param toLow the lower bound of the value's target range
     * @param toHigh the upper bound of the value's target range, eg: 4
     */
    function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
    /**
     * Constrains a number to be within a range
     * @param x the number to constrain, all data types
     * @param y the lower end of the range, all data types
     * @param z the upper end of the range, all data types
     */
    function constrain(value: number, low: number, high: number): number;
    /**
     * Returns the sine of an input angle. This is an 8-bit approximation.
     * @param theta input angle from 0-255
     */
    function isin(theta: number): number;
    /**
     * Returns the cosine of an input angle. This is an 8-bit approximation.
     * @param theta input angle from 0-255
     */
    function icos(theta: number): number;
}
declare namespace Number {
    const EPSILON = 2.220446049250313e-16;
}
/**
 * Respond to and read data from buttons and sensors.
 */
declare namespace input {
}
/**
 * Pause for the specified time in milliseconds
 * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
 */
declare function pause(ms: number): void;
declare namespace basic {
    function pause(millis: number): void;
}
declare namespace control {
    /**
     * Enable profiling for current function.
     */
    function enablePerfCounter(name?: string): void;
    /**
     * Dump values of profiling performance counters.
     */
    function dmesgPerfCounters(): void;
}
declare namespace control {
    function __queuePollEvent(timeOut: number, condition: () => boolean, handler: () => void): void;
}
/**
 * Busy wait for a condition to be true
 * @param condition condition to test for
 * @param timeOut if positive, maximum duration to wait for in milliseconds
 */
declare function pauseUntil(condition: () => boolean, timeOut?: number): void;
/**
 * Calls a function with a fixed time delay between each call to that function.
 * @param func
 * @param delay
 */
declare function setInterval(func: () => void, delay: number): number;
/**
 * Cancels repeated action which was set up using setInterval().
 * @param intervalId
 */
declare function clearInterval(intervalId: number): void;
/**
 * Calls a function after specified delay.
 * @param func
 * @param delay
 */
declare function setTimeout(func: () => void, delay: number): number;
/**
 * Clears the delay set by setTimeout().
 * @param intervalId
 */
declare function clearTimeout(intervalId: number): void;
/**
 * Calls a function as soon as possible.
 * @param func
 */
declare function setImmediate(func: () => void): number;
/**
 * Cancels the immediate actions.
 * @param intervalId
 */
declare function clearImmediate(intervalId: number): void;
/**
 * Tagged hex literal converter
 */
declare function hex(lits: any, ...args: any[]): Buffer;
declare class UTF8Decoder {
    private buf;
    constructor();
    add(buf: Buffer): void;
    decodeUntil(delimiter: number): string;
    decode(): string;
}
/**
 * Tagged image literal converter
 */
declare function img(lits: any, ...args: any[]): Image;
declare const screen: ScreenImage;
declare namespace image {
    function setPalette(buf: Buffer): void;
}
declare namespace _screen_internal {
    function createScreen(): ScreenImage;
}
declare const KEY_UP = 2048;
declare const KEY_DOWN = 2049;
declare const INTERNAL_KEY_UP = 2050;
declare const INTERNAL_KEY_DOWN = 2051;
declare const SYSTEM_KEY_UP = 2052;
declare const SYSTEM_KEY_DOWN = 2053;
declare const KEY_REPEAT = 2054;
declare const SYSTEM_KEY_REPEAT = 2055;
declare enum ControllerButtonEvent {
    Pressed = 2049,
    Released = 2048,
    Repeated = 2054
}
declare enum ControllerButton {
    A = 5,
    B = 6,
    Left = 1,
    Up = 2,
    Right = 3,
    Down = 4,
    Menu = 7
}
/**
 * Access to game controls
 */
declare namespace controller {
    class ButtonHandler {
        event: number;
        callback: () => void;
        constructor(event: number, callback: () => void);
    }
    class ButtonEventHandlerState {
        id: number;
        constructor(id: number);
        user: ButtonHandler[];
        system: ButtonHandler[];
    }
    class Button {
        _owner: Controller;
        id: number;
        repeatDelay: number;
        repeatInterval: number;
        private _pressed;
        private _pressedElasped;
        private _repeatCount;
        protected get handlerState(): ButtonEventHandlerState;
        toString(): string;
        constructor(id: number, configKey: number);
        private raiseButtonUp;
        private raiseButtonDown;
        private raiseButtonRepeat;
        /**
         * Run some code when a button is pressed, released, or held
         */
        onEvent(event: ControllerButtonEvent, handler: () => void): void;
        /**
         * Adds an event handler that will fire whenever the specified event
         * is triggered on this button. Handlers added using this method will
         * not conflict with events added via onEvent. The same handler can
         * not be added for the same event more than once.
         *
         * @param event     The event to subscribe to for this button
         * @param handler   The code to run when the event triggers
         */
        addEventListener(event: ControllerButtonEvent, handler: () => void): void;
        /**
         * Removes an event handler registered with addEventListener.
         *
         * @param event     The event that the handler was registered for
         * @param handler   The handler to remove
         */
        removeEventListener(event: ControllerButtonEvent, handler: () => void): void;
        /**
         * Pauses until a button is pressed or released
         */
        pauseUntil(event: ControllerButtonEvent): void;
        /**
         * Indicates if the button is currently pressed
         */
        isPressed(): boolean;
        /**
         * Indicates how hard the button is pressed, 0-512
         */
        pressureLevel(): number;
        setPressed(pressed: boolean): void;
        __update(dtms: number): void;
        protected runButtonEvents(event: ControllerButtonEvent): void;
        protected getOrCreateHandlerForEvent(event: ControllerButtonEvent): ButtonHandler;
    }
    /**
     * Configures the timing of the on button repeat event for all of the controller buttons
     * @param delay number of milliseconds from when the button is pressed to when the repeat event starts firing, eg: 500
     * @param interval minimum number of milliseconds between calls to the button repeat event, eg: 30
     */
    function setRepeatDefault(delay: number, interval: number): void;
    /**
     * Pause the program until a button is pressed
     */
    function pauseUntilAnyButtonIsPressed(): void;
    function _setUserEventsEnabled(enabled: boolean): void;
}
interface SpriteLike {
    z: number;
    id: number;
    flags?: number;
    __update(camera: scene.Camera, dt: number): void;
    __draw(camera: scene.Camera): void;
    __serialize(offset: number): Buffer;
}
declare namespace sprites {
    class BaseSprite implements SpriteLike {
        protected _z: number;
        id: number;
        constructor(z: number);
        __visible(): boolean;
        get z(): number;
        set z(v: number);
        __draw(camera: scene.Camera): void;
        __drawCore(camera: scene.Camera): void;
        __update(camera: scene.Camera, dt: number): void;
        __serialize(offset: number): Buffer;
    }
}
/**
 * Sprites on screen
 */
declare namespace sprites {
    class FollowingSprite {
        self: Sprite;
        target: Sprite;
        rate: number;
        turnRate: number;
        constructor(self: Sprite, target: Sprite, rate: number, turnRate: number);
    }
    /**
     * Create a new sprite from an image
     * @param img the image
     */
    function create(img: Image, kind?: number): Sprite;
    /**
     * Create a new sprite from an image
     * @param img the image
     */
    function __create(img: Image, kind?: number): Sprite;
    function destroy(sprite: Sprite, effect?: effects.ParticleEffect, duration?: number): void;
    /**
     * Return an array of all sprites of the given kind.
     * @param kind the target kind
     */
    function allOfKind(kind: number): Sprite[];
    /**
     * Destroys all sprites of the given kind.
     */
    function destroyAllSpritesOfKind(kind: number, effect?: effects.ParticleEffect, duration?: number): void;
    /**
     * Create a new sprite with a given speed, and place it at the edge of the screen so it moves towards the middle.
     * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    function createProjectileFromSide(img: Image, vx: number, vy: number): Sprite;
    /**
     * Create a new sprite with a given speed that starts from the location of another sprite.
     * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    function createProjectileFromSprite(img: Image, sprite: Sprite, vx: number, vy: number): Sprite;
    /**
     * Create a new sprite with given speed, and place it at the edge of the screen so it moves towards the middle.
     * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    function createProjectile(img: Image, vx: number, vy: number, kind?: number, sprite?: Sprite): Sprite;
    enum Flag {
        None = 0,// no flags are set
        Destroyed = 2,// whether the sprite has been destroyed or not
        AutoDestroy = 4,// remove the sprite when no longer visible
        StayInScreen = 8,// sprite cannot move outside the camera region
        DestroyOnWall = 16,// destroy sprite on contact with wall
        BounceOnWall = 32,// Bounce on walls
        ShowPhysics = 64,// display position, velocity, acc
        Invisible = 128,// makes the sprite invisible, so it does not show up on the screen
        IsClipping = 256,// whether the sprite is currently clipping into a wall. This can happen when a sprite is created or moved explicitly.
        RelativeToCamera = 512,// draw relative to the camera, not the world (e.g. HUD elements)
        GhostThroughTiles = 1024,// No overlaps with tiles
        GhostThroughWalls = 2048,// No collisions with walls
        GhostThroughSprites = 4096,// No overlaps with other sprites
        HitboxOverlaps = 8192,// If set, overlaps with this sprite are based off of both sprites' hitboxes and not pixel perfect
        Ghost = 7168
    }
}
declare enum SpriteFlag {
    Ghost = 7168,
    AutoDestroy = 4,
    StayInScreen = 8,
    DestroyOnWall = 16,
    BounceOnWall = 32,
    ShowPhysics = 64,
    Invisible = 128,
    RelativeToCamera = 512,
    GhostThroughSprites = 4096,
    GhostThroughTiles = 1024,
    GhostThroughWalls = 2048
}
declare enum TileDirection {
    Left = 0,
    Top = 1,
    Right = 2,
    Bottom = 3,
    Center = 4
}
declare enum CollisionDirection {
    Left = 0,
    Top = 1,
    Right = 2,
    Bottom = 3
}
declare enum FlipOption {
    None = 0,
    FlipX = 1,
    FlipY = 2,
    FlipXY = 3
}
declare enum ScaleDirection {
    Vertically = 1,
    Horizontally = 2,
    Uniformly = 3
}
declare enum ScaleAnchor {
    Middle = 0,
    Top = 1,
    Left = 2,
    Right = 4,
    Bottom = 8,
    TopLeft = 3,
    TopRight = 5,
    BottomLeft = 10,
    BottomRight = 12
}
/**
 * A sprite on the screen
 **/
declare class Sprite extends sprites.BaseSprite {
    _x: Fx8;
    _y: Fx8;
    _vx: Fx8;
    _vy: Fx8;
    _ax: Fx8;
    _ay: Fx8;
    _fx: Fx8;
    _fy: Fx8;
    _sx: Fx8;
    _sy: Fx8;
    _width: Fx8;
    _height: Fx8;
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get vx(): number;
    set vx(v: number);
    get vy(): number;
    set vy(v: number);
    get ax(): number;
    set ax(v: number);
    get ay(): number;
    set ay(v: number);
    get fx(): number;
    set fx(v: number);
    get fy(): number;
    set fy(v: number);
    get sx(): number;
    set sx(v: number);
    get sy(): number;
    set sy(v: number);
    get scale(): number;
    set scale(v: number);
    private _data;
    /**
     * Custom data
     */
    get data(): any;
    set data(value: any);
    _kind: number;
    /**
     * A bitset of layer. Each bit is a layer, default is 1.
     */
    layer: number;
    _lastX: Fx8;
    _lastY: Fx8;
    _action: number;
    /**
     * Time to live in milliseconds. The lifespan decreases by 1 on each millisecond
     * and the sprite gets destroyed when it reaches 0.
     */
    lifespan: number;
    private _image;
    private _obstacles;
    private sayEndTime;
    private sayRenderer;
    _hitbox: game.Hitbox;
    _overlappers: number[];
    _kindsOverlappedWith: number[];
    flags: number;
    private destroyHandler;
    constructor(img: Image);
    __serialize(offset: number): Buffer;
    /**
     * Gets the current image
     */
    get image(): Image;
    /**
     * Sets the image on the sprite
     */
    setImage(img: Image): void;
    calcDimensionalHash(): number;
    resetHitbox(): void;
    setHitbox(): void;
    isStatic(): boolean;
    __visible(): boolean;
    protected recalcSize(): void;
    private isScaled;
    get width(): number;
    get height(): number;
    get left(): number;
    set left(value: number);
    get right(): number;
    set right(value: number);
    get top(): number;
    set top(value: number);
    get bottom(): number;
    set bottom(value: number);
    /**
     * The type of sprite
     */
    kind(): number;
    /**
     * The type of sprite
     */
    setKind(value: number): void;
    /**
     * Set the sprite position in pixels starting from the top-left corner of the screen.
     * @param x horizontal position in pixels
     * @param y vertical position in pixels
     */
    setPosition(x: number, y: number): void;
    /**
     * Sets the sprite velocity in pixel / sec
     * @param vx
     * @param vy
     */
    setVelocity(vx: number, vy: number): void;
    /**
     * Deprecated! Use sayText instead.
     *
     * Display a speech bubble with the text, for the given time.
     * @param text the text to say, eg: ":)"
     * @param time time to keep text on
     */
    say(text: any, timeOnScreen?: number, textColor?: number, textBoxColor?: number): void;
    /**
     * Display a speech bubble with the text, for the given time
     * @param text the text to say, eg: ":)"
     * @param time time to keep text on
     * @param animated whether to print the text character by character or not
     */
    sayText(text: any, timeOnScreen?: number, animated?: boolean, textColor?: number, textBoxColor?: number): void;
    /**
     * Start an effect on this sprite
     * @param effect the type of effect to create
     */
    startEffect(effect: effects.ParticleEffect, duration?: number): void;
    /**
     * Indicates if the sprite is outside the screen
     */
    isOutOfScreen(camera: scene.Camera): boolean;
    __drawCore(camera: scene.Camera): void;
    __update(camera: scene.Camera, dt: number): void;
    /**
     * Set whether a sprite should be constrained within the screen (on) or not (off)
     */
    setStayInScreen(on: boolean): void;
    /**
     * Set whether a sprite should bounce when it hits a wall (on) or not (off)
     */
    setBounceOnWall(on: boolean): void;
    /**
     * Set a sprite flag
     */
    setFlag(flag: SpriteFlag, on: boolean): void;
    /**
     * Check if this sprite overlaps another sprite
     * @param other
     */
    overlapsWith(other: Sprite): boolean;
    /**
     * Check if there is an obstacle in the given direction
     * @param direction
     */
    isHittingTile(direction: CollisionDirection): boolean;
    /**
     * Get the tile kind in a given direction if any
     * @param direction
     */
    tileKindAt(direction: TileDirection, tile: Image): boolean;
    /**
     * Get the obstacle sprite in a given direction if any
     * @param direction
     */
    tileHitFrom(direction: number): number;
    /**
     * Gets the tilemap location at the center of a sprite
     */
    tilemapLocation(): tiles.Location;
    clearObstacles(): void;
    registerObstacle(direction: CollisionDirection, other: sprites.Obstacle, tm?: tiles.TileMap): void;
    /**
     * Run code when the sprite is destroyed
     * @param handler
     */
    onDestroyed(handler: () => void): void;
    /**
     * Destroy the sprite
     */
    destroy(effect?: effects.ParticleEffect, duration?: number): void;
    _destroyCore(): void;
    /**
     * Make this sprite follow the target sprite.
     *
     * @param target the sprite this one should follow
     * @param speed the rate at which this sprite should move, eg: 100
     * @param turnRate how quickly the sprite should turn while following.
     *      The default (400) will cause the sprite to reach max speed after approximately 125 ms when standing still,
     *      and turn around 180 degrees when at max speed after approximately 250 ms.
     */
    follow(target: Sprite, speed?: number, turnRate?: number): void;
    setScaleCore(sx?: number, sy?: number, anchor?: ScaleAnchor, proportional?: boolean): void;
    setScale(value: number, anchor?: ScaleAnchor): void;
    changeScale(value: number, anchor?: ScaleAnchor): void;
    toString(): string;
    protected drawSay(camera: scene.Camera): void;
    protected drawDebug(left: number, top: number, offsetX: number, offsetY: number): void;
    protected drawSprite(drawLeft: number, drawTop: number): void;
}
declare namespace animation {
    class Point {
        x: number;
        y: number;
        constructor(x: number, y: number);
    }
    class PathPreset {
        pathString: string;
        constructor(pathString: string);
    }
    class Path {
        protected path: string;
        length: number;
        protected args: number[];
        protected currentCommand: string;
        protected lastControlX: number;
        protected lastControlY: number;
        protected startX: number;
        protected startY: number;
        protected lastX: number;
        protected lastY: number;
        protected strIndex: number;
        protected commandIndex: number;
        constructor(path: string);
        protected readNextCommand(): void;
        reset(): void;
        protected readNextToken(): string;
        private static commandToArgCount;
        run(interval: number, target: Sprite, runningTime: number): boolean;
        protected runCurrentCommand(target: Sprite, nodeTime: number, intervalTime: number): void;
        protected ensureControlPoint(): void;
    }
    abstract class SpriteAnimation {
        sprite: Sprite;
        protected loop: boolean;
        protected elapsedTime: number;
        constructor(sprite: Sprite, loop: boolean);
        init(): void;
        update(): boolean;
    }
    class ImageAnimation extends SpriteAnimation {
        private frames;
        private frameInterval;
        private lastFrame;
        constructor(sprite: Sprite, frames: Image[], frameInterval: number, loop?: boolean);
        update(): boolean;
    }
    class MovementAnimation extends SpriteAnimation {
        private path;
        private nodeInterval;
        protected startX: number;
        protected startY: number;
        constructor(sprite: Sprite, path: Path, nodeInterval: number, loop?: boolean);
        update(): boolean;
    }
    /**
     * Create and run an image animation on a sprite
     * @param frames the frames to animate through
     * @param sprite the sprite to animate on
     * @param frameInterval the time between changes, eg: 500
     */
    function runImageAnimation(sprite: Sprite, frames: Image[], frameInterval?: number, loop?: boolean): void;
    /**
     * Create and run a movement animation on a sprite
     * @param sprite the sprite to move
     * @param pathString the SVG path to animate
     * @param duration how long the animation should play for, eg: 500
     */
    function runMovementAnimation(sprite: Sprite, pathString: string, duration?: number, loop?: boolean): void;
    enum AnimationTypes {
        All = 0,
        ImageAnimation = 1,
        MovementAnimation = 2
    }
    /**
     * Stop one type or all animations (simple and looping) on a sprite
     * @param type the animation type to stop
     * @param sprite the sprite to filter animations by
     */
    function stopAnimation(type: AnimationTypes, sprite: Sprite): void;
    const flyToCenter: PathPreset;
    const shake: PathPreset;
    const bounceRight: PathPreset;
    const bounceLeft: PathPreset;
    const parachuteRight: PathPreset;
    const parachuteLeft: PathPreset;
    const easeRight: PathPreset;
    const easeLeft: PathPreset;
    const easeDown: PathPreset;
    const easeUp: PathPreset;
    const waveRight: PathPreset;
    const waveLeft: PathPreset;
    const bobbing: PathPreset;
    const bobbingRight: PathPreset;
    const bobbingLeft: PathPreset;
    /**
     * Generates a path string for preset animation
     * @param animationPath The preset path
     */
    function animationPresets(animationPath: PathPreset): string;
    function _animationFrames(frames: Image[]): Image[];
}
declare namespace game {
    /**
     * Prompts the user for a boolean question
     * @param title
     * @param subtitle
     */
    function ask(title: any, subtitle?: any): boolean;
}
declare function tilemap(lits: any, ...args: any[]): tiles.TileMapData;
declare function tilemap8(lits: any, ...args: any[]): tiles.TileMapData;
declare function tilemap16(lits: any, ...args: any[]): tiles.TileMapData;
declare function tilemap32(lits: any, ...args: any[]): tiles.TileMapData;
declare function tilemap4(lits: any, ...args: any[]): tiles.TileMapData;
declare namespace assets {
    function tilemap(lits: any, ...args: any[]): tiles.TileMapData;
    function image(lits: any, ...args: any[]): Image;
    function tile(lits: any, ...args: any[]): Image;
    function animation(lits: any, ...args: any[]): Image[];
    function song(lits: any, ...args: any[]): Buffer;
}
declare namespace helpers {
    type TilemapFactory = (name: string) => tiles.TileMapData;
    type ImageFactory = (name: string) => Image;
    type TileFactory = (name: string) => Image;
    type AnimationFactory = (name: string) => Image[];
    type SongFactory = (name: string) => Buffer;
    function _registerFactory(kind: string, factory: (name: string) => any): void;
    function _getFactoryInstance(kind: string, name: string): any;
    function registerTilemapFactory(factory: TilemapFactory): void;
    function getTilemapByName(name: string): any;
    function getImageByName(name: string): any;
    function getAnimationByName(name: string): any;
    function getTileByName(name: string): any;
    function getSongByName(name: string): any;
}
declare enum BackgroundAlignment {
    Left = 1,
    Right = 2,
    Top = 3,
    Bottom = 4,
    Center = 5
}
declare namespace scene {
    class Background {
        color: number;
        _image: Image;
        camera: Camera;
        private _layers;
        constructor(camera: Camera);
        addLayer(pic: Image, distance: number, alignment: BackgroundAlignment): BackgroundLayer;
        get image(): Image;
        set image(image: Image);
        hasBackgroundImage(): boolean;
        draw(): void;
    }
    class BackgroundLayer {
        distance: number;
        img: Image;
        repeatX: boolean;
        repeatY: boolean;
        alignX: BackgroundAlignment;
        alignY: BackgroundAlignment;
        constructor(distance: number, alignment: BackgroundAlignment, img: Image);
        draw(offsetX: number, offsetY: number): void;
    }
}
declare namespace scene {
    class Camera {
        protected _offsetX: number;
        protected _offsetY: number;
        drawOffsetX: number;
        drawOffsetY: number;
        sprite: Sprite;
        protected _lastUpdatedSpriteX: number;
        protected _lastUpdatedSpriteY: number;
        protected shakeStartTime: number;
        protected shakeDuration: number;
        protected shakeAmplitude: number;
        constructor();
        get offsetX(): number;
        set offsetX(v: number);
        get offsetY(): number;
        set offsetY(v: number);
        get x(): number;
        get y(): number;
        get left(): number;
        get right(): number;
        get top(): number;
        get bottom(): number;
        shake(amplitude?: number, duration?: number): void;
        isUpdated(): boolean;
        update(): void;
    }
}
declare namespace game.consoleOverlay {
    function isVisible(): boolean;
    function clear(): void;
    function setVisible(value: boolean, col?: number): void;
    function draw(): void;
}
declare enum ControllerEvent {
    Connected = 1,
    Disconnected = 2
}
/**
 * Access to game controls
 */
declare namespace controller {
    function _player1(): Controller;
    function players(): Controller[];
    class ControlledSprite {
        s: Sprite;
        vx: number;
        vy: number;
        _inputLastFrame: boolean;
        constructor(s: Sprite, vx: number, vy: number);
    }
    function _moveSprites(): void;
    class Controller {
        playerIndex: number;
        buttons: Button[];
        analog: boolean;
        private _id;
        private _connected;
        constructor(playerIndex: number, buttons: Button[]);
        get _controlledSprites(): ControlledSprite[];
        set _controlledSprites(cps: ControlledSprite[]);
        get id(): number;
        dump(): void;
        /**
         * Get the 'Left' button
         */
        get left(): Button;
        /**
         * Get the 'Right' button
         */
        get right(): Button;
        /**
         * Get the 'Up' button
         */
        get up(): Button;
        /**
         * Get the 'Down' button
         */
        get down(): Button;
        /**
         * Get the 'A' button
         */
        get A(): Button;
        /**
         * Get the 'B' button
         */
        get B(): Button;
        /**
         * Get the 'Menu' button
         */
        get menu(): Button;
        /**
         * Control a sprite using the direction buttons from the controller. Note that this will overwrite
         * the current velocity of the sprite whenever a directional button is pressed. To stop controlling
         * a sprite, pass 0 for vx and vy.
         *
         * @param sprite The Sprite to control
         * @param vx The velocity used for horizontal movement when left/right is pressed
         * @param vy The velocity used for vertical movement when up/down is pressed
         */
        moveSprite(sprite: Sprite, vx?: number, vy?: number): void;
        stopControllingSprite(sprite: Sprite): void;
        _moveSpriteInternal(sprite: Sprite, vx?: number, vy?: number): void;
        private button;
        /**
         * Run some code when a button is pressed, released, or held
         */
        onButtonEvent(btn: ControllerButton, event: ControllerButtonEvent, handler: () => void): void;
        /**
         * Register code run when a controller event occurs
         * @param event
         * @param handler
         */
        onEvent(event: ControllerEvent, handler: () => void): void;
        get connected(): boolean;
        set connected(value: boolean);
        /**
         * Indicates if the button is currently pressed
        */
        isPressed(btn: ControllerButton): boolean;
        /**
         * Get the horizontal movement, given the step and state of buttons
         * @param step the distance, eg: 100
         */
        dx(step?: number): number;
        _dxInternal(step?: number): number;
        /**
         * Get the vertical movement, given the step and state of buttons
         * @param step the distance, eg: 100
         */
        dy(step?: number): number;
        _dyInternal(step?: number): number;
        __preUpdate(): void;
        __update(dtms: number): void;
        serialize(offset: number): Buffer;
    }
    /**
     * Called by the game engine to update and/or raise events
     */
    function __update(dt: number): void;
    function serialize(offset: number): Buffer;
    /**
     * Control a sprite using the direction buttons from the controller. Note that this
     * control will take over the vx and vy of the sprite and overwrite any changes
     * made unless a 0 is passed.
     *
     * @param sprite The Sprite to control
     * @param vx The velocity used for horizontal movement when left/right is pressed
     * @param vy The velocity used for vertical movement when up/down is pressed
     */
    function moveSprite(sprite: Sprite, vx?: number, vy?: number): void;
    /**
     * Get the horizontal movement, given the step and state of buttons
     * @param step the distance, eg: 100
     */
    function dx(step?: number): number;
    /**
     * Get the vertical movement, given the step and state of buttons
     * @param step the distance, eg: 100
     */
    function dy(step?: number): number;
    const anyButton: Button;
}
declare namespace controller {
    const A: Button;
    const B: Button;
    const left: Button;
    const up: Button;
    const right: Button;
    const down: Button;
    const menu: Button;
    const player2: Controller;
    const player3: Controller;
    const player4: Controller;
    const player1: Controller;
}
declare namespace effects {
    class ImageEffect implements BackgroundEffect {
        protected preferredDelay: number;
        protected effect: (image: Image, fastRandom?: Math.FastRandom) => void;
        protected fastRandom: Math.FastRandom;
        private times;
        constructor(defaultRate: number, effectFactory: (image: Image, fastRandom?: Math.FastRandom) => void);
        /**
         * Apply this effect to the image of the current sprite
         * @param sprite
         */
        applyTo(sprite: Sprite): void;
        /**
         * Change the given image with this effect
         * @param input
         */
        change(input: Image): void;
        /**
         * Make this effect occur repeatedly on the background image
         * @param times number of times effect should occur
         * @param delay delay between instances of the effect
         */
        startScreenEffect(times?: number, delay?: number): void;
    }
    const dissolve: ImageEffect;
    const melt: ImageEffect;
    const slash: ImageEffect;
    const splatter: ImageEffect;
}
declare namespace sprites {
    /**
     * A version of the Sprite class that is easier to extend.
     *
     * Unlike the normal Sprite class, this class will automatically add
     * itself to the physics engine and run all sprite created handlers
     * in the constructor
     */
    class ExtendableSprite extends Sprite {
        protected hasCustomDimensions: boolean;
        constructor(spriteImage: Image, kind?: number);
        /**
         * Override to change how the sprite is drawn to the screen
         *
         * @param drawLeft The left position to draw the sprite at (already adjusted for camera)
         * @param drawTop The top position to draw the sprite at (already adjusted for camera)
         */
        draw(drawLeft: number, drawTop: number): void;
        /**
         * Override to add update logic for a sprite. This method runs once per frame
         *
         * @param deltaTimeMillis The time that has elapsed since the last frame in milliseconds
         */
        update(deltaTimeMillis: number): void;
        /**
         * Sets the width and height of this sprite. Once set, this will also prevent
         * this width and height from automatically changing whenever scale or the image
         * changes
         */
        setDimensions(width: number, height: number): void;
        __update(camera: scene.Camera, dt: number): void;
        setHitbox(): void;
        protected drawSprite(drawLeft: number, drawTop: number): void;
        protected recalcSize(): void;
    }
}
declare namespace __internal {
    /**
     * A speed picker
     * @param speed the speed, eg: 50
     */
    function __spriteSpeedPicker(speed: number): number;
    /**
     * A sprite acceleration picker
     * @param acceleration the acceleration in pixel/sec^2
     */
    function __accSpeedPicker(acceleration: number): number;
}
/**
 * Game transitions and dialog
 **/
declare namespace game {
    /**
     * Determines if diagnostics are shown
     */
    let debug: boolean;
    let stats: boolean;
    enum ScoringType {
        HighScore = 0,
        LowScore = 1,
        None = 2
    }
    /**
     * The available colors for Arcade.
     * NOTE: If the color palette is changed, these values will change along with it.
     **/
    enum Color {
        Transparent = 0,
        White = 1,
        Red = 2,
        Pink = 3,
        Orange = 4,
        Yellow = 5,
        Teal = 6,
        Green = 7,
        Blue = 8,
        LightBlue = 9,
        Purple = 10,
        LightPurple = 11,
        DarkPurple = 12,
        Tan = 13,
        Brown = 14,
        Black = 15
    }
    class GameOverConfig {
        scoringType: ScoringType;
        winEffect: effects.BackgroundEffect;
        loseEffect: effects.BackgroundEffect;
        loseSound: music.Playable;
        winSound: music.Playable;
        loseSoundLooping: boolean;
        winSoundLooping: boolean;
        winMessage: string;
        winMessageMultiplayer: string;
        loseMessage: string;
        effectSetByUser: boolean;
        soundSetByUser: boolean;
        messageSetByUser: boolean;
        scoringTypeSetByUser: boolean;
        constructor();
        init(): void;
        setScoringType(type: ScoringType, explicit: boolean): void;
        setEffect(win: boolean, effect: effects.BackgroundEffect, explicit: boolean): void;
        getEffect(win: boolean): effects.BackgroundEffect;
        setSound(win: boolean, sound: music.Playable, looping: boolean, explicit: boolean): void;
        getSound(win: boolean): music.Playable;
        getSoundLooping(win: boolean): boolean;
        setMessage(win: boolean, message: string, explicit: boolean): void;
        getMessage(win: boolean, preferMultiplayer?: boolean): string;
    }
    const gameOverConfig: () => GameOverConfig;
    function currentScene(): scene.Scene;
    function setWaitAnyButton(f: () => void): void;
    function waitAnyButton(): void;
    function eventContext(): control.EventContext;
    function pushScene(): void;
    function popScene(): void;
    function showDialog(title: string, subtitle: string, footer?: string): void;
    /**
     * Set the effect that occurs when the game is over
     * @param win whether the effect should run on a win (true) or lose (false)
     * @param effect
     */
    function setGameOverEffect(win: boolean, effect: effects.BackgroundEffect): void;
    /**
     * Set the music that occurs when the game is over
     * @param win whether the sound should play on a win (true) or lose (false)
     * @param effect
     */
    function setGameOverPlayable(win: boolean, sound: music.Playable, looping: boolean): void;
    function setGameOverSound(win: boolean, sound: music.Melody): void;
    /**
     * Set the message that displays when the game is over
     * @param win whether the message should show on a win (true) or lose (false)
     * @param message
     */
    function setGameOverMessage(win: boolean, message: string): void;
    /**
     * Set the method of judging the best score for the game
     * @param type the scoring type
     */
    function setGameOverScoringType(type: ScoringType): void;
    /**
     * Set the function to call on game over. The 'win' boolean is
     * passed to the handler.
     * @param handler
     */
    function onGameOver(handler: (win: boolean) => void): void;
    /**
     * Finish the game and display the score
     */
    function over(win?: boolean, effect?: effects.BackgroundEffect): void;
    function gameOver(win: boolean): void;
    function gameOverPlayerWin(player: number): void;
    /**
     * Repeats the code forever in the background for this scene.
     * On each iteration, allows other codes to run.
     * @param body code to execute
     */
    function forever(action: () => void): void;
    /**
     * Draw on screen before sprites, after background
     * @param body code to execute
     */
    function onPaint(a: () => void): void;
    /**
     * Draw on screen after sprites
     * @param body code to execute
     */
    function onShade(a: () => void): void;
    /**
     * Register a handler that runs whenever a scene is pushed onto the scene
     * stack. Useful for extensions that need to store/restore state as the
     * event context changes. The handler is run AFTER the push operation (i.e.
     * after game.currentScene() has changed)
     *
     * @param handler Code to run when a scene is pushed onto the stack
     */
    function addScenePushHandler(handler: (oldScene: scene.Scene) => void): void;
    /**
     * Remove a scene push handler. Useful for extensions that need to store/restore state as the
     * event context changes.
     *
     * @param handler The handler to remove
     */
    function removeScenePushHandler(handler: (oldScene: scene.Scene) => void): void;
    /**
     * Register a handler that runs whenever a scene is popped off of the scene
     * stack. Useful for extensions that need to store/restore state as the
     * event context changes. The handler is run AFTER the pop operation. (i.e.
     * after game.currentScene() has changed)
     *
     * @param handler Code to run when a scene is removed from the top of the stack
     */
    function addScenePopHandler(handler: (oldScene: scene.Scene) => void): void;
    /**
     * Remove a scene pop handler. Useful for extensions that need to store/restore state as the
     * event context changes.
     *
     * @param handler The handler to remove
     */
    function removeScenePopHandler(handler: (oldScene: scene.Scene) => void): void;
}
/**
 * Game transitions and dialog
 **/
declare namespace game {
    /**
     * Update the position and velocities of sprites
     * @param body code to execute
     */
    function onUpdate(a: () => void): void;
    /**
     * Run code on an interval of time. This executes before game.onUpdate()
     * @param body code to execute
     */
    function onUpdateInterval(period: number, a: () => void): void;
    /**
     * Returns the time since the game started in milliseconds
     */
    function runtime(): number;
}
declare namespace game {
    class Hitbox {
        hash: number;
        parent: Sprite;
        ox: Fx8;
        oy: Fx8;
        width: Fx8;
        height: Fx8;
        constructor(parent: Sprite, width: Fx8, height: Fx8, ox: Fx8, oy: Fx8);
        get left(): Fx8;
        get top(): Fx8;
        get right(): Fx8;
        get bottom(): Fx8;
        isValid(): boolean;
        contains(x: Fx8, y: Fx8): boolean;
        updateIfInvalid(): void;
        overlapsWith(other: Hitbox): boolean;
    }
    function calculateHitBox(s: Sprite): Hitbox;
}
/**
 * Head-up display
 *
*/
declare namespace info {
    export enum Visibility {
        None = 0,
        Countdown = 1,
        Score = 2,
        Life = 4,
        Hud = 8,
        Multi = 16,
        UserHeartImage = 32,
        _ExplicitlySetScore = 64,
        _ExplicitlySetLife = 128
    }
    class ScoreReachedHandler {
        score: number;
        handler: () => void;
        isTriggered: boolean;
        constructor(score: number, handler: () => void);
    }
    export class PlayerState {
        score: number;
        life: number;
        lifeZeroHandler: () => void;
        scoreReachedHandlers: ScoreReachedHandler[];
        showScore?: boolean;
        showLife?: boolean;
        visibility: Visibility;
        showPlayer?: boolean;
        constructor();
    }
    export function multiplayerScoring(): boolean;
    export function playersWithScores(): PlayerInfo[];
    export function saveAllScores(scoringType: string): void;
    export function winningPlayer(): PlayerInfo;
    export function isBetterScore(newScore: number, prevScore: number): boolean;
    export function saveHighScore(): void;
    /**
     * Get the current score if any
     */
    export function score(): number;
    export function hasScore(): boolean;
    /**
     * Get the last recorded high score
     */
    export function highScore(): number;
    /**
     * Set the score
     */
    export function setScore(value: number): void;
    /**
     * Change the score by the given amount
     * @param value the amount of change, eg: 1
     */
    export function changeScoreBy(value: number): void;
    /**
     * Get the number of lives
     */
    export function life(): number;
    export function hasLife(): boolean;
    /**
     * Set the number of lives
     * @param value the number of lives, eg: 3
     */
    export function setLife(value: number): void;
    /**
     * Change the lives by the given amount
     * @param value the change of lives, eg: -1
     */
    export function changeLifeBy(value: number): void;
    /**
     * Run code when the player's life reaches 0. If this function
     * is not called then game.over() is called instead
     */
    export function onLifeZero(handler: () => void): void;
    /**
     * Runs code once each time the score reaches a given value. This will also
     * run if the score "passes" the given value in either direction without ever
     * having the exact value (e.g. if score is changed by more than 1)
     *
     * @param score the score to fire the event on
     * @param handler code to run when the score reaches the given value
     */
    export function onScore(score: number, handler: () => void): void;
    /**
     * Get the value of the current count down
     */
    export function countdown(): number;
    /**
     * Start a countdown of the given duration in seconds
     * @param duration the duration of the countdown, eg: 10
     */
    export function startCountdown(duration: number): void;
    /**
     * Change the running countdown by the given number of seconds
     * @param seconds the number of seconds the countdown should be changed by
     */
    export function changeCountdownBy(seconds: number): void;
    /**
     * Stop the current countdown and hides the timer display
     */
    export function stopCountdown(): void;
    /**
     * Run code when the countdown reaches 0. If this function
     * is not called then game.over() is called instead
     */
    export function onCountdownEnd(handler: () => void): void;
    /**
     * Replaces the image used to represent the player's lives. Images
     * should be no larger than 8x8
     */
    export function setLifeImage(image: Image): void;
    /**
     * Set whether life should be displayed
     * @param on if true, lives are shown; otherwise, lives are hidden
     */
    export function showLife(on: boolean): void;
    /**
     * Set whether score should be displayed
     * @param on if true, score is shown; otherwise, score is hidden
     */
    export function showScore(on: boolean): void;
    /**
     * Set whether countdown should be displayed
     * @param on if true, countdown is shown; otherwise, countdown is hidden
     */
    export function showCountdown(on: boolean): void;
    /**
     * Sets the color of the borders around the score, countdown, and life
     * elements. Defaults to 3
     * @param color The index of the color (0-15)
     */
    export function setBorderColor(color: number): void;
    /**
     * Sets the color of the background of the score, countdown, and life
     * elements. Defaults to 1
     * @param color The index of the color (0-15)
     */
    export function setBackgroundColor(color: number): void;
    /**
     * Sets the color of the text used in the score, countdown, and life
     * elements. Defaults to 3
     * @param color The index of the color (0-15)
     */
    export function setFontColor(color: number): void;
    /**
     * Get the current color of the borders around the score, countdown, and life
     * elements
     */
    export function borderColor(): number;
    /**
     * Get the current color of the background of the score, countdown, and life
     * elements
     */
    export function backgroundColor(): number;
    /**
     * Get the current color of the text usded in the score, countdown, and life
     * elements
     */
    export function fontColor(): number;
    /**
     * Splits the implementation of the player info from the user-facing APIs so that
     * we can reference this internally without causing the "multiplayer" part to show
     * up in the usedParts array of the user program's compile result. Make sure to
     * use the APIs on this class and not the PlayerInfo to avoid false-positives when
     * we detect if a game is multiplayer or not
     */
    export class PlayerInfoImpl {
        protected _player: number;
        bg: number;
        border: number;
        fc: number;
        x?: number;
        y?: number;
        left?: boolean;
        up?: boolean;
        constructor(player: number);
        private init;
        getState(): PlayerState;
        id(): number;
        score(): number;
        setScore(value: number): void;
        changeScoreBy(value: number): void;
        hasScore(): boolean;
        life(): number;
        setLife(value: number): void;
        changeLifeBy(value: number): void;
        hasLife(): boolean;
        onLifeZero(handler: () => void): void;
        onScore(score: number, handler: () => void): void;
        raiseLifeZero(gameOver: boolean): void;
    }
    export class PlayerInfo {
        protected _player: number;
        impl: PlayerInfoImpl;
        constructor(player: number);
        private init;
        /**
         * Returns the one-based number of the player
         */
        get number(): number;
        get bg(): number;
        set bg(value: number);
        get border(): number;
        set border(value: number);
        get fc(): number;
        set fc(value: number);
        get showScore(): boolean;
        set showScore(value: boolean);
        get showLife(): boolean;
        set showLife(value: boolean);
        get visibility(): Visibility;
        set visibility(value: Visibility);
        get showPlayer(): boolean;
        set showPlayer(value: boolean);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get left(): boolean;
        set left(value: boolean);
        get up(): boolean;
        set up(value: boolean);
        getState(): PlayerState;
        id(): number;
        /**
         * Get the player score
         */
        score(): number;
        /**
         * Set the player score
         */
        setScore(value: number): void;
        /**
         * Change the score of a player
         * @param value
         */
        changeScoreBy(value: number): void;
        hasScore(): boolean;
        /**
         * Get the player life
         */
        life(): number;
        /**
         * Set the player life
         */
        setLife(value: number): void;
        /**
         * Change the life of a player
         * @param value
         */
        changeLifeBy(value: number): void;
        /**
         * Return true if the given player currently has a value set for health,
         * and false otherwise.
         * @param player player to check life of
         */
        hasLife(): boolean;
        /**
         * Runs code when life reaches zero
         * @param handler
         */
        onLifeZero(handler: () => void): void;
        /**
         * Runs code once each time the score reaches a given value. This will also
         * run if the score "passes" the given value in either direction without ever
         * having the exact value (e.g. if score is changed by more than 1)
         *
         * @param score the score to fire the event on
         * @param handler code to run when the score reaches the given value
         */
        onScore(score: number, handler: () => void): void;
        drawPlayer(): void;
        drawScore(): void;
        drawLives(): void;
    }
    export const player2: PlayerInfo;
    export const player3: PlayerInfo;
    export const player4: PlayerInfo;
    export const player1: PlayerInfo;
    export {};
}
declare namespace keymap {
    /**
     * Sets the keyboard input map for the given player.
     * @param player The player number. 1 = Player1, etc.
     * @param up The key code for 'up'.
     * @param down The key code for 'down'
     * @param left The key code for 'left'
     * @param right The key code for 'right'
     * @param A The key code for 'A'
     * @param B The key code for 'B'
     */
    function setPlayerKeys(player: number, // player number is 1-based
    up: KeyCode, down: KeyCode, left: KeyCode, right: KeyCode, A: KeyCode, B: KeyCode): void;
    /**
     * Sets the keyboard input map for system keys.
     * @param screenshot The key code for 'screenshot'
     * @param gif The key code for 'gif'
     * @param menu The key code for 'menu'
     * @param reset The key code for 'reset'
     */
    function setSystemKeys(screenshot: KeyCode, gif: KeyCode, menu: KeyCode, reset: KeyCode): void;
    /**
     * Key codes
     */
    enum KeyCode {
        None = 0,
        Backspace = 8,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Ctrl = 17,
        Alt = 18,
        PauseBreak = 19,
        CapsLock = 20,
        Escape = 27,
        Space = 32,
        PageUp = 33,
        PageDown = 34,
        End = 35,
        Home = 36,
        LeftArrow = 37,
        UpArrow = 38,
        RightArrow = 39,
        DownArrow = 40,
        Insert = 45,
        Delete = 46,
        Zero = 48,
        One = 49,
        Two = 50,
        Three = 51,
        Four = 52,
        Five = 53,
        Six = 54,
        Seven = 55,
        Eight = 56,
        Nine = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        LeftWindowsKey = 91,
        RightWindowsKey = 92,
        Numpad0 = 96,
        Numpad1 = 97,
        Numpad2 = 98,
        Numpad3 = 99,
        Numpad4 = 100,
        Numpad5 = 101,
        Numpad6 = 102,
        Numpad7 = 103,
        Numpad8 = 104,
        Numpad9 = 105,
        Multiply = 106,
        Add = 107,
        Subtract = 109,
        DecimalPoint = 110,
        Divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NumLock = 144,
        ScrollLock = 145,
        SemiColon = 186,
        Equals = 187,
        Comma = 188,
        Dash = 189,
        Period = 190,
        ForwardSlash = 191,
        Tilde = 192,
        OpenBracket = 219,
        ClosedBracket = 221,
        SingleQuote = 222,
        MouseLeftButton = -1,
        MouseRightButton = -2,
        MouseCenterButton = -3
    }
}
declare namespace Math {
    /**
     * Returns a random boolean that is true the given percentage of the time.
     * @param percentage The percentage chance that the returned value will be true from 0 - 100
     */
    function percentChance(percentage: number): boolean;
    /**
     * Returns a random element from the given list
     * @param list The list to choose an element from
     */
    function pickRandom<T>(list: T[]): T;
    /**
     * Fast, 16 bit, seedable (pseudo) random generator.
     */
    class FastRandom {
        private lfsr;
        seed: number;
        /**
         * Create a new Fast Random generator
         * @param seed [Optional] initial seed between 0x0001 and 0xFFFF.
         */
        constructor(seed?: number);
        /**
         * @returns the next random number between 0x0001 and 0xFFFF inclusive
         */
        next(): number;
        /**
         * @param min the minimum value to generate
         * @param max the maximum value to generate
         * @returns a random value between min and max (inclusive). If min is greater than or equal to max, returns min.
         */
        randomRange(min: number, max: number): number;
        /**
         * Returns a random element from the given list
         * @param list The list to choose an element from
         */
        pickRandom<T>(list: T[]): T;
        /**
         * @returns a random boolean value
         */
        randomBool(): boolean;
        /**
         * @param percent the percentage chance that the returned value will be true from 0 - 100
         * @returns a boolean with approximately the given percent chance to be true or false
         */
        percentChance(percent: number): boolean;
        /**
         * Reset the state to the current seed
         */
        reset(): void;
    }
}
declare namespace performance {
}
declare namespace multiplayer {
    function init(): void;
    function initServer(): void;
    function initPlayerConnectionListeners(): void;
}
declare namespace mp {
    function postPresenceIcon(slot: number, im: Image, implicit?: boolean): void;
    function postReactionIcon(slot: number, im: Image, implicit?: boolean): void;
}
declare namespace game {
}
declare namespace game {
    /**
     * Ask the player for a number value.
     * @param message The message to display on the text-entry screen
     * @param answerLength The maximum number of digits the user can enter (1 - 10)
     */
    function askForNumber(message: any, answerLength?: number): number;
    class NumberPrompt {
        theme: PromptTheme;
        message: string;
        answerLength: number;
        result: string;
        private cursor;
        private confirmButton;
        private numbers;
        private inputs;
        private confirmPressed;
        private cursorRow;
        private cursorColumn;
        private hasDecimal;
        private inputIndex;
        private blink;
        private frameCount;
        constructor(theme?: PromptTheme);
        show(message: string, answerLength: number): number;
        private draw;
        private drawPromptText;
        private drawInputarea;
        private drawNumpad;
        private drawBottomBar;
        private updateButtons;
        private updateCursor;
        private updateSelectedInput;
        private updateKeyboard;
        private drawInput;
        private registerHandlers;
        private moveVertical;
        private moveHorizontal;
        private confirm;
        private delete;
        private changeInputIndex;
    }
}
declare namespace sprites {
    interface Obstacle {
        x: number;
        y: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: number;
        height: number;
        layer: number;
        image: Image;
        tileIndex: number;
    }
    class StaticObstacle implements Obstacle {
        layer: number;
        image: Image;
        tileIndex: number;
        top: number;
        left: number;
        constructor(image: Image, top: number, left: number, layer: number, tileIndex?: number);
        get x(): number;
        get y(): number;
        get height(): number;
        get width(): number;
        get bottom(): number;
        get right(): number;
    }
}
declare namespace effects {
    interface BackgroundEffect {
        startScreenEffect(): void;
    }
    class ParticleEffect {
        protected sourceFactory: (anchor: particles.ParticleAnchor, pps: number) => particles.ParticleSource;
        protected defaultRate: number;
        protected defaultLifespan: number;
        constructor(defaultParticlesPerSecond: number, defaultLifespan: number, sourceFactory: (anchor: particles.ParticleAnchor, particlesPerSecond: number) => particles.ParticleSource);
        /**
         * Attaches a new particle animation to the sprite or anchor for a short period of time
         * @param anchor
         * @param duration
         * @param particlesPerSecond
         */
        start(anchor: particles.ParticleAnchor, duration?: number, particlesPerSecond?: number, relativeToCamera?: boolean): void;
        /**
         * Destroy the provided sprite with an effect
         * @param sprite
         * @param duration how long the sprite will remain on the screen. If set to 0 or undefined,
         *                  uses the default rate for this effect.
         * @param particlesPerSecond
         */
        destroy(anchor: Sprite, duration?: number, particlesPerSecond?: number): void;
    }
    class ScreenEffect extends ParticleEffect implements BackgroundEffect {
        protected source: particles.ParticleSource;
        protected sceneDefaultRate: number;
        constructor(anchorDefault: number, sceneDefault: number, defaultLifespan: number, sourceFactory: (anchor: particles.ParticleAnchor, particlesPerSecond: number) => particles.ParticleSource);
        /**
         * Creates a new effect that occurs over the entire screen
         * @param particlesPerSecond
         * @param duration
         */
        startScreenEffect(duration?: number, particlesPerSecond?: number): void;
        /**
         * If this effect is currently occurring as a full screen effect, stop producing particles and end the effect
         * @param particlesPerSecond
         */
        endScreenEffect(): void;
    }
    /**
     * Removes all effects attached to the given anchor
     * @param anchor the anchor to remove effects from
     */
    function clearParticles(anchor: Sprite | particles.ParticleAnchor): void;
    const spray: ParticleEffect;
    const trail: ParticleEffect;
    const fountain: ParticleEffect;
    const confetti: ScreenEffect;
    const hearts: ScreenEffect;
    const smiles: ScreenEffect;
    const rings: ParticleEffect;
    const fire: ParticleEffect;
    const warmRadial: ParticleEffect;
    const coolRadial: ParticleEffect;
    const halo: ParticleEffect;
    const ashes: ParticleEffect;
    const disintegrate: ParticleEffect;
    const blizzard: ScreenEffect;
    const bubbles: ScreenEffect;
    const starField: ScreenEffect;
    const clouds: ScreenEffect;
    const none: ScreenEffect;
}
declare namespace particles {
    /**
     * @param slices number of cached sin values to make
     * @returns array of cached sin values between 0 and 360 degrees
     */
    function cacheSin(slices: number): Fx8[];
    /**
     * @param slices number of cached cos values to make
     * @returns array of cached cos values between 0 and 360 degrees
     */
    function cacheCos(slices: number): Fx8[];
    /**
     * A factory for generating particles
     */
    class ParticleFactory {
        constructor();
        /**
         * Generate a particle at the position of the given anchor
         * @param anchor
         */
        createParticle(anchor: ParticleAnchor): Particle;
        /**
         * Draw the given particle at the given location
         * @param particle
         * @param x
         * @param y
         */
        drawParticle(particle: Particle, x: Fx8, y: Fx8): void;
    }
    /**
     * A factory for creating a spray of particles
     */
    class SprayFactory extends ParticleFactory {
        protected speed: Fx8;
        protected minAngle: number;
        protected spread: number;
        constructor(speed: number, centerDegrees: number, arcDegrees: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(particle: Particle, x: Fx8, y: Fx8): void;
        setSpeed(pixelsPerSecond: number): void;
        setDirection(centerDegrees: number, arcDegrees: number): void;
    }
    /**
     * A factory for creating particles within rectangular area
     */
    class AreaFactory extends SprayFactory {
        xRange: number;
        yRange: number;
        minLifespan: number;
        maxLifespan: number;
        protected galois: Math.FastRandom;
        constructor(xRange: number, yRange: number, minLifespan?: number, maxLifespan?: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
    }
    /**
     * A factory for creating a trail that is emitted by sprites.
     */
    class TrailFactory extends ParticleFactory {
        minLifespan: number;
        maxLifespan: number;
        xRange: number;
        yRange: number;
        protected galois: Math.FastRandom;
        constructor(sprite: ParticleAnchor, minLifespan: number, maxLifespan: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
    }
    /**
     * A factory for creating particles with the provided shapes fall down the screen.
     *
     * Any pixels assigned to 0xF (black) in the provided shape will be replaced with a
     * random color for each particle.
     */
    class ShapeFactory extends AreaFactory {
        protected sources: Image[];
        protected ox: Fx8;
        protected oy: Fx8;
        constructor(xRange: number, yRange: number, source: Image);
        /**
         * Add another possible shape for a particle to display as
         * @param shape
         */
        addShape(shape: Image): void;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
        createParticle(anchor: ParticleAnchor): Particle;
    }
    class ConfettiFactory extends ShapeFactory {
        constructor(xRange: number, yRange: number);
    }
    class FireFactory extends ParticleFactory {
        protected galois: Math.FastRandom;
        protected minRadius: number;
        protected maxRadius: number;
        constructor(radius: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
    }
    class RadialFactory extends ParticleFactory {
        protected r: Fx8;
        protected speed: Fx8;
        protected t: number;
        protected spread: number;
        protected galois: Math.FastRandom;
        protected colors: number[];
        constructor(radius: number, speed: number, spread: number, colors?: number[]);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
        setRadius(r: number): void;
        setSpeed(s: number): void;
        setSpread(s: number): void;
    }
    class AshFactory extends AreaFactory {
        private colors;
        constructor(anchor: ParticleAnchor, updateImage?: boolean, percentKept?: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
    }
    class BubbleFactory extends ParticleFactory {
        minLifespan: number;
        maxLifespan: number;
        xRange: number;
        yRange: number;
        protected galois: Math.FastRandom;
        protected states: Image[];
        constructor(sprite: ParticleAnchor, minLifespan: number, maxLifespan: number);
        get stateCount(): number;
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
    }
    class StarFactory extends ParticleFactory {
        protected galois: Math.FastRandom;
        protected possibleColors: number[];
        minRate: number;
        maxRate: number;
        images: Image[];
        constructor(possibleColors?: number[], minRate?: number, maxRate?: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: Particle, x: Fx8, y: Fx8): void;
    }
    class CloudFactory extends ParticleFactory {
        minRate: number;
        maxRate: number;
        clouds: Image[];
        camera: scene.Camera;
        constructor(minRate?: number, maxRate?: number);
        createParticle(anchor: ParticleAnchor): Particle;
        drawParticle(p: particles.Particle, x: Fx8, y: Fx8): void;
    }
}
declare namespace particles {
    /**
     * A single particle
     */
    class Particle {
        _x: Fx8;
        _y: Fx8;
        vx: Fx8;
        vy: Fx8;
        lifespan: number;
        next: Particle;
        data?: number;
        color?: number;
    }
    /**
     * An anchor for a Particle to originate from
     */
    interface ParticleAnchor {
        x: number;
        y: number;
        vx?: number;
        vy?: number;
        width?: number;
        height?: number;
        image?: Image;
        flags?: number;
        setImage?: (i: Image) => void;
    }
    /**
     * A source of particles
     */
    class ParticleSource extends sprites.BaseSprite {
        /**
         * A relative ranking of this sources priority
         * When necessary, a source with a lower priority will
         * be culled before a source with a higher priority.
         */
        priority: number;
        _dt: number;
        /**
         * The anchor this source is currently attached to
         */
        anchor: ParticleAnchor;
        /**
         * Time to live in milliseconds. The lifespan decreases by 1 on each millisecond
         * and the source gets destroyed when it reaches 0.
         */
        lifespan: number;
        protected pFlags: number;
        protected head: Particle;
        protected timer: number;
        protected period: number;
        protected _factory: ParticleFactory;
        protected ax: Fx8;
        protected ay: Fx8;
        /**
         * @param anchor to emit particles from
         * @param particlesPerSecond rate at which particles are emitted
         * @param factory [optional] factory to generate particles with; otherwise,
         */
        constructor(anchor: ParticleAnchor, particlesPerSecond: number, factory?: ParticleFactory);
        __draw(camera: scene.Camera): void;
        _update(dt: number): void;
        _prune(): void;
        /**
         * Sets the acceleration applied to the particles
         */
        setAcceleration(ax: number, ay: number): void;
        /**
         * Enables or disables particles
         * @param on
         */
        setEnabled(on: boolean): void;
        /**
         * Sets whether the particle source is drawn relative to the camera or not
         * @param on
         */
        setRelativeToCamera(on: boolean): void;
        get enabled(): boolean;
        /**
         * Set whether this source is currently enabled (emitting particles) or not
         */
        set enabled(v: boolean);
        /**
         * Destroy the source
         */
        destroy(): void;
        /**
         * Clear all particles emitted from this source
         */
        clear(): void;
        /**
         * Set a anchor for particles to be emitted from
         * @param anchor
         */
        setAnchor(anchor: ParticleAnchor): void;
        /**
         * Sets the number of particle created per second
         * @param particlesPerSecond
         */
        setRate(particlesPerSecond: number): void;
        get factory(): ParticleFactory;
        /**
         * Sets the particle factory
         * @param factory
         */
        setFactory(factory: ParticleFactory): void;
        protected updateParticle(p: Particle, fixedDt: Fx8): void;
        protected drawParticle(p: Particle, screenLeft: Fx8, screenTop: Fx8): void;
    }
    const defaultFactory: SprayFactory;
    /**
     * Creates a new source of particles attached to a sprite
     * @param sprite
     * @param particlesPerSecond number of particles created per second
     */
    function createParticleSource(sprite: Sprite, particlesPerSecond: number): ParticleSource;
    /**
     * A source of particles where particles will occasionally change speed based off of each other
     */
    class FireSource extends ParticleSource {
        protected galois: Math.FastRandom;
        constructor(anchor: ParticleAnchor, particlesPerSecond: number, factory?: ParticleFactory);
        updateParticle(p: Particle, fixedDt: Fx8): void;
    }
    /**
     * A source of particles where the particles oscillate horizontally, and occasionally change
     * between a given number of defined states
     */
    class BubbleSource extends ParticleSource {
        protected maxState: number;
        protected galois: Math.FastRandom;
        stateChangePercentage: number;
        oscillationPercentage: number;
        constructor(anchor: ParticleAnchor, particlesPerSecond: number, maxState: number, factory?: ParticleFactory);
        updateParticle(p: Particle, fixedDt: Fx8): void;
    }
    function clearAll(): void;
    /**
     * Stop all particle sources from creating any new particles
     */
    function disableAll(): void;
    /**
     * Allow all particle sources to create any new particles
     */
    function enableAll(): void;
}
declare class PhysicsEngine {
    constructor();
    /**
     * Adds sprite to the physics
     * @param sprite
     */
    addSprite(sprite: Sprite): void;
    removeSprite(sprite: Sprite): void;
    /** move a single sprite **/
    moveSprite(s: Sprite, dx: Fx8, dy: Fx8): void;
    draw(): void;
    /** Apply physics and collisions to all sprites **/
    move(dt: number): void;
    setMaxSpeed(speed: number): void;
    overlaps(sprite: Sprite): Sprite[];
}
declare const MAX_TIME_STEP = 100;
declare const MIN_MOVE_GAP: Fx8;
declare const SPRITE_NO_TILE_OVERLAPS: number;
declare const SPRITE_NO_WALL_COLLISION: number;
declare const SPRITE_NO_SPRITE_OVERLAPS: number;
declare class MovingSprite {
    sprite: Sprite;
    cachedVx: Fx8;
    cachedVy: Fx8;
    dx: Fx8;
    dy: Fx8;
    xStep: Fx8;
    yStep: Fx8;
    constructor(sprite: Sprite, cachedVx: Fx8, cachedVy: Fx8, dx: Fx8, dy: Fx8, xStep: Fx8, yStep: Fx8);
}
/**
 * A physics engine that does simple AABB bounding box check
 */
declare class ArcadePhysicsEngine extends PhysicsEngine {
    protected sprites: Sprite[];
    protected map: sprites.SpriteMap;
    protected maxVelocity: Fx8;
    protected maxNegativeVelocity: Fx8;
    protected minSingleStep: Fx8;
    protected maxSingleStep: Fx8;
    constructor(maxVelocity?: number, minSingleStep?: number, maxSingleStep?: number);
    get maxSpeed(): number;
    set maxSpeed(v: number);
    get minStep(): number;
    set minStep(v: number);
    get maxStep(): number;
    set maxStep(v: number);
    setMaxSpeed(v: number): void;
    addSprite(sprite: Sprite): void;
    removeSprite(sprite: Sprite): void;
    draw(): void;
    move(dt: number): void;
    protected createMovingSprite(sprite: Sprite, dtMs: number, dt2: number): MovingSprite;
    protected spriteCollisions(movedSprites: MovingSprite[], handlers: scene.OverlapHandler[]): void;
    protected screenEdgeCollisions(movingSprite: MovingSprite, bounce: number, camera: scene.Camera): void;
    protected tilemapCollisions(movingSprite: MovingSprite, tm: tiles.TileMap): void;
    /**
     * Given a sprite and a list of overlapped tiles, checks the overlap handlers and calls
     * the ones appropriate to the sprite and tile kind.
     * @param sprite the sprite
     * @param overlappedTiles the list of tiles the sprite is overlapping
     */
    protected tilemapOverlaps(sprite: Sprite, overlappedTiles: tiles.Location[]): void;
    /**
     * Returns sprites that overlap with the given sprite. If type is non-zero, also filter by type.
     * @param sprite
     * @param layer
     */
    overlaps(sprite: Sprite): Sprite[];
    /** moves a sprite explicitly outside of the normal velocity changes **/
    moveSprite(s: Sprite, dx: Fx8, dy: Fx8): void;
    protected canResolveClipping(s: Sprite, tm: tiles.TileMap): boolean;
    protected constrain(v: Fx8): Fx8;
}
declare namespace game {
    interface PromptTheme {
        colorPrompt: number;
        colorInput: number;
        colorInputHighlighted: number;
        colorInputText: number;
        colorAlphabet: number;
        colorCursor: number;
        colorBackground: number;
        colorBottomBackground: number;
        colorBottomText: number;
    }
    /**
     * Ask the player for a string value.
     * @param message The message to display on the text-entry screen
     * @param answerLength The maximum number of characters the user can enter (1 - 24)
     */
    function askForString(message: any, answerLength?: number): string;
    class Prompt {
        theme: PromptTheme;
        message: string;
        answerLength: number;
        result: string;
        private cursor;
        private shiftButton;
        private confirmButton;
        private letters;
        private inputs;
        private confirmPressed;
        private cursorRow;
        private cursorColumn;
        private upper;
        private inputIndex;
        private blink;
        private frameCount;
        constructor(theme?: PromptTheme);
        show(message: string, answerLength: number): string;
        private draw;
        private drawPromptText;
        private drawInputarea;
        private drawKeyboard;
        private drawBottomBar;
        private updateButtons;
        private updateCursor;
        private updateSelectedInput;
        private updateKeyboard;
        private drawInput;
        private registerHandlers;
        private moveVertical;
        private moveHorizontal;
        private confirm;
        private delete;
        private changeInputIndex;
    }
}
declare namespace sprites {
    export class RenderText {
        text: string;
        linebreaks: number[];
        font: image.Font;
        height: number;
        width: number;
        constructor(text: string, maxWidth: number);
        draw(canvas: Image, left: number, top: number, color: number, lineStart?: number, lineEnd?: number): void;
        drawLine(canvas: Image, left: number, top: number, lineIndex: number, color: number): void;
        drawPartial(canvas: Image, left: number, top: number, color: number, lengthToDraw: number, lineStart?: number, lineEnd?: number): boolean;
        drawPartialLine(canvas: Image, left: number, top: number, lineIndex: number, color: number, currentTextIndex: number, lengthToDraw: number): number;
        calculatePartialHeight(startLine: number, lengthToDraw: number): number;
        lineHeight(): number;
        setMaxWidth(maxWidth: number): void;
        printableCharacters(): number;
        lineEnd(lineIndex: number): number;
        lineStart(lineIndex: number): number;
        widthOfLine(lineIndex: number, fullTextOffset?: number): number;
        widthOfLines(lineStartIndex: number, lineEndIndex: number, offset?: number): number;
    }
    enum RenderTextAnimationState {
        Idle = 0,
        Printing = 1,
        Pausing = 2
    }
    export class RenderTextAnimation {
        text: RenderText;
        height: number;
        protected tickPeriod: number;
        protected state: RenderTextAnimationState;
        protected pageLine: number;
        protected timer: number;
        protected pauseMillis: number;
        protected onTickCB: () => void;
        protected onEndCB: () => void;
        protected prevOffset: number;
        constructor(text: RenderText, height: number);
        start(): void;
        numPages(): number;
        setPauseLength(millis: number): void;
        setTextSpeed(charactersPerSecond: number): void;
        currentHeight(): number;
        currentWidth(): number;
        currentOffset(): number;
        isDone(): boolean;
        cancel(): void;
        onCharacterPrinted(cb: () => void): void;
        onAnimationEnd(cb: () => void): void;
        draw(canvas: Image, left: number, top: number, color: number): void;
    }
    export {};
}
declare namespace scene {
    class Renderable extends sprites.BaseSprite {
        protected handler: (target: Image, camera: Camera) => void;
        protected shouldBeVisible: () => boolean;
        constructor(handler: (target: Image, camera: Camera) => void, shouldBeVisible: () => boolean, z: number);
        __visible(): boolean;
        __drawCore(camera: scene.Camera): void;
        destroy(): void;
    }
    function createRenderable(z: number, handler: (target: Image, camera: Camera) => void, shouldBeVisible?: () => boolean): Renderable;
}
interface SparseArray<T> {
    [index: number]: T;
}
/**
 * Control the background, tiles and camera
 */
declare namespace scene {
    enum Flag {
        NeedsSorting = 1,// indicates the sprites in the scene need to be sorted before rendering
        SeeThrough = 2,// if set, render the previous scene 'below' this one as the background
        IsRendering = 4
    }
    class SpriteHandler {
        kind: number;
        handler: (sprite: Sprite) => void;
        constructor(kind: number, handler: (sprite: Sprite) => void);
    }
    class OverlapHandler {
        kind: number;
        otherKind: number;
        handler: (sprite: Sprite, otherSprite: Sprite) => void;
        constructor(kind: number, otherKind: number, handler: (sprite: Sprite, otherSprite: Sprite) => void);
    }
    class TileWallHandler {
        spriteKind: number;
        handler: (sprite: Sprite, location: tiles.Location) => void;
        constructor(spriteKind: number, handler: (sprite: Sprite, location: tiles.Location) => void);
    }
    class TileOverlapHandler {
        spriteKind: number;
        tileKind: Image;
        handler: (sprite: Sprite, location: tiles.Location) => void;
        constructor(spriteKind: number, tileKind: Image, handler: (sprite: Sprite, location: tiles.Location) => void);
    }
    class GameForeverHandler {
        handler: () => void;
        lock: boolean;
        constructor(handler: () => void);
    }
    const CONTROLLER_PRIORITY = 8;
    const UPDATE_CONTROLLER_PRIORITY = 13;
    const FOLLOW_SPRITE_PRIORITY = 14;
    const PHYSICS_PRIORITY = 15;
    const ANIMATION_UPDATE_PRIORITY = 15;
    const CONTROLLER_SPRITES_PRIORITY = 13;
    const UPDATE_INTERVAL_PRIORITY = 19;
    const UPDATE_PRIORITY = 20;
    const PRE_RENDER_UPDATE_PRIORITY = 55;
    const RENDER_BACKGROUND_PRIORITY = 60;
    const RENDER_SPRITES_PRIORITY = 90;
    const RENDER_DIAGNOSTICS_PRIORITY = 150;
    const MULTIPLAYER_SCREEN_PRIORITY = 190;
    const UPDATE_SCREEN_PRIORITY = 200;
    const MULTIPLAYER_POST_SCREEN_PRIORITY = 210;
    const ON_PAINT_Z = -20;
    const TILE_MAP_Z = -1;
    const SPRITE_Z = 0;
    const ON_SHADE_Z = 80;
    const HUD_Z = 100;
    class Scene {
        protected previousScene?: Scene;
        eventContext: control.EventContext;
        background: Background;
        tileMap: tiles.TileMap;
        allSprites: SpriteLike[];
        private spriteNextId;
        spritesByKind: SparseArray<sprites.SpriteSet>;
        physicsEngine: PhysicsEngine;
        camera: scene.Camera;
        flags: number;
        destroyedHandlers: SpriteHandler[];
        createdHandlers: SpriteHandler[];
        overlapHandlers: OverlapHandler[];
        overlapMap: SparseArray<number[]>;
        tileOverlapHandlers: TileOverlapHandler[];
        collisionHandlers: SpriteHandler[][];
        wallCollisionHandlers: TileWallHandler[];
        gameForeverHandlers: GameForeverHandler[];
        particleSources: particles.ParticleSource[];
        controlledSprites: controller.ControlledSprite[][];
        controllerConnectionState: boolean[];
        followingSprites: sprites.FollowingSprite[];
        buttonEventHandlers: controller.ButtonEventHandlerState[];
        private _millis;
        private _data;
        static initializers: ((scene: Scene) => void)[];
        constructor(eventContext: control.EventContext, previousScene?: Scene);
        init(): void;
        get data(): any;
        /**
         * Gets the elapsed time in the scene
         */
        millis(): number;
        addSprite(sprite: SpriteLike): void;
        destroy(): void;
        /**
         * Renders the current frame as an image
         */
        render(): void;
    }
}
/**
 * Control the background, tiles and camera
 */
declare enum CameraProperty {
    X = 0,
    Y = 1,
    Left = 2,
    Right = 3,
    Top = 4,
    Bottom = 5
}
declare namespace scene {
    /**
     * Get the width of the screen in pixels
     */
    function screenWidth(): number;
    /**
     * Gets the height of the screen in pixels
     */
    function screenHeight(): number;
    /**
     * Set the game background color
     * @param color
     */
    function setBackgroundColor(color: number): void;
    /**
     * Get the game background color
     * @param color
     */
    function backgroundColor(): number;
    /**
     * Set a picture as the background
     */
    function setBackgroundImage(img: Image): void;
    /**
     * Get the current background image
     */
    function backgroundImage(): Image;
    /**
     * Adds a moving background layer
     * @param distance distance of the layer which determines how fast it moves, eg: 10
     * @param img
     */
    function addBackgroundLayer(image: Image, distance?: number, alignment?: BackgroundAlignment): void;
    /**
     * Set the map for placing tiles in the scene
     * @param map
     * @param scale
     */
    function setTileMapLevel(map: tiles.TileMapData): void;
    /**
    * Shake the camera
    * @param sprite
    */
    function cameraShake(amplitude?: number, duration?: number): void;
    /**
     * Set the game camera to follow a sprite
     * @param sprite
     */
    function cameraFollowSprite(sprite: Sprite): void;
    /**
     * Moves the camera center to a coordinate position
     * @param sprite
     */
    function centerCameraAt(x: number, y: number): void;
    /**
     * Returns the x coordinate of the camera (the left of the screen)
     */
    function cameraLeft(): number;
    /**
     * Returns the y coordinate of the camera (the top of the screen)
     */
    function cameraTop(): number;
    /**
     * Returns the specified camera property
     * @param property The property to get
     */
    function cameraProperty(property: CameraProperty): number;
}
declare namespace sprites {
    /**
     * Run code when a certain kind of sprite is created
     * @param kind
     * @param sprite
     */
    function onCreated(kind: number, handler: (sprite: Sprite) => void): void;
    /**
     * Run code when a certain kind of sprite is destroyed
     * @param kind
     * @param sprite
     */
    function onDestroyed(kind: number, handler: (sprite: Sprite) => void): void;
    /**
     * Run code when two kinds of sprites overlap
     */
    function onOverlap(kind: number, otherKind: number, handler: (sprite: Sprite, otherSprite: Sprite) => void): void;
}
declare namespace scene {
    /**
     * Run code when a certain kind of sprite overlaps a tile
     * @param kind
     * @param tile
     * @param handler
     */
    function onOverlapTile(kind: number, tile: Image, handler: (sprite: Sprite, location: tiles.Location) => void): void;
    /**
     * Run code when a certain kind of sprite hits a wall
     * @param kind
     * @param handler
     */
    function onHitWall(kind: number, handler: (sprite: Sprite, location: tiles.Location) => void): void;
}
declare namespace sprites {
    /**
     * Gets the "kind" of sprite
     */
    function _spriteKind(kind: number): number;
    /**
     * Gets the sprite type
     */
    function _spriteType(kind: number): number;
}
declare namespace SpriteKind {
    function create(): number;
    const Player: number;
    const Projectile = 1;
    const Food: number;
    const Enemy: number;
}
declare namespace sprites {
    class SpriteMap {
        private cellWidth;
        private cellHeight;
        private rowCount;
        private columnCount;
        private buckets;
        constructor();
        /**
         * Returns a potential list of neighbors
         */
        neighbors(sprite: Sprite): Sprite[];
        /**
         * Gets the overlaping sprites if any
         * @param sprite
         */
        overlaps(sprite: Sprite): Sprite[];
        draw(): void;
        /**
         * Recompute hashes for all objects
         */
        resizeBuckets(sprites: Sprite[]): void;
        clear(): void;
        private key;
        private insertAtKey;
        insertAABB(sprite: Sprite): void;
        private mergeAtKey;
        toString(): string;
    }
}
declare namespace sprites {
    class BaseSpriteSayRenderer {
        text: string;
        fgColor: number;
        bgColor: number;
        constructor(text: string, fgColor: number, bgColor: number);
        draw(screen: Image, camera: scene.Camera, owner: Sprite): void;
        update(dt: number, camera: scene.Camera, owner: Sprite): void;
        destroy(): void;
    }
    class SpriteSayRenderer extends BaseSpriteSayRenderer {
        static drawSayFrame(textLeft: number, textTop: number, textWidth: number, textHeight: number, speakerX: number, speakerY: number, color: number, canvas: Image): void;
        protected renderText: RenderText;
        protected animation: RenderTextAnimation;
        constructor(text: string, fg: number, bg: number, animated: boolean, timeOnScreen: number);
        draw(screen: Image, camera: scene.Camera, owner: Sprite): void;
    }
    class LegacySpriteSayRenderer extends BaseSpriteSayRenderer {
        protected sayBubbleSprite: Sprite;
        protected updateSay: (dt: number, camera: scene.Camera) => void;
        constructor(text: string, timeOnScreen: number, owner: Sprite, fg: number, bg: number);
        update(dt: number, camera: scene.Camera, owner: Sprite): void;
        destroy(): void;
    }
}
declare namespace sprites {
    class SpriteSet {
        private _sprites;
        /**
         * Create a new set from an array of sprites
         * @param sprites
         */
        static createFromArray(sprites: Sprite[]): SpriteSet;
        constructor();
        /**
         * Gets the number of sprites in the set
         */
        get length(): number;
        /**
         * Gets the snapshot of the current list of sprites
         */
        sprites(): Sprite[];
        /**
         * Adds the sprite, returns true if added; false if the sprite was already in the set
         * @param sprite
         */
        add(sprite: Sprite): boolean;
        /**
         * Adds sprite and removes from old set. Returns true if sprite was in old set and not in new set.
         * @param oldSet
         * @param sprite
         */
        addFrom(oldSet: SpriteSet, sprite: Sprite): boolean;
        /**
         * Removes sprite from set. Returns true if the sprite was in the set
         * @param sprite
         */
        remove(sprite: Sprite): boolean;
        /**
         * Checks if the sprite is part of the set
         * @param sprite
         */
        contains(sprite: Sprite): boolean;
        /**
         * Removes all the sprites from the set
        */
        clear(): void;
        /**
         * Removes the last sprite in the set
         */
        pop(): Sprite;
        toString(): string;
    }
}
declare namespace scene.systemMenu {
    enum CardState {
        Selected = 0,
        Active = 1,
        None = 2
    }
    interface MenuTheme {
        cardSpacing: number;
        cardWidth: number;
        cardsPerRow: number;
        padding: number;
        cardsTop: number;
        infoTop: number;
        headerText: string;
        headerFont: image.Font;
        infoFont: image.Font;
        selectedCard: Image;
        activeCard: Image;
        basicCard: Image;
    }
    class MenuOption {
        protected iconImage: Image;
        getText: () => string;
        action: () => void;
        protected card: Sprite;
        protected icon: Sprite;
        protected top: number;
        protected state: CardState;
        protected theme: MenuTheme;
        constructor(iconImage: Image, getText: () => string, action: () => void);
        show(): void;
        position(left: number, top: number): void;
        setOffset(offset: number): void;
        setTheme(theme: MenuTheme): void;
        setState(state: CardState): void;
        dispose(): void;
        protected updateCard(): void;
    }
    class PauseMenu {
        protected generator: () => MenuOption[];
        protected options: MenuOption[];
        protected theme: MenuTheme;
        protected selection: number;
        protected scrollRow: number;
        protected scrollTarget: number;
        protected scrollOffset: number;
        constructor(generator: () => MenuOption[], theme?: MenuTheme);
        show(): void;
        onUpdate(): void;
        setSelection(selection: number): void;
        drawText(): void;
        dispose(): void;
        protected updateScrollTarget(): void;
    }
    function closeMenu(): void;
    function buildOptionList(): MenuOption[];
    function buildMenuTheme(cardWidth: number, cardSpacing: number, infoFont?: image.Font, headerFont?: image.Font): MenuTheme;
    function addEntry(name: () => string, clickHandler: () => void, icon: Image): void;
    function register(): void;
    function showSystemMenu(): void;
    function isVisible(): boolean;
}
declare namespace scene.systemMenu {
    const CARD_NORMAL: Image;
    const CARD_SELECTED: Image;
    const CARD_ACTIVE: Image;
    const VOLUME_UP_ICON: Image;
    const BRIGHTNESS_DOWN_ICON: Image;
    const CLOSE_MENU_ICON: Image;
    const VOLUME_DOWN_ICON: Image;
    const SLEEP_ICON: Image;
    const CONSOLE_ICON: Image;
    const BRIGHTNESS_UP_ICON: Image;
    const STATS_ICON: Image;
}
declare enum DialogLayout {
    Bottom = 0,
    Left = 1,
    Right = 2,
    Top = 3,
    Center = 4,
    Full = 5
}
declare namespace game {
    export class BaseDialog {
        image: Image;
        frame: Image;
        cursor: Image;
        columns: number;
        rows: number;
        unit: number;
        innerLeft: number;
        innerTop: number;
        cursorCount: number;
        font: image.Font;
        textColor: number;
        constructor(width: number, height: number, frame?: Image, font?: image.Font, cursor?: Image);
        resize(width: number, height: number, frame?: Image, font?: image.Font, cursor?: Image): void;
        update(): void;
        setText(rawString: string): void;
        drawTextCore(): void;
        drawCursorRow(): void;
        protected drawBorder(): void;
        private fastFill;
        protected clearInterior(): void;
        protected drawPartial(index: number, colTo: number, rowTo: number): void;
        protected cursorRowHeight(): number;
        protected rowHeight(): number;
        protected textAreaWidth(): number;
        protected textAreaHeight(): number;
        protected setFont(font: image.Font): void;
    }
    export class Dialog extends BaseDialog {
        chunks: string[][];
        chunkIndex: number;
        constructor(width: number, height: number, frame?: Image, font?: image.Font, cursor?: Image);
        hasNext(): boolean;
        hasPrev(): boolean;
        nextPage(): void;
        prevPage(): void;
        chunkText(str: string): string[][];
        setText(rawString: string): void;
        drawTextCore(): void;
    }
    export class SplashDialog extends game.BaseDialog {
        text: string;
        subtext: string;
        timer: number;
        offset: number;
        maxOffset: number;
        maxSubOffset: number;
        constructor(width: number, height: number);
        private updateFont;
        setText(text: string): void;
        setSubtext(sub: string): void;
        drawTextCore(): void;
    }
    export class GameOverPlayerScore {
        player: number;
        value: number;
        winner: boolean;
        str: string;
        constructor(player: number, value: number, winner: boolean);
    }
    enum GameOverDialogFlags {
        NONE = 0,
        WIN = 1,
        HAS_BEST = 2,
        NEW_BEST = 4,
        MULTIPLAYER = 8,
        HAS_SCORES = 16
    }
    export class GameOverDialog extends game.BaseDialog {
        protected message: string;
        protected judged: boolean;
        protected scores: GameOverPlayerScore[];
        protected bestScore?: number;
        protected winnerOverride?: number;
        protected cursorOn: boolean;
        protected flags: GameOverDialogFlags;
        protected height: number;
        get isWinCondition(): boolean;
        get isJudgedGame(): boolean;
        get hasScores(): boolean;
        get hasBestScore(): boolean;
        get isNewBestScore(): boolean;
        get isMultiplayerGame(): boolean;
        constructor(win: boolean, message: string, judged: boolean, scores: GameOverPlayerScore[], bestScore?: number, winnerOverride?: number);
        displayCursor(): void;
        update(): void;
        drawMessage(): void;
        drawScores(): void;
        drawBestScore(): void;
        drawTextCore(): void;
    }
    /**
     * Show a long text string in a dialog box that will scroll
     * using the "A" or "down" buttons. The previous section of the
     * text is shown using the "up" button. This function
     * halts execution until the last page of text is dismissed.
     *
     * @param str The text to display
     * @param layout The layout to use for the dialog box
     */
    export function showLongText(str: any, layout: DialogLayout): void;
    /**
     * Change the default dialog frame to a new image. Dialog frames
     * are divided into three rows and three columns and are used to define
     * the outer frame of the dialog box.
     *
     * @param frame A square image with a width and height divisible by three
     */
    export function setDialogFrame(frame: Image): void;
    /**
     * Change the default image used for the cursor that appears in the
     * bottom left of the dialog box.
     *
     * @param cursor The image to use for the cursor
     */
    export function setDialogCursor(cursor: Image): void;
    /**
     * Change the color for the text in dialog boxes.
     *
     * @param color The index of the color 0-15
     */
    export function setDialogTextColor(color: number): void;
    export function setDialogFont(font: image.Font): void;
    /**
     * Show a title and an optional subtitle menu
     * @param title
     * @param subtitle
     */
    export function splash(title: any, subtitle?: any): void;
    export {};
}
declare namespace texteffects {
    enum TextEffectKind {
        None = 0,
        Shake = 1,
        Wave = 2
    }
    function getTextEffect(e: TextEffectKind): TextEffect;
    class TextEffect {
        getState: (index?: number, state?: TextEffectState) => TextEffectState;
        constructor(getState: (index?: number, state?: TextEffectState) => TextEffectState);
    }
    const shake: TextEffect;
    const wave: TextEffect;
    /**
     * A text sprite on the screen
     **/
    class TextSprite {
        _str: string;
        _font: image.Font;
        _color: number;
        _effect: TextEffect;
        _state: TextEffectState[];
        get color(): number;
        get state(): TextEffectState[];
        constructor(str: string, font: image.Font, color: number, effect?: TextEffect);
        updateState(): void;
        draw(image: Image, x: number, y: number, start?: number, length?: number): void;
    }
}
declare enum TileScale {
    Four = 2,
    Eight = 3,
    Sixteen = 4,
    ThirtyTwo = 5
}
declare namespace tiles {
    /**
     * A (col, row) location in the tilemap
     **/
    class Location {
        protected _row: number;
        protected _col: number;
        constructor(col: number, row: number, map: TileMap);
        get tileMap(): TileMap;
        get column(): number;
        get row(): number;
        get x(): number;
        get y(): number;
        get left(): number;
        get top(): number;
        get right(): number;
        get bottom(): number;
        get tileSet(): number;
        get col(): number;
        isWall(): boolean;
        getImage(): Image;
        /**
         * Returns the neighboring location in a specifc direction from a location in a tilemap
         * @param direction The direction to fetch the location in
         */
        getNeighboringLocation(direction: CollisionDirection): Location;
        /**
         * Center the given sprite on this tile
         * @param sprite
         */
        place(mySprite: Sprite): void;
        _toTile(): Tile;
    }
    /**
     * DEPRECATED: a tile in the tilemap
     **/
    class Tile {
        protected _row: number;
        protected _col: number;
        protected tileMap: TileMap;
        constructor(col: number, row: number, map: TileMap);
        get x(): number;
        get y(): number;
        get tileSet(): number;
        /**
         * Center the given sprite on this tile
         * @param sprite
         */
        place(mySprite: Sprite): void;
    }
    class TileMapData {
        protected data: Buffer;
        protected layers: Image;
        protected tileset: Image[];
        protected cachedTileView: Image[];
        protected _scale: TileScale;
        protected _width: number;
        protected _height: number;
        constructor(data: Buffer, layers: Image, tileset: Image[], scale: TileScale);
        get width(): number;
        get height(): number;
        get scale(): TileScale;
        set scale(s: TileScale);
        getTile(col: number, row: number): number;
        setTile(col: number, row: number, tile: number): void;
        getTileset(): Image[];
        getTileImage(index: number): Image;
        setWall(col: number, row: number, on: boolean): void;
        isWall(col: number, row: number): boolean;
        isOutsideMap(col: number, row: number): boolean;
    }
    enum TileMapEvent {
        Loaded = 0,
        Unloaded = 1
    }
    class TileMapEventHandler {
        event: TileMapEvent;
        callback: (data: TileMapData) => void;
        constructor(event: TileMapEvent, callback: (data: TileMapData) => void);
    }
    class TileMap {
        protected _scale: TileScale;
        protected _layer: number;
        protected _map: TileMapData;
        renderable: scene.Renderable;
        protected handlerState: TileMapEventHandler[];
        constructor(scale?: TileScale);
        get scale(): TileScale;
        set scale(s: TileScale);
        get data(): TileMapData;
        offsetX(value: number): number;
        offsetY(value: number): number;
        areaWidth(): number;
        areaHeight(): number;
        get layer(): number;
        set layer(value: number);
        get enabled(): boolean;
        setData(map: TileMapData): void;
        getTile(col: number, row: number): Location;
        getTileIndex(col: number, row: number): number;
        setTileAt(col: number, row: number, index: number): void;
        getImageType(im: Image): number;
        setWallAt(col: number, row: number, on: boolean): void;
        getTilesByType(index: number): Location[];
        sampleTilesByType(index: number, maxCount: number): Location[];
        protected isInvalidIndex(index: number): boolean;
        protected draw(target: Image, camera: scene.Camera): void;
        isObstacle(col: number, row: number): boolean;
        getObstacle(col: number, row: number): sprites.StaticObstacle;
        isOnWall(s: Sprite): boolean;
        getTileImage(index: number): Image;
        addEventListener(event: TileMapEvent, handler: (data: TileMapData) => void): void;
        removeEventListener(event: TileMapEvent, handler: (data: TileMapData) => void): void;
    }
    function createTilemap(data: Buffer, layer: Image, tiles: Image[], scale: TileScale): TileMapData;
    function setTilemap(tilemap: TileMapData): void;
    /**
     * Sets the given tilemap to be the current active tilemap in the game
     *
     * @param tilemap The tilemap to set as the current tilemap
     */
    function setCurrentTilemap(tilemap: TileMapData): void;
    /**
     * Set a location in the map (column, row) to a tile
     * @param loc
     * @param tile
     */
    function setTileAt(loc: Location, tile: Image): void;
    /**
     * Set or unset a wall at a location in the map (column, row)
     * @param loc
     * @param on
     */
    function setWallAt(loc: Location, on: boolean): void;
    /**
     * Get the tile position given a column and row in the tilemap
     * @param col
     * @param row
     */
    function getTileLocation(col: number, row: number): Location;
    /**
     * Get the image of a tile, given a location in the tilemap
     * @param loc
     */
    function getTileImage(loc: Location): Image;
    /**
     * Get the image of a tile, given a (column, row) in the tilemap
     * @param loc
     */
    function getTileAt(col: number, row: number): Image;
    /**
     * Returns true if the tile at the given location is the same as the given tile;
     * otherwise returns false
     * @param location
     * @param tile
     */
    function tileAtLocationEquals(location: Location, tile: Image): boolean;
    /**
     * Returns true if the tile at the given location is a wall in the current tilemap;
     * otherwise returns false
     * @param location The location to check for a wall
     */
    function tileAtLocationIsWall(location: Location): boolean;
    /**
     * Returns the image of the tile at the given location in the current tilemap
     *
     * @param location The location of the image to fetch
     */
    function tileImageAtLocation(location: Location): Image;
    /**
     * Center the given sprite on a given location
     * @param sprite
     * @param loc
     */
    function placeOnTile(sprite: Sprite, loc: Location): void;
    /**
     * Center the given sprite on a random location that is the given type (image)
     * @param sprite
     * @param tile
     */
    function placeOnRandomTile(sprite: Sprite, tile: Image): void;
    /**
     * Get all tiles in the tilemap with the given type (image).
     * @param tile
     */
    function getTilesByType(tile: Image): Location[];
    /**
     * Get a random tile of the given type
     * @param tile the type of tile to get a random selection of
     */
    function getRandomTileByType(tile: Image): Location;
    /**
     * A tilemap
     */
    function _tilemapEditor(tilemap: TileMapData): TileMapData;
    /**
     * Adds an event handler that will fire whenever the specified event
     * is triggered. Unloaded tilemap events will fire before the new tilemap
     * is set and loaded events will fire afterwards. The same handler can
     * not be added for the same event more than once.
     *
     * @param event     The event to subscribe to
     * @param handler   The code to run when the event triggers
     */
    function addEventListener(event: TileMapEvent, callback: (data: TileMapData) => void): void;
    /**
     * Removes an event handler registered with addEventListener.
     *
     * @param event     The event that the handler was registered for
     * @param handler   The handler to remove
     */
    function removeEventListener(event: TileMapEvent, callback: (data: TileMapData) => void): void;
}
declare namespace net {
    enum ControllerEvent {
        NewScan = 1,
        GotIP = 2,
        LostIP = 3,
        NoScannedNetworks = 4,
        NoKnownNetworks = 5,
        Connecting = 6,
        ConnectionFailed = 7,
        LoginServerStarted = 8
    }
    class Controller {
        eventID: number;
        private _isConnected;
        onConnectSSIDFailed: (ssid: string) => void;
        constructor();
        protected setConnected(isConnected: boolean): void;
        protected emitEvent(ev: ControllerEvent): void;
        onEvent(ev: ControllerEvent, h: () => void): void;
        scanNetworks(): net.AccessPoint[];
        protected scanNetworksCore(): net.AccessPoint[];
        startLoginServer(hostName: string): void;
        isLoginServerEnabled(): boolean;
        socket(): number;
        socketConnect(socket_num: number, dest: string | Buffer, port: number, conn_mode?: number): boolean;
        socketWrite(socket_num: number, buffer: Buffer): void;
        socketAvailable(socket_num: number): number;
        socketRead(socket_num: number, size: number): Buffer;
        socketClose(socket_num: number): void;
        hostbyName(hostname: string): Buffer;
        get isIdle(): boolean;
        get isConnected(): boolean;
        connectAP(bssid: string, password: string): boolean;
        disconnectAP(): void;
        lastScanResults: net.AccessPoint[];
        protected reconnectRunning: {};
        autoconnect(): void;
        disconnect(): void;
        protected connectCore(): boolean;
        connect(timeout_ms?: number): boolean;
        get ssid(): string;
        get rssi(): number;
        get MACaddress(): Buffer;
        get IPaddress(): Buffer;
        ping(dest: string, ttl?: number): number;
        dataAvailableSrc(socket_num: number): number;
        dataAvailableValue(socket_num: number): number;
    }
}
declare namespace net {
    const SOCK_STREAM = 1;
    const AF_INET = 2;
    const MAX_PACKET = 4000;
    const TCP_MODE = 0;
    const UDP_MODE = 1;
    const TLS_MODE = 2;
    class ControllerSocket implements net.Socket {
        private controller;
        private host;
        private port;
        private conntype;
        _buffer: Buffer;
        _socknum: number;
        _timeout: number;
        _closed: boolean;
        _openHandler: () => void;
        _closeHandler: () => void;
        _errorHandler: (msg: string) => void;
        _messageHandler: (data: Buffer) => void;
        /** A simplified implementation of the Python 'socket' class, for connecting
    through an interface to a remote device
 */
        constructor(controller: Controller, host: string | Buffer, port: number, conntype?: number);
        /** Connect the socket to the 'address' (which can be 32bit packed IP or
    a hostname string). 'conntype' is an extra that may indicate SSL or not,
    depending on the underlying interface
*/
        connect(): void;
        /** Send some data to the socket */
        send(data: string | Buffer): void;
        private error;
        onOpen(handler: () => void): void;
        onClose(handler: () => void): void;
        onError(handler: (msg: string) => void): void;
        private flushReadBuffer;
        onMessage(handler: (data: Buffer) => void): void;
        /** Attempt to return as many bytes as we can up to but not including '\r\n' */
        readLine(): string;
        /** Read up to 'size' bytes from the socket, this may be buffered internally! If 'size' isn't specified, return everything in the buffer. */
        read(size?: number): Buffer;
        /** Set the read timeout for sockets, if value is 0 it will block */
        setTimeout(value: number): void;
        /** Close the socket, after reading whatever remains */
        close(): void;
    }
}
/**
 * Networking, WiFi, web requests
 */
declare namespace net {
    /**
     * Default priority of net log messages
     **/
    let logPriority: ConsolePriority;
    function log(msg: string): void;
    function debug(msg: string): void;
    function fail(reason: string): void;
    function monotonic(): number;
    const enum WifiAPFlags {
        HasPassword = 1,
        WPS = 2,
        HasSecondaryChannelAbove = 4,
        HasSecondaryChannelBelow = 8,
        IEEE_802_11B = 256,
        IEEE_802_11A = 512,
        IEEE_802_11G = 1024,
        IEEE_802_11N = 2048,
        IEEE_802_11AC = 4096,
        IEEE_802_11AX = 8192,
        IEEE_802_LongRange = 32768
    }
    class AccessPoint {
        ssid: string;
        flags: WifiAPFlags;
        rssi: number;
        bssid: Buffer;
        channel: number;
        constructor(ssid: string);
        static fromBuffer(buf: Buffer): AccessPoint;
        toBuffer(): Buffer;
    }
    interface Socket {
        connect(): void;
        send(data: string | Buffer): void;
        read(contentLength: number): Buffer;
        close(): void;
        onOpen(handler: () => void): void;
        onClose(handler: () => void): void;
        onError(handler: (msg: string) => void): void;
        onMessage(handler: (data: Buffer) => void): void;
        setTimeout(millis: number): void;
        readLine(): string;
    }
    class Net {
        private factory;
        private _controller;
        constructor(factory: () => Controller);
        static instance: Net;
        get controller(): net.Controller;
        /**
         * Scan for APs
         */
        scanNetworks(): net.AccessPoint[];
        createSocket(host: string, port: number, secure: boolean): net.Socket;
        hostByName(host: string): string;
    }
    /**
     * Gets the current Net instance
     */
    function instance(): Net;
    /**
     * Gets the map of SSID -> password pairs
     */
    function knownAccessPoints(): StringMap;
    function clearAccessPoint(ssid: string): void;
    function updateAccessPoint(ssid: string, password: string): void;
    function setAccessPointPriority(ssid: string, pri: number): void;
    function accessPointPriorities(): any;
    function clearAccessPoints(): void;
}
declare namespace net {
    function urlencode(s: string): string;
    function urldecode(s: string): string;
}
declare namespace net {
    /**
     * Pings a web site
     * @param dest host name
     * @param ttl
     */
    function ping(dest: string, ttl?: number): number;
    class Response {
        private socket;
        _cached: Buffer;
        status_code: number;
        reason: string;
        _read_so_far: number;
        headers: StringMap;
        /**
         * The response from a request, contains all the headers/content
         */
        constructor(socket: Socket);
        /**
         * Close, delete and collect the response data
         */
        close(): void;
        /**
         * The HTTP content direct from the socket, as bytes
         */
        get content(): Buffer;
        /**
         * The HTTP content, encoded into a string according to the HTTP header encoding
        */
        get text(): string;
        get json(): any;
        toString(): string;
    }
    interface RequestOptions {
        data?: string | Buffer;
        json?: any;
        headers?: StringMap;
        stream?: boolean;
        timeout?: number;
    }
    function dataAsBuffer(data: string | Buffer): Buffer;
    /** Perform an HTTP request to the given url which we will parse to determine
whether to use SSL ('https://') or not. We can also send some provided 'data'
or a json dictionary which we will stringify. 'headers' is optional HTTP headers
sent along. 'stream' will determine if we buffer everything, or whether to only
read only when requested
 
*/
    function request(method: string, url: string, options?: RequestOptions): net.Response;
    /**
     * Send HTTP HEAD request
     **/
    function head(url: string, options?: RequestOptions): Response;
    /**
     * Send HTTP GET request
     **/
    function get(url: string, options?: RequestOptions): Response;
    /**
     * Send HTTP GET request and return text
     **/
    function getString(url: string, options?: RequestOptions): string;
    /**
     * Send HTTP GET request and return JSON
     **/
    function getJSON(url: string, options?: RequestOptions): any;
    /** Send HTTP POST request */
    function post(url: string, options?: RequestOptions): Response;
    /** Send HTTP PATCH request */
    function patch(url: string, options?: RequestOptions): Response;
    /** Send HTTP PUT request */
    function put(url: string, options?: RequestOptions): Response;
    /** Send HTTP DELETE request */
    function del(url: string, options?: RequestOptions): Response;
}
declare enum Sounds {
    PowerUp = 0,
    PowerDown = 1,
    JumpUp = 2,
    JumpDown = 3,
    BaDing = 4,
    Wawawawaa = 5,
    MagicWand = 6,
    Siren = 7,
    PewPew = 8
}
declare namespace music {
    /**
     * Get the melody string for a built-in melody.
     * @param name the note name, eg: Note.C
     */
    function sounds(name: Sounds): string;
    /**
     * Start playing a sound and don't wait for it to finish.
     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]
     * @param sound the melody to play
     */
    function playSound(sound: string): void;
    /**
     * Play a sound and wait until the sound is done.
     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]
     * @param sound the melody to play
     */
    function playSoundUntilDone(sound: string): void;
}
declare enum Note {
    C = 262,
    CSharp = 277,
    D = 294,
    Eb = 311,
    E = 330,
    F = 349,
    FSharp = 370,
    G = 392,
    GSharp = 415,
    A = 440,
    Bb = 466,
    B = 494,
    C3 = 131,
    CSharp3 = 139,
    D3 = 147,
    Eb3 = 156,
    E3 = 165,
    F3 = 175,
    FSharp3 = 185,
    G3 = 196,
    GSharp3 = 208,
    A3 = 220,
    Bb3 = 233,
    B3 = 247,
    C4 = 262,
    CSharp4 = 277,
    D4 = 294,
    Eb4 = 311,
    E4 = 330,
    F4 = 349,
    FSharp4 = 370,
    G4 = 392,
    GSharp4 = 415,
    A4 = 440,
    Bb4 = 466,
    B4 = 494,
    C5 = 523,
    CSharp5 = 555,
    D5 = 587,
    Eb5 = 622,
    E5 = 659,
    F5 = 698,
    FSharp5 = 740,
    G5 = 784,
    GSharp5 = 831,
    A5 = 880,
    Bb5 = 932,
    B5 = 988
}
declare enum BeatFraction {
    Whole = 1,
    Half = 2,
    Quarter = 4,
    Eighth = 8,
    Sixteenth = 16,
    Double = 32,
    Breve = 64,
    Triplet = 128
}
declare namespace music {
    /**
    * Play a tone.
    * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
    */
    function ringTone(frequency: number): void;
    /**
    * Rest, or play silence, for some time (in milliseconds).
    * @param ms rest duration in milliseconds (ms), eg: BeatFraction.Half
    */
    function rest(ms: number): void;
    /**
     * Return the duration of a beat in milliseconds (the beat fraction).
     * @param fraction the fraction of the current whole note, eg: BeatFraction.Half
     */
    function beat(fraction?: BeatFraction): number;
    /**
     * Return the tempo in beats per minute (bpm).
     * Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.
     */
    function tempo(): number;
    /**
     * Change the tempo up or down by some amount of beats per minute (bpm).
     * @param bpm The change in beats per minute to the tempo, eg: 20
     */
    function changeTempoBy(bpm: number): void;
    /**
     * Set the tempo a number of beats per minute (bpm).
     * @param bpm The new tempo in beats per minute, eg: 120
     */
    function setTempo(bpm: number): void;
}
/**
 * Generation of music tones.
 */
declare namespace music {
}
declare namespace music {
    /**
     * Get the frequency of a note.
     * @param name the note name, eg: Note.C
     */
    function noteFrequency(name: Note): number;
}
declare namespace music {
    enum PlaybackMode {
        UntilDone = 0,
        InBackground = 1,
        LoopingInBackground = 2
    }
    class Playable {
        stopped: boolean;
        constructor();
        play(playbackMode: PlaybackMode): void;
        loop(): void;
    }
    class MelodyPlayable extends Playable {
        melody: Melody;
        constructor(melody: Melody);
        play(playbackMode: PlaybackMode): void;
    }
    class TonePlayable extends Playable {
        pitch: number;
        duration: number;
        constructor(pitch: number, duration: number);
        play(playbackMode: PlaybackMode): void;
    }
    /**
     * Play a song, melody, or other sound. The music plays until finished or can play as a
     * background task.
     * @param toPlay the song or melody to play
     * @param playbackMode play the song or melody until it's finished or as background task
     */
    function play(toPlay: Playable, playbackMode: PlaybackMode): void;
    /**
     * Create a Playable object for a melody.
     * @param melody the melody to make playable
     */
    function melodyPlayable(melody: Melody): Playable;
    /**
     * Create a Playable object for a melody string containg notes.
     * @param melody the melody string to make playable
     */
    function stringPlayable(melody: string, tempo: number): Playable;
    /**
     * Create a Playable object for a single tone and its duration.
     * @param note the note or tone frequency to play
     * @param duration the duration of the tone in milliseconds (ms)
     */
    function tonePlayable(note: number, duration: number): Playable;
    function _stopPlayables(): void;
}
/**
 * A manager of scenes
 */
declare namespace storyboard {
    interface FrameOptions {
        background?: number;
    }
    class Frame {
        start: () => void;
        options: FrameOptions;
        constructor(start: () => void, options: FrameOptions);
    }
    class BootSequence {
        start: (done: () => void) => void;
        background: number;
        constructor(start: (done: () => void) => void, background: number);
        /**
         * Registers the boot sequence
         */
        register(): void;
    }
    /**
     * Registers a scene
     * @param name
     * @param scene
     */
    function registerScene(name: string, start: () => void, options?: FrameOptions): void;
    /**
     * Starts the story board by running boot sequences then entering a scene
     * @param name
     */
    function start(name?: string): void;
    /**
     * Replace the current scene with the given scene
     * @param name
     */
    function replace(name: string): void;
    /**
     * Transition to a registered scene
     * @param name
     */
    function push(name: string): void;
    /**
     * Stops the current scene and restart the previous scene
     */
    function pop(): void;
}
declare namespace input {
    /**
     * Registers a custom gesture recognizer
     * @param id
     * @param update true if gesture detected
     * @param handler
     */
    function onCustomGesture(id: number, update: () => boolean, handler: () => void): void;
}
declare namespace input {
}
declare namespace animation {
    class Animation {
        sprites: Sprite[];
        frames: Image[];
        index: number;
        interval: number;
        action: number;
        lastTime: number;
        constructor(action: number, interval: number);
        _init(): void;
        update(): void;
        getImage(): Image;
        getAction(): number;
        getInterval(): number;
        setInterval(interval: number): void;
        /**
        * Add an image frame to an animation
        */
        addAnimationFrame(frame: Image): void;
        registerSprite(sprite: Sprite): void;
    }
    function _actionEnumShim(arg: number): number;
    /**
     * Create an animation
     */
    function createAnimation(action: number, interval: number): Animation;
    /**
     * Attach an animation to a sprite
     */
    function attachAnimation(sprite: Sprite, set: Animation): void;
    /**
     * Set an animation action to a sprite
     */
    function setAction(sprite: Sprite, action: number): void;
}
declare const enum AzureIotEvent {
    Connected = 1,
    Disconnected = 2,
    Error = 3,
    GotTwinResponse = 100
}
declare namespace azureiot {
    export const SECRETS_KEY = "azureiot";
    export let logPriority: ConsolePriority;
    type SMap<T> = {
        [s: string]: T;
    };
    export type Json = any;
    export function mqttClient(skipCreate?: boolean): mqtt.Client;
    export function hubName(): string;
    export function hubDeviceId(): string;
    export function setConnectionString(connectionString: string): void;
    /**
     * Disconnects the hub if any
     */
    export function disconnect(): void;
    /**
     * Connects to the IoT hub
     */
    export function connect(): void;
    /**
     * Registers code when the MQTT client gets connected or disconnected
     * @param event
     * @param handler
     */
    export function onEvent(event: AzureIotEvent, handler: () => void): void;
    /**
     * Indicates if the MQTT client is connected
     */
    export function isConnected(): boolean;
    /**
     * Send a message via mqtt
     * @param msg
     */
    export function publishMessageJSON(msg: Json, sysProps?: SMap<string>): void;
    /**
     * Send a message via mqtt
     * @param msg
     */
    export function publishMessageBuffer(msg: Buffer, sysProps?: SMap<string>): void;
    /**
     * Send a message via mqtt
     * @param msg
     */
    export function publishMessageHex(msg: Buffer, len?: number, sysProps?: SMap<string>): void;
    /**
     * Registers code to run when a message is received
     * @param handler
     */
    export function onMessageReceived(handler: (body: Json, sysProps: SMap<string>) => void): void;
    export class ValueAwaiter {
        private evid;
        private value;
        constructor();
        setValue(v: any): void;
        wait(): any;
    }
    export function getTwin(): Json;
    export function patchTwin(patch: Json): void;
    export function computePatch(curr: Json, target: Json): any;
    export function applyPatch(trg: Json, patch: Json): void;
    export function onTwinUpdate(handler: (twin: Json, patch: Json) => void): void;
    export function onMethod(methodName: string, handler: (msg: Json) => Json): void;
    export {};
}
declare namespace browserEvents {
    enum Event {
        PointerDown = 6857,
        PointerUp = 6858,
        PointerMove = 6859,
        PointerLeave = 6860,
        PointerEnter = 6861,
        PointerCancel = 6862,
        PointerOver = 6863,
        PointerOut = 6864,
        Wheel = 6865,
        KeyDown = 6866,
        KeyUp = 6867
    }
    enum MouseButtonId {
        Left = 1,
        Right = 2,
        Wheel = 3,
        Back = 4,
        Forward = 5
    }
    enum MouseButtonEvent {
        Pressed = 6857,
        Released = 6858
    }
    class MouseButton {
        id: number;
        protected _pressed: boolean;
        protected pressHandler: (x: number, y: number) => void;
        protected pressListeners: ((x: number, y: number) => void)[];
        protected releaseHandler: (x: number, y: number) => void;
        protected releaseListeners: ((x: number, y: number) => void)[];
        constructor(id: number);
        setPressed(pressed: boolean): void;
        onEvent(event: MouseButtonEvent, handler: (x: number, y: number) => void): void;
        isPressed(): boolean;
        pauseUntil(event: KeyEvent): void;
        addEventListener(event: KeyEvent, handler: (x: number, y: number) => void): void;
        removeEventListener(event: KeyEvent, handler: (x: number, y: number) => void): void;
    }
    function onEvent(event: Event, handler: () => void): void;
    function onMouseMove(handler: (x: number, y: number) => void): void;
    function onWheel(handler: (dx: number, dy: number, dz: number) => void): void;
    const MouseLeft: MouseButton;
    const MouseRight: MouseButton;
    const MouseWheel: MouseButton;
    const MouseBack: MouseButton;
    const MouseForward: MouseButton;
    const MouseAny: MouseButton;
}
declare namespace browserEvents {
    enum Key {
        Zero = 48,
        One = 49,
        Two = 50,
        Three = 51,
        Four = 52,
        Five = 53,
        Six = 54,
        Seven = 55,
        Eight = 56,
        Nine = 57,
        BackTick = 192,
        Hyphen = 189,
        Equals = 187,
        Q = 81,
        W = 87,
        E = 69,
        R = 82,
        T = 84,
        Y = 89,
        U = 85,
        I = 73,
        O = 79,
        P = 80,
        OpenBracket = 219,
        CloseBracket = 221,
        BackSlash = 220,
        A = 65,
        S = 83,
        D = 68,
        F = 70,
        G = 71,
        H = 72,
        Space = 32,
        PageUp = 33,
        J = 74,
        K = 75,
        L = 76,
        SemiColon = 186,
        Apostrophe = 222,
        Z = 90,
        X = 88,
        C = 67,
        V = 86,
        B = 66,
        N = 78,
        M = 77,
        Comma = 188,
        Period = 190,
        ForwardSlash = 191,
        Shift = 16,
        Enter = 13,
        CapsLock = 20,
        Tab = 9,
        Control = 17,
        Meta = 91,
        Alt = 18,
        ArrowUp = 38,
        ArrowDown = 40,
        ArrowLeft = 37,
        ArrowRight = 39,
        PageDown = 34,
        End = 35,
        Home = 36
    }
    enum KeyEvent {
        Pressed = 0,
        Released = 1
    }
    function keyToString(key: Key): "=" | "-" | "B" | "H" | "I" | "L" | " " | "." | "\\" | "[" | "," | "]" | "'" | "M" | "V" | "Q" | "T" | "C" | "S" | "A" | "Z" | "0" | ";" | "P" | "/" | "D" | "E" | "F" | "G" | "R" | "4" | "W" | "Y" | "U" | "O" | "PageUp" | "J" | "K" | "X" | "N" | "Shift" | "Enter" | "CapsLock" | "Tab" | "Control" | "Meta" | "Alt" | "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | "PageDown" | "End" | "Home" | "1" | "2" | "3" | "5" | "6" | "7" | "8" | "9" | "`";
    class KeyButton {
        id: number;
        protected _pressed: boolean;
        protected pressHandler: () => void;
        protected pressListeners: (() => void)[];
        protected releaseHandler: () => void;
        protected releaseListeners: (() => void)[];
        constructor(id: number);
        setPressed(pressed: boolean): void;
        onEvent(event: KeyEvent, handler: () => void): void;
        isPressed(): boolean;
        pauseUntil(event: KeyEvent): void;
        addEventListener(event: KeyEvent, handler: () => void): void;
        removeEventListener(event: KeyEvent, handler: () => void): void;
    }
    const A: KeyButton;
    const B: KeyButton;
    const C: KeyButton;
    const D: KeyButton;
    const E: KeyButton;
    const F: KeyButton;
    const G: KeyButton;
    const H: KeyButton;
    const I: KeyButton;
    const J: KeyButton;
    const K: KeyButton;
    const L: KeyButton;
    const M: KeyButton;
    const N: KeyButton;
    const O: KeyButton;
    const P: KeyButton;
    const Q: KeyButton;
    const R: KeyButton;
    const S: KeyButton;
    const T: KeyButton;
    const U: KeyButton;
    const V: KeyButton;
    const W: KeyButton;
    const X: KeyButton;
    const Y: KeyButton;
    const Z: KeyButton;
    const Zero: KeyButton;
    const One: KeyButton;
    const Two: KeyButton;
    const Three: KeyButton;
    const Four: KeyButton;
    const Five: KeyButton;
    const Six: KeyButton;
    const Seven: KeyButton;
    const Eight: KeyButton;
    const Nine: KeyButton;
    const Shift: KeyButton;
    const Enter: KeyButton;
    const CapsLock: KeyButton;
    const Tab: KeyButton;
    const Control: KeyButton;
    const Meta: KeyButton;
    const Alt: KeyButton;
    const ArrowUp: KeyButton;
    const ArrowDown: KeyButton;
    const ArrowLeft: KeyButton;
    const ArrowRight: KeyButton;
    const BackTick: KeyButton;
    const Hyphen: KeyButton;
    const Equals: KeyButton;
    const OpenBracket: KeyButton;
    const CloseBracket: KeyButton;
    const BackSlash: KeyButton;
    const Space: KeyButton;
    const PageUp: KeyButton;
    const SemiColon: KeyButton;
    const Apostrophe: KeyButton;
    const Comma: KeyButton;
    const Period: KeyButton;
    const ForwardSlash: KeyButton;
    const PageDown: KeyButton;
    const End: KeyButton;
    const Home: KeyButton;
    const Any: KeyButton;
}
declare class CablePacket {
    /**
     * The first number in the payload.
     */
    receivedNumber: number;
    /**
     * The array of numbers of received.
     */
    receivedNumbers: number[];
    /**
     * The raw buffer of data received
     */
    receivedBuffer: Buffer;
}
declare namespace network {
    /**
     * Send a number over the cable.
     * @param value number to send
     */
    function cableSendNumber(value: number): void;
    /**
     * Send an array of numbers over the cable. The array size has to be 32 bytes or less.
     * @param values
     */
    function cableSendNumbers(values: number[]): void;
    /**
     * Run some code when a number value comes across the cable.
     */
    function onCableReceivedNumber(handler: (num: number) => void): void;
    /**
     * Run some code when the cable receives a list of numbers.
     */
    function onCableReceivedNumbers(handler: (nums: number[]) => void): void;
    /**
     * Run some code when the cable receives data a buffer.
     */
    function onCableReceivedBuffer(handler: (buf: Buffer) => void): void;
    /**
     * Run some code when the cable receiver gets a packet.
     */
    function onCablePacketReceived(cb: (p: CablePacket) => void): void;
}
declare namespace color {
    enum ColorBufferLayout {
        /**
         * 24bit RGB color
         */
        RGB = 0,
        /**
         * 32bit RGB color with alpha
         */
        ARGB = 1
    }
    /**
     * A buffer of colors
     */
    class ColorBuffer {
        layout: ColorBufferLayout;
        buf: Buffer;
        constructor(length: number, layout?: ColorBufferLayout);
        static fromBuffer(buffer: Buffer, layout: ColorBufferLayout): ColorBuffer;
        get stride(): 4 | 3;
        get length(): number;
        color(index: number): number;
        setColor(index: number, color: number): void;
        slice(start?: number, length?: number): ColorBuffer;
        /**
         * Writes the content of the src color buffer starting at the start dstOffset in the current buffer
         * @param dstOffset
         * @param src
         */
        write(dstOffset: number, src: ColorBuffer): void;
    }
    /**
     * Converts an array of colors into a color buffer
     */
    function createBuffer(colors: number[], layout?: ColorBufferLayout): color.ColorBuffer;
}
/**
 * Well known colors
 */
declare const enum Colors {
    Red = 16711680,
    Orange = 16744192,
    Yellow = 16776960,
    Green = 65280,
    Blue = 255,
    Indigo = 4915330,
    Violet = 9055202,
    Purple = 10499045,
    Pink = 16711807,
    White = 16777215,
    Black = 0
}
/**
 * Well known color hues
 */
declare const enum ColorHues {
    Red = 0,
    Orange = 29,
    Yellow = 43,
    Green = 86,
    Aqua = 125,
    Blue = 170,
    Purple = 191,
    Magenta = 213,
    Pink = 234
}
/**
 * Color manipulation
 */
declare namespace color {
    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    function rgb(red: number, green: number, blue: number): number;
    function argb(alpha: number, red: number, green: number, blue: number): number;
    /**
    * Get the RGB value of a known color
    */
    function wellKnown(color: Colors): number;
    /**
     * Convert an HSV (hue, saturation, value) color to RGB
     * @param hue value of the hue channel between 0 and 255. eg: 255
     * @param sat value of the saturation channel between 0 and 255. eg: 255
     * @param val value of the value channel between 0 and 255. eg: 255
     */
    function hsv(hue: number, sat?: number, val?: number): number;
    /**
     * Fade the color by the brightness
     * @param color color to fade
     * @param brightness the amount of brightness to apply to the color, eg: 128
     */
    function fade(color: number, brightness: number): number;
    function blend(color: number, alpha: number, otherColor: number): number;
    function gradient(startColor: number, endColor: number, steps: number): ColorBuffer;
    function unpackR(rgb: number): number;
    function unpackG(rgb: number): number;
    function unpackB(rgb: number): number;
    function parseColor(color: string): number;
}
declare namespace scene {
    /**
     *  Package for color-coded tilemap blocks, to support existing curriculum.
     */
    /**
     * Set the map for placing tiles in the scene
     * @param map
     * @param scale
     */
    function setTileMap(map: Image, scale?: TileScale): void;
    /**
     * Set an image as a tile at the given index. Tiles should be a 16x16 image
     * @param index
     * @param img
     */
    function setTile(index: number, img: Image, wall?: boolean): void;
    /**
     * Get the tile at a position in the tile map
     * @param col
     * @param row
     */
    function getTile(col: number, row: number): tiles.Tile;
    /**
     * Get all tiles in the tile map with the given index.
     * @param index
     */
    function getTilesByType(index: number): tiles.Tile[];
    /**
     * Center the given sprite on a random tile that is the given color
     * @param sprite
     * @param color
     */
    function placeOnRandomTile(sprite: Sprite, color: number): void;
    /**
     * Set a tile at the given index
     * @param tile
     * @param index
     */
    function setTileAt(tile: tiles.Tile, index: number): void;
    /**
     * Center the given sprite on this tile
     * @param sprite
     */
    function place(tile: tiles.Tile, mySprite: Sprite): void;
    /**
     * Run code when a certain kind of sprite hits a tile
     * @param direction
     * @param tile
     * @param handler
     */
    function onHitTile(kind: number, tile: number, handler: (sprite: Sprite) => void): void;
    /**
     * Get the obstacle sprite in a given direction if any
     * @param direction
     */
    function tileHitFrom(sprite: Sprite, direction: CollisionDirection): number;
}
declare namespace tiles.legacy {
    class LegacyTilemap extends tiles.TileMap {
        private _mapImage;
        private _tileSets;
        isLegacy: boolean;
        constructor(scale?: TileScale);
        get data(): TileMapData;
        get image(): Image;
        offsetX(value: number): number;
        offsetY(value: number): number;
        areaWidth(): number;
        areaHeight(): number;
        get layer(): number;
        set layer(value: number);
        get enabled(): boolean;
        setTile(index: number, img: Image, collisions?: boolean): void;
        setMap(map: Image): void;
        getTileLegacy(col: number, row: number): Tile;
        getTile(col: number, row: number): Location;
        setTileAt(col: number, row: number, index: number): void;
        getTilesByType(index: number): Location[];
        getTilesByTypeLegacy(index: number): Tile[];
        private generateTile;
        private isOutsideMap;
        protected isInvalidIndex(index: number): boolean;
        protected draw(target: Image, camera: scene.Camera): void;
        isObstacle(col: number, row: number): boolean;
        getObstacle(col: number, row: number): sprites.StaticObstacle;
        isOnWall(s: Sprite): boolean;
        getTileIndex(col: number, row: number): number;
        getTileImage(index: number): Image;
    }
}
declare namespace sensors {
    interface ColorSensor {
        /**
         * Reads an RGB color from the sensor
         */
        color(): number;
    }
}
declare namespace input {
    /**
     * Uses a color sensor to capture the ambient color as a RGB value.
     */
    function lightColor(): number;
}
/**
 * Makecode package for the TCS34725 Color sensor.
 *
 * More details here: https://ams.com/documents/20143/36005/TCS3472_DS000390_2-00.pdf/6e452176-2407-faaf-a590-d526c78c7432
 */
declare namespace sensors {
    export enum TCS34725_ATIME {
        ATIME_2_4_MS = 255,// 1 2.4 ms 1024
        ATIME_24_MS = 246,// 10 24 ms 10240
        ATIME_100_MS = 213,// 42 101 ms 43008
        ATIME_154_MS = 192,// 64 154 ms 65535
        ATIME_700_MS = 0
    }
    enum TCS34725_AGAIN {
        AGAIN_1X = 0,// 1x gain
        AGAIN_4X = 1,// 4x gain
        AGAIN_16X = 2,// 16x gain
        AGAIN_60X = 3
    }
    export class TCS34725 implements sensors.ColorSensor {
        isConnected: boolean;
        atimeIntegrationValue: TCS34725_ATIME;
        gainSensorValue: TCS34725_AGAIN;
        constructor();
        private connect;
        private turnSensorOn;
        private pauseSensorForIntegrationTime;
        private turnOff;
        setATIMEintegration(atime: TCS34725_ATIME): void;
        setGAINsensor(gain: TCS34725_AGAIN): void;
        private start;
        color(): number;
    }
    export {};
}
declare enum ControllerGesture {
    /**
     * Shake gesture
     */
    Shake = 11,// ACCELEROMETER_EVT_SHAKE
    /**
     * Raised when the device tilts up
     */
    TiltUp = 1,// ACCELEROMETER_EVT_TILT_UP
    /**
     * Raised when the device tilts down
     */
    TiltDown = 2,// ACCELEROMETER_EVT_TILT_DOWN
    /**
     * Raised when the screen is pointing left
     */
    TiltLeft = 3,// ACCELEROMETER_EVT_TILT_LEFT
    /**
     * Raised when the screen is pointing right
     */
    TiltRight = 4,// ACCELEROMETER_EVT_TILT_RIGHT
    /**
     * Raised when the screen faces up
     */
    ScreenUp = 5,// ACCELEROMETER_EVT_FACE_UP
    /**
     * Raised when the screen is pointing up and the board is horizontal
     */
    ScreenDown = 6,// ACCELEROMETER_EVT_FACE_DOWN
    /**
     * Raised when a 2G shock is detected
     */
    TwoG = 12,// ACCELEROMETER_EVT_2G
    /**
     * Raised when a 3G shock is detected
     */
    ThreeG = 8,// ACCELEROMETER_EVT_3G
    /**
     * Raised when a 6G shock is detected
     */
    SixG = 9,// ACCELEROMETER_EVT_6G
    /**
     * Raised when a 8G shock is detected
     */
    EightG = 10
}
declare enum ControllerDimension {
    X = 0,
    Y = 1,
    Z = 2,
    Strength = 3
}
declare namespace controller {
    /**
     * Do something when a gesture happens (like shaking the board).
     * @param gesture the type of gesture to track
     * @param body code to run when gesture is raised
     */
    function onGesture(gesture: ControllerGesture, handler: () => void): void;
    /**
     * Register a custom gesture for the controller
     * @param id
     * @param update
     * @param handler
     */
    function onCustomGesture(id: number, update: () => boolean, handler: () => void): void;
    /**
     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up,
     * x=0, y=0 and z=-1023)
     * @param dimension the axis along which the acceleration if measured
     */
    function acceleration(dimension: ControllerDimension): number;
}
declare namespace controller {
    /**
     * Configures the timing of the on button repeat event for all of the controller buttons
     * @param delay number of milliseconds from when the button is pressed to when the repeat event starts firing, eg: 500
     * @param interval minimum number of milliseconds between calls to the button repeat event, eg: 30
     */
    function configureRepeatEventDefaults(delay: number, interval: number): void;
}
declare namespace controller.__internal {
    function onGesture(gesture: ControllerGesture, handler: () => void): void;
    function onCustomGesture(id: number, update: () => boolean, handler: () => void): void;
    function acceleration(dimension: ControllerDimension): number;
}
declare namespace controller {
    /**
     * Configures the pins used by the crank
     * @param pinA
     * @param pinB
     */
    function setCrankPins(pinA: DigitalInOutPin, pinB: DigitalInOutPin): void;
}
declare namespace controller.__internal {
    function crankPosition(): number;
    function setCrankPins(pinA: DigitalInOutPin, pinB: DigitalInOutPin): void;
}
declare namespace controller {
    /**
     * Shows an animation on the controller lights
     * @param animation
     * @param duration
     */
    function startLightAnimation(animation: light.NeoPixelAnimation, duration: number): void;
}
declare namespace controller.__internal {
    function startLightAnimation(animation: light.NeoPixelAnimation, duration: number): void;
    function startLightPulse(rgb: number, duration: number): void;
}
declare namespace controller.__internal {
    function lightLevel(): number;
    function onLightConditionChanged(condition: ControllerLightCondition, handler: () => void): void;
}
declare namespace controller.__internal {
    function temperature(unit: ControllerTemperatureUnit): number;
}
declare namespace controller.__internal {
    function vibrate(millis: number): void;
}
declare namespace controller {
    /**
     * Gets the current position of the crank.
     */
    function crankPosition(): number;
}
declare namespace controller {
    /**
     * Shows a color pulse
     * @param rgb RGB color of the LED
     */
    function startLightPulse(rgb: number, duration: number): void;
}
declare namespace light {
}
declare enum ControllerLightCondition {
    Dark = 1,// SENSOR_THRESHOLD_LOW
    Bright = 2
}
declare namespace controller {
    /**
     * Read the light level applied to the LED screen in a range from 0 (dark) to 255 (bright).
     */
    function lightLevel(): number;
    /**
     * Register an event that runs when light conditions (darker or brighter) change.
     * @param condition the condition that event triggers on
     */
    function onLightConditionChanged(condition: ControllerLightCondition, handler: () => void): void;
}
declare namespace controller {
    interface ControllerSceneState {
        lastGesture?: ControllerGesture;
        gestureHandlers?: any;
        lastCustomGesture?: number;
        customGestureHandlers?: any;
        lastLightCondition?: ControllerLightCondition;
        lightHandlers?: any;
    }
    interface CustomGestureHandler {
        update: () => boolean;
        handler: () => void;
    }
    function sceneState(): ControllerSceneState;
}
declare const enum ControllerTemperatureUnit {
    Celsius = 0,
    Fahrenheit = 1
}
declare namespace controller {
    /**
     * Get the temperature in Celsius or Fahrenheit degrees.
     */
    function temperature(unit: ControllerTemperatureUnit): number;
}
declare namespace controller {
    /**
     * Vibrates the controller for the given duration (in milli seconds)
     * @param millis
     */
    function vibrate(millis: number): void;
}
declare namespace pins {
    /**
     * Read one number from an I2C address.
     */
    function i2cReadNumber(address: number, format: NumberFormat, repeated?: boolean): number;
    /**
     * Write one number to an I2C address.
     */
    function i2cWriteNumber(address: number, value: number, format?: NumberFormat, repeated?: boolean): void;
    /**
     * Write a value in a I2C register.
     * @param address I2c address of the device
     * @param register register index
     * @param value value to write
     * @param valueFormat format of the value, default is UInt8LE
     */
    function i2cWriteRegister(address: number, register: number, value: number, valueFormat?: NumberFormat): void;
    /**
     * Read the value from a I2C register.
     * @param address I2c address of the device
     * @param register register index
     * @param valueFormat format of the value, default is UInt8LE
     */
    function i2cReadRegister(address: number, register: number, valueFormat?: NumberFormat): number;
    /**
     * Gets the default I2C bus
     */
    function i2c(): I2C;
    class I2CDevice {
        address: number;
        bus: I2C;
        private _hasError;
        constructor(address: number, bus?: I2C);
        readInto(buf: Buffer, repeat?: boolean, start?: number, end?: number): void;
        write(buf: Buffer, repeat?: boolean): void;
        begin(): I2CDevice;
        end(): void;
        ok(): boolean;
        transfer(command: Buffer, response: Buffer, responseStart?: number, responseEnd?: number): void;
    }
}
declare namespace configStorage {
    /**
     * Stores the value at the key entry
     * @param key identifier of the key (max 16 characters)
     * @param value identifier of the value (max 32 characters)
     */
    function setItem(key: string, value: string): void;
    /**
     * Retrieves the value at the key entry
     * @param key identifier of the key (max 16 characters)
     */
    function getItem(key: string): string;
}
declare namespace pins {
    class LevelDetector {
        id: number;
        min: number;
        max: number;
        lowThreshold: number;
        highThreshold: number;
        private transition;
        private transitionMs;
        private _level;
        private _state;
        onHigh: () => void;
        onLow: () => void;
        onNeutral: () => void;
        transitionWindow: number;
        transitionInterval: number;
        static LEVEL_THRESHOLD_NEUTRAL: number;
        constructor(id: number, min: number, max: number, lowThreshold: number, highThreshold: number);
        reset(): void;
        get level(): number;
        set level(level: number);
        setLowThreshold(value: number): void;
        setHighThreshold(value: number): void;
        private clampValue;
        private setState;
    }
}
/**
 * Events and data from sensors.
 */
declare namespace input {
}
/**
 * Servos
 */
declare namespace servos {
}
/**
 * A Joint Asynchronous Communications, Device Agnostic Control.
 */
declare namespace jacdac {
}
interface DigitalInOutPin {
}
interface AnalogInPin extends DigitalInOutPin {
}
interface AnalogOutPin extends DigitalInOutPin {
}
interface AnalogInOutPin extends AnalogInPin, AnalogOutPin {
}
interface PwmOnlyPin extends DigitalInOutPin, AnalogOutPin {
}
interface PwmPin extends PwmOnlyPin, AnalogInOutPin {
}
/**
 * Control currents in Pins for analog/digital signals, servos, i2c, ...
 */
declare namespace pins {
}
declare namespace pins {
    /**
    * Gets the default SPI driver
    */
    function spi(): SPI;
}
declare namespace control {
    /**
     * A timer
     */
    class Timer {
        start: number;
        constructor();
        /**
         * Gets the elapsed time in millis since the last reset
         */
        millis(): number;
        /**
         * Gets the elapsed time in seconds since the last reset
         */
        seconds(): number;
        /**
         * Resets the timer
         */
        reset(): void;
        /**
         * Pauses until the timer reaches the given amount of milliseconds
         * @param ms how long to pause for, eg: 5, 100, 200, 500, 1000, 2000
         */
        pauseUntil(ms: number): void;
    }
    const timer1: Timer;
    const timer2: Timer;
    const timer3: Timer;
    const timer4: Timer;
    const timer5: Timer;
    const timer6: Timer;
    const timer7: Timer;
    const timer8: Timer;
}
declare namespace crypto {
    /**
     * Compute cryptographic SHA256 hash of the concatenation of buffers. Returns 32-byte buffer.
     */
    function sha256(buffers: Buffer[]): Buffer;
    /**
     * Compute keyed-Hash Message Authentication Code as defined in RFC 2104.
     */
    function sha256Hmac(key: Buffer, msg: Buffer): Buffer;
}
declare enum LogSeparator {
    Tab = 9,
    Comma = 44,
    Semicolon = 59
}
/**
 * A tiny data logging framework
 */
declare namespace datalogger {
    let SEPARATOR: string;
    /**
     * A storage for log data
     */
    class Storage {
        constructor();
        /**
         * Initializes the storage
         */
        init(): void;
        /**
         * Appends the headers in log
         */
        appendHeaders(headers: string[]): void;
        /**
         * Appends a row of data
         */
        appendRow(values: number[]): void;
        /**
         * Flushes any buffered data
         */
        flush(): void;
    }
    /**
     * Start a new row of data
     */
    function addRow(): void;
    /**
     * Add a named value to the row of data
     * @param name name of the cell, eg: "x"
     * @param value value of the cell, eg: 0
     */
    function addValue(name: string, value: number): void;
    /**
     *
     * @param storage custom storage solution
     */
    function setStorage(storage: Storage): void;
    /**
     * Commits any buffered row to disk
     */
    function flush(): void;
    /**
     * Set the minimum number of milliseconds between rows
     * @param millis milliseconds between each sample, eg: 50
     */
    function setSampleInterval(millis: number): void;
    /**
     * Turn on or off datalogging
     * @param enabled
     */
    function setEnabled(enabled: boolean): void;
    /**
     * Send the data logger output to the console
     * @param enabled
     */
    function sendToConsole(enabled: boolean): void;
    /**
     * Set the character used to separate values in a row.
     * @param separator the value separator character, eg: "\t"
     */
    function setSeparator(separator: LogSeparator): void;
}
declare namespace datalogger {
    /**
        * A storage for datalog data
    */
    class FileStorage extends Storage {
        filename: string;
        constructor(filename: string);
        /**
         * Initializes the storage
         */
        init(): void;
        /**
         * Appends the headers in datalog
         */
        appendHeaders(headers: string[]): void;
        /**
         * Appends a row of data
         */
        appendRow(values: number[]): void;
        /**
         * Flushes any buffered data
         */
        flush(): void;
    }
}
declare namespace datalogger {
}
/**
 * Basic screen display functionalities
 */
declare namespace display {
    /**
     * Gets the text line height
     */
    function lineHeight(): number;
    /**
     * Number of lines
     */
    function lineCount(): number;
    /**
     * Show text on the screen at a specific line.
     * @param text the text to print on the screen, eg: "Hello world"
     * @param line the line number to print the text at (starting at 1), eg: 1
     */
    function showString(text: string, line: number): void;
    /**
     * Shows a number on the screen
     * @param value the numeric value
     * @param line the line number to print the text at (starting at 1), eg: 1
     */
    function showNumber(value: number, line: number): void;
    /**
     * Shows a name, value pair on the screen
     * @param value the numeric value
     * @param line the line number to print the text at (starting at 1), eg: 1
     */
    function showValue(name: string, value: number, line: number): void;
    /**
     * Clear the screen
     */
    function clear(): void;
    /**
     * Sends the log messages to the brick screen and uses the brick up and down buttons to scroll.
     */
    function showConsole(): void;
}
declare namespace display.text {
    let maxLines: number;
    function scroll(pos: number): void;
}
declare namespace display {
    /**
     * Show an image on the screen
     * @param image image to draw
     */
    function showImage(image: Image, duration?: number): void;
}
declare namespace display {
    /**
     * Adds a new point to the trend chart and renders it to the screen.
     */
    function graph(value: number): void;
    /**
     * Clears the trend chart and the screen
     */
    function graphClear(): void;
}
declare enum DigitalPin {
    P0 = 400,
    P1 = 401,
    P2 = 402,
    P3 = 403,
    P4 = 404,
    P5 = 405,
    P6 = 406,
    P7 = 407,
    P8 = 408,
    P9 = 409,
    P10 = 410,
    P11 = 411,
    P12 = 412,
    P13 = 413,
    P14 = 414,
    P15 = 415,
    P16 = 416,
    P19 = 419,
    P20 = 420
}
declare enum AnalogPin {
    P0 = 400,
    P1 = 401,
    P2 = 402,
    P3 = 403,
    P4 = 404,
    P10 = 410,
    P5 = 405,
    P6 = 406,
    P7 = 407,
    P8 = 408,
    P9 = 409,
    P11 = 411,
    P12 = 412,
    P13 = 413,
    P14 = 414,
    P15 = 415,
    P16 = 416,
    P19 = 419,
    P20 = 420
}
declare namespace pins {
    /**
     * Sets the pin pull
     * @param pin
     * @param mode
     */
    function setPull(pin: DigitalPin, mode: PinPullMode): void;
    /**
     * Sets the digital pin status
     * @param pin
     * @param value
     */
    function digitalWritePin(pin: DigitalPin, value: number): void;
    /**
     * Reads the pin status
     * @param pin
     */
    function digitalReadPin(pin: DigitalPin): number;
    /**
     * Sets the digital pin status
     * @param pin
     * @param value
     */
    function analogWritePin(pin: AnalogPin, value: number): void;
    /**
     * Reads the pin status
     * @param pin
     */
    function analogReadPin(pin: AnalogPin): number;
    /**
    * Make this pin a digital input, and create events where the timestamp is the duration
    * that this pin was either ``high`` or ``low``.
    */
    function onPulsed(pin: DigitalPin, pulse: PulseValue, body: () => void): void;
    /**
    * Register code to run when a pin event occurs.
    */
    function onEvent(pin: DigitalPin, event: PinEvent, body: () => void): void;
    /**
    * Return the duration of a pulse in microseconds
    * @param name the pin which measures the pulse
    * @param value the value of the pulse (default high)
    * @param maximum duration in micro-seconds
    */
    function pulseIn(pin: DigitalPin, value: PulseValue, maxDuration?: number): number;
    function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
}
declare namespace esp32 {
    enum ATStatus {
        None = 0,
        Ok = 1,
        Error = 2
    }
    interface ATResponse {
        status: ATStatus;
        errorCode?: number;
        lines: string[];
    }
    /**
     * Controller for AT command set https://github.com/espressif/esp-at/blob/master/docs/ESP_AT_Commands_Set.md
     */
    class ATController extends net.Controller {
        private ser;
        private prefix;
        private newLine;
        constructor(ser: serial.Serial);
        /**
         * Sends and receives an AT command
         * @param command command name
         */
        private sendAT;
        private parseNumber;
        get isIdle(): boolean;
        version(): string;
        get isConnected(): boolean;
        ping(dest: string, ttl?: number): number;
        scanNetworksCore(): net.AccessPoint[];
        socket(): number;
        socketConnect(socket_num: number, dest: string | Buffer, port: number, conn_mode?: number): boolean;
        socketWrite(socket_num: number, buffer: Buffer): void;
        socketAvailable(socket_num: number): number;
        socketRead(socket_num: number, size: number): Buffer;
        socketClose(socket_num: number): void;
        hostbyName(hostname: string): Buffer;
        get ssid(): string;
        get MACaddress(): Buffer;
    }
}
declare namespace esp32 {
}
declare namespace esp32 {
    const SOCKET_CLOSED = 0;
    const SOCKET_LISTEN = 1;
    const SOCKET_SYN_SENT = 2;
    const SOCKET_SYN_RCVD = 3;
    const SOCKET_ESTABLISHED = 4;
    const SOCKET_FIN_WAIT_1 = 5;
    const SOCKET_FIN_WAIT_2 = 6;
    const SOCKET_CLOSE_WAIT = 7;
    const SOCKET_CLOSING = 8;
    const SOCKET_LAST_ACK = 9;
    const SOCKET_TIME_WAIT = 10;
    const WL_NO_SHIELD = 255;
    const WL_NO_MODULE = 255;
    const WL_IDLE_STATUS = 0;
    const WL_NO_SSID_AVAIL = 1;
    const WL_SCAN_COMPLETED = 2;
    const WL_CONNECTED = 3;
    const WL_CONNECT_FAILED = 4;
    const WL_CONNECTION_LOST = 5;
    const WL_DISCONNECTED = 6;
    const WL_AP_LISTENING = 7;
    const WL_AP_CONNECTED = 8;
    const WL_AP_FAILED = 9;
    class NinaController extends net.Controller {
        private _spi;
        private _cs;
        private _busy;
        private _reset;
        private _gpio0;
        private _socknum_ll;
        private _locked;
        wasConnected: boolean;
        constructor(_spi: SPI, _cs: DigitalInOutPin, _busy: DigitalInOutPin, _reset: DigitalInOutPin, _gpio0?: DigitalInOutPin);
        /**
         * Hard reset the ESP32 using the reset pin
        */
        reset(): void;
        private readByte;
        private checkData;
        /** Read a byte with a time-out, and if we get it, check that its what we expect */
        private waitSPIChar;
        /**
         * Wait until the ready pin goes low
         */
        private waitForReady;
        private _sendCommand;
        private spiTransfer;
        private _waitResponseCmd;
        private lock;
        private unlock;
        private sendCommandGetResponse;
        get status(): number;
        /** A string of the firmware version on the ESP32 */
        get firmwareVersion(): string;
        /** A bytearray containing the MAC address of the ESP32 */
        get MACaddress(): Buffer;
        /** Begin a scan of visible access points. Follow up with a call
    to 'get_scan_networks' for response
*/
        private startScanNetworks;
        /** The results of the latest SSID scan. Returns a list of dictionaries with
    'ssid', 'rssi' and 'encryption' entries, one for each AP found
*/
        private getScanNetworks;
        /** Scan for visible access points, returns a list of access point details.
     Returns a list of dictionaries with 'ssid', 'rssi' and 'encryption' entries,
     one for each AP found
    */
        protected scanNetworksCore(): net.AccessPoint[];
        /** Tells the ESP32 to set the access point to the given ssid */
        wifiSetNetwork(ssid: string): void;
        /** Sets the desired access point ssid and passphrase */
        wifiSetPassphrase(ssid: string, passphrase: string): void;
        /** Sets the WPA2 Enterprise anonymous identity */
        wifiSetEntidentity(ident: string): void;
        /** Sets the desired WPA2 Enterprise username */
        wifiSetEntusername(username: string): void;
        /** Sets the desired WPA2 Enterprise password */
        wifiSetEntpassword(password: string): void;
        /** Enables WPA2 Enterprise mode */
        wifiSetEntenable(): void;
        get ssidBuffer(): Buffer;
        get ssid(): string;
        get rssi(): number;
        get networkData(): any;
        get ipAddress(): string;
        get isConnected(): boolean;
        get isIdle(): boolean;
        /**
         * Connect to an access point with given name and password.
         * Will retry up to 10 times and return on success
        */
        connectAP(ssid: string, password: string): boolean;
        /**
         * Convert a hostname to a packed 4-byte IP address. Returns
    a 4 bytearray
    */
        hostbyName(hostname: string): Buffer;
        /** Ping a destination IP address or hostname, with a max time-to-live
    (ttl). Returns a millisecond timing value
    */
        ping(dest: string, ttl?: number): number;
        /** Request a socket from the ESP32, will allocate and return a number that
    can then be passed to the other socket commands
    */
        socket(): number;
        /** Open a socket to a destination IP address or hostname
    using the ESP32's internal reference number. By default we use
    'conn_mode' TCP_MODE but can also use UDP_MODE or TLS_MODE
    (dest must be hostname for TLS_MODE!)
    */
        socketOpen(socket_num: number, dest: Buffer | string, port: number, conn_mode?: number): void;
        /** Get the socket connection status, can be SOCKET_CLOSED, SOCKET_LISTEN,
    SOCKET_SYN_SENT, SOCKET_SYN_RCVD, SOCKET_ESTABLISHED, SOCKET_FIN_WAIT_1,
    SOCKET_FIN_WAIT_2, SOCKET_CLOSE_WAIT, SOCKET_CLOSING, SOCKET_LAST_ACK, or
    SOCKET_TIME_WAIT
    */
        socketStatus(socket_num: number): number;
        /** Test if a socket is connected to the destination, returns boolean true/false */
        socket_connected(socket_num: number): boolean;
        /** Write the bytearray buffer to a socket */
        socketWrite(socket_num: number, buffer: Buffer): void;
        /** Determine how many bytes are waiting to be read on the socket */
        socketAvailable(socket_num: number): number;
        /** Read up to 'size' bytes from the socket number. Returns a bytearray */
        socketRead(socket_num: number, size: number): Buffer;
        /** Open and verify we connected a socket to a destination IP address or hostname
    using the ESP32's internal reference number. By default we use
    'conn_mode' TCP_MODE but can also use UDP_MODE or TLS_MODE (dest must
    be hostname for TLS_MODE!)
    */
        socketConnect(socket_num: number, dest: string | Buffer, port: number, conn_mode?: number): boolean;
        /** Close a socket using the ESP32's internal reference number */
        socketClose(socket_num: number): void;
        /** Enable/disable debug mode on the ESP32. Debug messages will be
    written to the ESP32's UART.
    */
        setESPdebug(enabled: boolean): void;
        getTemperature(): number;
        /**
    Set the io mode for a GPIO pin.
    
    :param int pin: ESP32 GPIO pin to set.
    :param value: direction for pin, digitalio.Direction or integer (0=input, 1=output).
     
    */
        setPinMode(pin: number, pin_mode: number): void;
        /**
    Set the digital output value of pin.
    
    :param int pin: ESP32 GPIO pin to write to.
    :param bool value: Value for the pin.
     
    */
        setDigitalWrite(pin: number, value: number): void;
        /**
    Set the analog output value of pin, using PWM.
    
    :param int pin: ESP32 GPIO pin to write to.
    :param float value: 0=off 1.0=full on
     
    */
        setAnalogWrite(pin: number, analog_value: number): void;
    }
    function flashDevice(): void;
}
declare enum GamepadButton {
    B = 0,
    A = 1,
    Y = 2,
    X = 3,
    LeftBumper = 4,
    RightBumper = 5,
    LeftTrigger = 6,
    RightTrigger = 7,
    Select = 8,
    Start = 9,
    LeftStick = 10,
    RightStick = 11,
    Up = 12,
    Down = 13,
    Left = 14,
    Right = 15
}
declare namespace gamepad {
    /**
     * Maps to a standard layout button to the button index
     * @param button the name of the button
     */
    function button(button: GamepadButton): number;
}
declare class InfraredPacket {
    /**
     * The first number in the payload.
     */
    receivedNumber: number;
    /**
     * The array of numbers of received.
     */
    receivedNumbers: number[];
    /**
     * The raw buffer of data received
     */
    receivedBuffer: Buffer;
}
declare namespace network {
    /**
     * Send a number over the infrared transmitter.
     * @param value number to send
     */
    function infraredSendNumber(value: number): void;
    /**
     * Send an array of numbers over infrared. The array size has to be 32 bytes or less.
     * @param values
     */
    function infraredSendNumbers(values: number[]): void;
    /**
     * Run some code when the infrared receiver gets a number.
     */
    function onInfraredReceivedNumber(handler: (num: number) => void): void;
    /**
     * Run some code when the infrared receiver gets a list of numbers.
     */
    function onInfraredReceivedNumbers(handler: (nums: number[]) => void): void;
    /**
     * Run some code when the infrared receiver gets a buffer.
     */
    function onInfraredReceivedBuffer(handler: (buf: Buffer) => void): void;
    /**
     * Run some code when the infrared receiver gets a packet.
     */
    function onInfraredPacketReceived(cb: (p: InfraredPacket) => void): void;
}
declare const enum KeyboardMediaKey {
    Mute = 0,
    VolumeUp = 1,
    VolumeDown = 2,
    PlayPause = 3,
    Stop = 4,
    PreviousTrack = 5,
    NextTrack = 6,
    Mail = 7,
    Calculator = 8,
    WebSearch = 9,
    WebHome = 10,
    WebFavourites = 11,
    WebRefresh = 12,
    WebStop = 13,
    WebForward = 14,
    WebBack = 15
}
declare const enum KeyboardFunctionKey {
    F1Key = 58,
    F2Key = 59,
    F3Key = 60,
    F4Key = 61,
    F5Key = 62,
    F6Key = 63,
    F7Key = 64,
    F8Key = 65,
    F9Key = 66,
    F10Key = 67,
    F11Key = 68,
    F12Key = 69,
    F13Key = 104,
    F14Key = 105,
    F15Key = 106,
    F16Key = 107,
    F17Key = 108,
    F18Key = 109,
    F19Key = 110,
    F20Key = 111,
    F21Key = 112,
    F22Key = 113,
    F23Key = 114,
    F24Key = 115,
    Enter = 40,
    Esc = 41,
    Backspace = 42,
    Tab = 43,
    CapsLock = 57,
    NumLock = 83,
    KeypadSlash = 84,
    KeypadAsterisk = 85,
    KeypadMinus = 86,
    KeypadPlus = 87,
    KeypadEnter = 88,
    Keypad1 = 89,
    Keypad2 = 90,
    Keypad3 = 91,
    Keypad4 = 92,
    Keypad5 = 93,
    Keypad6 = 94,
    Keypad7 = 95,
    Keypad8 = 96,
    Keypad9 = 97,
    Keypad0 = 98,
    KeypadDot = 99,
    Compose = 101,
    Power = 102,
    KeypadEqual = 103,
    Open = 116,
    Help = 117,
    Props = 118,
    Front = 119,
    Stop = 120,
    Again = 121,
    Undo = 122,
    Cut = 123,
    Copy = 124,
    Paste = 125,
    Find = 126,
    Mute = 127,
    VolumeUp = 128,
    VolumeDown = 129,
    KeypadComma = 133,
    KeypadJumpComma = 140,
    KeypadLeftParenthesis = 182,
    KeypadRightParenthesis = 183,
    PrintScreen = 70,
    ScrollLock = 71,
    Pause = 72,
    Insert = 73,
    Home = 74,
    PageUp = 75,
    DeleteForward = 76,
    End = 77,
    PageDown = 78,
    RightArrow = 79,
    LeftArrow = 80,
    DownArrow = 81,
    UpArrow = 82
}
declare const enum KeyboardModifierKey {
    Control = 1,
    Shift = 2,
    Alt = 4,
    Meta = 8,
    ControlShift = 3,
    ControlAlt = 5,
    ShiftAlt = 6,
    ControlCommand = 9,
    ShiftCommand = 10,
    AltCommand = 12,
    ControlShiftAlt = 7,
    ControlCommandShiftAlt = 15,
    RightControl = 16,
    RightShift = 32,
    RightAlt = 64,
    RightMeta = 128
}
/**
 * Keyboard emulation
 */
declare namespace keyboard {
    /**
    * Send a sequence of keystrokes to the keyboard
    */
    function type(text: string, modifiers?: KeyboardModifierKey): void;
    /**
    * Send a key command
    */
    function key(key: string, event: KeyboardKeyEvent): void;
    /**
    * Send a media key command
    */
    function mediaKey(key: KeyboardMediaKey, event: KeyboardKeyEvent): void;
    /**
    * Send a function key command
    */
    function functionKey(key: KeyboardFunctionKey, event: KeyboardKeyEvent): void;
    /**
    * Send a modifier key command
    */
    function modifierKey(key: KeyboardModifierKey, event: KeyboardKeyEvent): void;
    /**
     * Send up commands for any remaning down keys
     */
    function clearAllKeys(): void;
}
declare namespace lcd {
    class CharacterLCD {
        columns: number;
        lines: number;
        reset: DigitalInOutPin;
        enable: DigitalInOutPin;
        dl4: DigitalInOutPin;
        dl5: DigitalInOutPin;
        dl6: DigitalInOutPin;
        dl7: DigitalInOutPin;
        displaycontrol: number;
        displayfunction: number;
        displaymode: number;
        _message: string;
        _enable: boolean;
        _rtl: boolean;
        constructor(rs: DigitalInOutPin, en: DigitalInOutPin, d4: DigitalInOutPin, d5: DigitalInOutPin, d6: DigitalInOutPin, d7: DigitalInOutPin, columns: number, lines: number);
        /**
         * Moves the cursor "home" to position (1, 1).
         **/
        home(): void;
        /** Clears everything displayed on the LCD.
         * The following example displays, "Hello, world!", then clears the LCD.
         **/
        clear(): void;
        /**
         * True if cursor is visible. False to stop displaying the cursor.
         */
        get cursor(): boolean;
        set cursor(show: boolean);
        /**
         * Move the cursor to position ``column``, ``row``
         **/
        setCursorPosition(column: number, row: number): void;
        /**
        * Blink the cursor. True to blink the cursor. False to stop blinking.
        */
        get blink(): boolean;
        set blink(value: boolean);
        /**
        * Enable or disable the display. True to enable the display. False to disable the display.
        */
        get display(): boolean;
        set display(enable: boolean);
        /**
         * Display a string of text on the character LCD.
         */
        get message(): string;
        set message(message: string);
        /**
         * Moves displayed text left one column.
         **/
        moveLeft(): void;
        /**
         * Moves displayed text right one column.
         **/
        moveRight(): void;
        get rightToLeft(): boolean;
        set rightToLeft(direction: boolean);
        private _left_to_right;
        private _right_to_left;
        /**
         * Fill one of the first 8 CGRAM locations with custom characters.
         * The location parameter should be between 0 and 7 and pattern should
         * provide an array of 8 bytes containing the pattern. E.g. you can easily
         * design your custom character at http://www.quinapalus.com/hd44780udg.html
         * To show your custom character use, for example, ``lcd.message = ""``
*/
        create_char(location: number, pattern: Buffer): void;
        /**
         * Sends 8b ``value`` in ``char_mode``.
         * @param value bytes
         * @param char_mode character/data mode selector. False (default) for data only, True for character bits.
         */
        private _write8;
        private _pulse_enable;
    }
}
declare namespace lcd {
    class CharacterLCDMono extends CharacterLCD {
        backlight_pin: DigitalInOutPin;
        backlight_inverted: boolean;
        /**
         * Interfaces with monochromatic character LCDs.
        @param backlight_inverted: ``False`` if LCD is not inverted, i.e. backlight pin is
            connected to common anode. ``True`` if LCD is inverted i.e. backlight pin is connected
            to common cathode.
        */
        constructor(rs: DigitalInOutPin, en: DigitalInOutPin, db4: DigitalInOutPin, db5: DigitalInOutPin, db6: DigitalInOutPin, db7: DigitalInOutPin, columns: number, lines: number, backlight_pin?: DigitalInOutPin, backlight_inverted?: boolean);
        /**
         * Enable or disable backlight. True if backlight is on. False if backlight is off.
         **/
        get backlight(): boolean;
        set backlight(enable: boolean);
    }
}
declare namespace lcd {
    class CharacterLCDRGB extends CharacterLCD {
        read_write: DigitalInOutPin; /** TODO: type **/
        rgb_led: PwmOnlyPin[]; /** TODO: type **/
        _color: number;
        /**
         * Interfaces with RGB character LCDs.
        */
        constructor(rs: DigitalInOutPin, en: DigitalInOutPin, db4: DigitalInOutPin, db5: DigitalInOutPin, db6: DigitalInOutPin, db7: DigitalInOutPin, columns: number, lines: number, red: PwmOnlyPin, green: PwmOnlyPin, blue: PwmOnlyPin, read_write?: DigitalInOutPin);
        /**
        * The color of the display. Provide a list of three integers ranging 0 - 100, ``[R, G, B]``.
        * ``0`` is no color, or "off". ``100`` is maximum color. For example, the brightest red would
        * be ``[100, 0, 0]``, and a half-bright purple would be, ``[50, 0, 50]``.
    
        * If PWM is unavailable, ``0`` is off, and non-zero is on. For example, ``[1, 0, 0]`` would
        * be red.
        **/
        get color(): number;
        set color(color: number);
    }
}
/**
 * Character LCD support
 */
declare namespace lcd {
    /**
     * Gets the current LCD screen
     */
    function screen(): CharacterLCD;
    /**
     * Shows a string on the LCD screen
     * @param text the text to show
     * @param line the line number starting at 1...
     */
    function showString(text: string, line?: number): void;
    /**
     * Shows a number on the LCD screen
     * @param value the number to show
     */
    function showNumber(value: number, line?: number): void;
    /**
 * Shows a name, value pair on the screen
 * @param value the numeric value
 * @param line the line number to print the text at (starting at 1), eg: 1
 */
    function showValue(name: string, value: number, line: number): void;
    /**
     * Clears the screen
     */
    function clear(): void;
    /**
     * Enables or disables display
     * @param enabled true to turn the display on; false otherwise
     */
    function setDisplay(enabled: boolean): void;
    /**
     * Enables or disables blinking
     * @param enabled true to blink
     */
    function setBlink(enabled: boolean): void;
    /**
     * Show or hide cursor
     * @param enabled true to display cursor, false otherwise
     */
    function setCursor(enabled: boolean): void;
}
declare namespace light {
    /**
     * Create a new programmable light strip.
     * @param pin the pin where the strip is connected.
     * @param numleds number of leds in the strip, eg: 30
     * @param mode the light encoding mode for different LED strips, eg: NeoPixelMode.RGB_GRB
     */
    function createStrip(pin?: DigitalInOutPin, numleds?: number, mode?: NeoPixelMode): NeoPixelStrip;
    /**
     * Creates a strip of colored LEDs (APA102)
     */
    function createAPA102Strip(dataPin: DigitalInOutPin, clkPin: DigitalInOutPin, numleds: number): NeoPixelStrip;
}
declare namespace light {
    /**
     * Gets the default external light strip
     */
    const pixels: NeoPixelStrip;
    /**
     * Set all of the pixels on the strip to one RGB color.
     * @param rgb RGB color of the LED
     */
    function setAll(rgb: number): void;
    /**
     * Sets a gradient between two colors
     * @param startColor the start color
     * @param endColor the end color
     */
    function setGradient(startRgb: number, endRgb: number): void;
    /**
     * Turn off all pixel LEDs on the onboard strip.
     */
    function clear(): void;
    /**
     * Display a vertical bar graph based on the `value` and `high` value.
     * If `high` is 0, the chart gets adjusted automatically.
     * @param value current value to plot
     * @param high maximum value, 0 to autoscale
     */
    function graph(value: number, high?: number): void;
    /**
     * Set the pixel to a given color.
     * @param pixeloffset position of the NeoPixel in the strip
     * @param color RGB color of the LED
     */
    function setPixelColor(pixeloffset: number, color: number): void;
    /**
     * Gets the pixel color at a given offset.
     * @param pixeloffset position of the NeoPixel in the strip
     */
    function pixelColor(pixeloffset: number): number;
    /**
     * Set the brightness of the strip. This flag only applies to future operation.
     * @param brightness a measure of LED brightness in 0-255. eg: 20
     */
    function setBrightness(brightness: number): void;
    /**
     * Move a photon effect along the pixel strip by a number of steps.
     * @param steps number of steps (lights) to move, eg: 1
     */
    function photonForward(steps: number): void;
    /**
         * Switch the direction of the photon pulse.
         */
    function photonFlip(): void;
    /**
     * Sets the photon position to a given light index
     * @param index index of the light, if out of bound, the index is wrapped
     */
    function setPhotonPosition(index: number): void;
    /**
     * Set the photon color hue.
     * @param hue the color hue of the photon
     */
    function setPhotonPenHue(hue: number): void;
    /**
     * Set the photon mode to pen up, pen down, or eraser.
     * @param mode the desired mode
     */
    function setPhotonMode(mode: PhotonMode): void;
    /**
     * Show an animation or queue an animation in the animation queue
     * @param animation the animation to run, eg: light.rainbowAnimation
     * @param duration the duration to run in milliseconds, eg: 500
     */
    function showAnimation(animation: NeoPixelAnimation, duration: number): void;
    /**
      * Show a single animation frame
      * @param animation the animation to run, eg: light.rainbowAnimation
      */
    function showAnimationFrame(animation: NeoPixelAnimation): void;
    /**
     * Stop the current animation and any other animations ready to show.
     */
    function stopAllAnimations(): void;
    /**
     * Creates a builtin animation
     * @param kind the type of animation
     */
    function animation(kind: LightAnimation): NeoPixelAnimation;
}
declare namespace light {
    /**
     * Create a range of pixels.
     * @param start offset in the NeoPixel strip to start the range
     * @param length number of pixels in the range, eg: 4
     */
    function range(start: number, length: number): NeoPixelStrip;
    /**
     * Sets the number of LEDS on the default light strip
     */
    function setLength(numleds: number): void;
    /**
     * Sets the type of RGB light on the default strip
     */
    function setMode(mode: NeoPixelMode): void;
}
declare namespace light {
    /**
     * Gets the default light strip
     */
    function defaultStrip(): NeoPixelStrip;
}
/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
declare const enum NeoPixelMode {
    RGB = 1,
    RGBW = 2,
    RGB_RGB = 3,
    APA102 = 4
}
declare const enum LightMove {
    Rotate = 0,
    Shift = 1
}
/**
 * A determines the mode of the photon
 */
declare const enum PhotonMode {
    PenUp = 0,
    PenDown = 1,
    Eraser = 2,
    Off = 3
}
declare const enum LightAnimation {
    Rainbow = 0,
    RunningLights = 1,
    Comet = 2,
    Sparkle = 3,
    TheaterChase = 4,
    ColorWipe = 5
}
/**
 * Functions to operate colored LEDs.
 */
declare namespace light {
    type LightStrip = NeoPixelStrip;
    /**
     * A NeoPixel strip
     */
    class NeoPixelStrip {
        _parent: NeoPixelStrip;
        _dataPin: DigitalInOutPin;
        _clkPin: DigitalInOutPin;
        _buf: Buffer;
        _brightnessBuf: Buffer;
        _sendBuf: Buffer;
        _brightness: number;
        _start: number;
        _length: number;
        _mode: NeoPixelMode;
        _buffered: boolean;
        _animationQueue: control.AnimationQueue;
        _barGraphHigh: number;
        _barGraphHighLast: number;
        _photonMode: number;
        _photonPos: number;
        _photonDir: number;
        _photonPenColor: number;
        _lastAnimation: NeoPixelAnimation;
        _lastAnimationRenderer: () => boolean;
        _transitionPlayer: BrightnessTransitionPlayer;
        constructor();
        /**
         * Gets the underlying color buffer for the entire strip
         */
        get buf(): Buffer;
        get brightnessBuf(): Buffer;
        /**
         * Gets the LED data layout mode
         */
        get mode(): NeoPixelMode;
        /**
         * Set all of the pixels on the strip to one RGB color.
         * @param rgb RGB color of the LED
         */
        setAll(rgb: number): void;
        /**
         * Sets a gradient between two colors
         * @param startColor the start color
         * @param endColor the end color
         */
        setGradient(startColor: number, endColor: number): void;
        /**
         * Display a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, 0 to autoscale
         */
        graph(value: number, high?: number): void;
        /**
         * Set the pixel to a given color.
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param color RGB color of the LED
         */
        setPixelColor(pixeloffset: number, c: number): void;
        /**
         * Gets the pixel color.
         * @param pixeloffset position of the NeoPixel in the strip
         */
        pixelColor(pixeloffset: number): number;
        /**
         * Set the white brightness of a pixel in a NeoPixel strip of RGB+W LEDs.
         * This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        setPixelWhiteLED(pixeloffset: number, white: number): void;
        /**
         * Make the strip show all the new changes for the pixels.
         */
        show(): void;
        protected drawPhoton(sb: Buffer, stride: number): void;
        /**
         * Turn off all pixel LEDs.
         */
        clear(): void;
        /**
         * Get the number of pixels on the strip
         */
        length(): number;
        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 20
         */
        setBrightness(brightness: number): void;
        /**
         * Sets an individual pixel brightness
         * @param index
         * @param brightness
         */
        setPixelBrightness(index: number, brightness: number): void;
        /**
         * Get the brightness of the pixel strip.
         */
        brightness(): number;
        /**
         * Create a range of pixels.
         * @param start offset in the NeoPixel strip to start the range
         * @param length number of pixels in the range, eg: 4
         */
        range(start: number, length: number): NeoPixelStrip;
        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        move(kind: LightMove, offset?: number): void;
        private stride;
        initPhoton(): void;
        /**
         * Move a photon effect along the pixel strip by a number of steps.
         * @param steps number of steps (lights) to move, eg: 1
         */
        photonForward(steps: number): void;
        /**
         * Switch the direction of the photon pulse.
         */
        photonFlip(): void;
        /**
         * Sets the photon position to a given light index
         * @param index index of the light, if out of bound, the index is wrapped
         */
        setPhotonPosition(index: number): void;
        /**
         * Set the photon color.
         * @param color the color of the photon
         */
        setPhotonPenColor(color: number): void;
        /**
         * Sets the photon hue.
         * @param hue the hue of the photon color
         */
        setPhotonPenHue(hue: number): void;
        setPhotonColor(hue: number): void;
        /**
         * Set the photon mode to pen up, pen down, or eraser.
         * @param mode the desired mode
         */
        setPhotonMode(mode: PhotonMode): void;
        /**
         * Starts a brightness transition on the strip (and cancels any other running transition)
         * @param transition
         * @param duration
         */
        startBrightnessTransition(startBrightness: number, endBrightness: number, duration: number, repeat?: number, yoyo?: boolean, transition?: BrightnessTransition): void;
        /**
         * Stops any running brightness transition
         */
        stopBrightnessTransition(): void;
        /**
         * Show an animation or queue an animation in the animation queue
         * @param animation the animation to run
         * @param duration the duration to run in milliseconds, eg: 500
         */
        showAnimation(animation: NeoPixelAnimation, duration: number): void;
        /**
         * Show a single animation frame.
         * @param animation the animation to run
         */
        showAnimationFrame(animation: NeoPixelAnimation): void;
        /**
         * Renders a pattern of colors on the strip
         */
        showColors(leds: string, interval?: number): void;
        private queueAnimation;
        /**
         * Stop the current animation and any other animations ready to show.
         */
        stopAllAnimations(): void;
        /**
         * Enables or disables automatically calling show when a change is made
         * @param on call show whenever a light is modified
         */
        setBuffered(on: boolean): void;
        /**
         * Gets a value indicated if the changes are buffered
         */
        buffered(): boolean;
        /**
         * Sets the color mode and clears the colors.
         * @param mode the kind of color encoding required by the programmable lights
         */
        setMode(mode: NeoPixelMode): void;
        /**
         * Sets the number of LEDs on a strip
         * @param numleds
         */
        setLength(numleds: number): void;
        private autoShow;
        private setBufferRGB;
        private reallocateBuffer;
        /**
         * Set all of the pixels on the strip to one RGB color.
         * @param rgb RGB color of the LED
         */
        __setAll(rgb: number): void;
        /**
         * Display a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, 0 to autoscale
         */
        __graph(value: number, high: number): void;
        /**
         * Set the pixel to a given color.
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param color RGB color of the LED
         */
        __setPixelColor(pixeloffset: number, color: number): void;
        /**
         * Gets the pixel color.
         * @param pixeloffset position of the NeoPixel in the strip
         */
        __pixelColor(pixeloffset: number): number;
        /**
         * Set the white brightness of a pixel in a NeoPixel strip of RGB+W LEDs.
         * This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        __setPixelWhiteLED(pixeloffset: number, white: number): void;
        /**
         * Make the strip show all the new changes for the pixels.
         */
        __show(): void;
        /**
         * Turn off all pixel LEDs.
         */
        __clear(): void;
        /**
         * Get the number of pixels on the strip
         */
        __length(): number;
        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 20
         */
        __setBrightness(brightness: number): void;
        /**
         * Get the brightness of the pixel strip.
         */
        __brightness(): number;
        /**
         * Create a range of pixels.
         * @param start offset in the NeoPixel strip to start the range
         * @param length number of pixels in the range. eg: 4
         */
        __range(start: number, length: number): NeoPixelStrip;
        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        __move(kind: LightMove, offset?: number): void;
        /**
         * Move a photon effect along the pixel strip by a number of steps.
         * @param steps number of steps (lights) to move, eg: 1
         */
        __photonForward(steps: number): void;
        /**
         * Switch the direction of the photon pulse.
         */
        __photonFlip(): void;
        /**
         * Set the photon color.
         * @param color the color of the photon
         */
        __setPhotonColor(color: number): void;
        /**
         * Set the photon mode to pen up, pen down, or eraser.
         * @param mode the desired mode
         */
        __setPhotonMode(mode: PhotonMode): void;
        /**
         * Show an animation or queue an animation in the animation queue
         * @param animation the animation to run
         * @param duration the duration to run in milliseconds, eg: 500
         */
        __showAnimation(animation: NeoPixelAnimation, duration: number): void;
        /**
         * Show a single animation frame
         * @param animation the animation to run
         */
        __showAnimationFrame(animation: NeoPixelAnimation): void;
        /**
         * Stop the current animation and any other animations ready to show.
         */
        __stopAllAnimations(): void;
        /**
         * Enables or disables automatically calling show when a change is made
         * @param on call show whenever a light is modified
         */
        __setBuffered(on: boolean): void;
        /**
         * Sets the color mode and clears the colors.
         * @param mode the kind of color encoding required by the programmable lights
         */
        __setMode(mode: NeoPixelMode): void;
    }
    /**
     * Creates a strip of colored LEDs (WS2812b)
     */
    function createNeoPixelStrip(pin: DigitalInOutPin, numleds?: number, mode?: NeoPixelMode): NeoPixelStrip;
    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    function rgb(red: number, green: number, blue: number): number;
    /**
     * Get the RGB value of a known color
    */
    function colors(color: Colors): number;
    /**
     * Convert an HSV (hue, saturation, value) color to RGB
     * @param hue value of the hue channel between 0 and 255. eg: 255
     * @param sat value of the saturation channel between 0 and 255. eg: 255
     * @param val value of the value channel between 0 and 255. eg: 255
     */
    function hsv(hue: number, sat?: number, val?: number): number;
    /**
     * Use color.fade instead
     * @param color color to fade
     * @param brightness the amount of brightness to apply to the color, eg: 128
     */
    function fade(c: number, brightness: number): number;
    /**
     * An animation of a NeoPixel
     */
    class NeoPixelAnimation {
        constructor();
        /**
         * Creates an animator instance
         * @param strip the strip to execute on
         */
        createRenderer(strip: NeoPixelStrip): () => boolean;
    }
    class RainbowCycleAnimation extends NeoPixelAnimation {
        delay: number;
        constructor(delay: number);
        createRenderer(strip: NeoPixelStrip): () => boolean;
    }
    const rainbowAnimation: NeoPixelAnimation;
    class RunningLightsAnimation extends NeoPixelAnimation {
        red: number;
        green: number;
        blue: number;
        delay: number;
        constructor(red: number, green: number, blue: number, delay: number);
        createRenderer(strip: NeoPixelStrip): () => boolean;
    }
    const runningLightsAnimation: NeoPixelAnimation;
    const cometAnimation: NeoPixelAnimation;
    class SparkleAnimation extends NeoPixelAnimation {
        rgb: number;
        delay: number;
        constructor(red: number, green: number, blue: number, delay: number);
        createRenderer(strip: NeoPixelStrip): () => boolean;
    }
    const sparkleAnimation: NeoPixelAnimation;
    const colorWipeAnimation: NeoPixelAnimation;
    const theaterChaseAnimation: NeoPixelAnimation;
    /**
     * An animation that can be shown on a light strip
     * @param animation The animation type
     */
    function _animationPicker(animation: NeoPixelAnimation): NeoPixelAnimation;
    /**
  * Get the light length picker
  * @param pixels number of LEDs
  */
    function __lengthPicker(pixels: number): number;
}
/**
 * Functions to operate colored LEDs.
 */
declare namespace light {
}
declare namespace light {
    /**
     * Get the onboard light strip.
     */
    function onboardStrip(): NeoPixelStrip;
}
declare namespace easing {
    function linear(t: number): number;
    function inQuad(t: number): number;
    function outQuad(t: number): number;
    function inOutQuad(t: number): number;
    function inCubic(t: number): number;
    function outCubic(t: number): number;
    function inOutCubic(t: number): number;
}
declare namespace light {
    class BrightnessTransition {
        constructor();
        apply(strip: LightStrip, t: number, start: number, end: number): void;
    }
    class EasingBrightnessTransition extends BrightnessTransition {
        private timeEasing;
        private spatialEasing;
        constructor(timeEasing: (t: number) => number, spatialEasing?: (t: number) => number);
        apply(strip: LightStrip, t: number, start: number, end: number): void;
    }
    class BrightnessTransitionPlayer {
        private transition;
        private startBrightness;
        private endBrightness;
        private duration;
        private startTime;
        private repeat;
        private yoyo;
        constructor(transition: BrightnessTransition, startBrightness: number, endBrightness: number, duration: number, repeat: number, yoyo: boolean);
        update(strip: LightStrip): boolean;
    }
}
declare namespace sensors {
    const enum LightSpectrumRange {
        Full = 10,
        Infrared = 20,
        Visible = 40
    }
    const enum LightSpectrumEvent {
        FullBright = 10,
        FullDark = 11,
        InfraredBright = 22,
        InfraredDark = 21,
        VisibleBright = 42,
        VisibleDark = 41
    }
    class LightSpectrum {
        full: number;
        infrared: number;
        visible: number;
        normalized: number;
        constructor();
    }
    class LightSpectrumSensor {
        id: number;
        private reading;
        private _spectrum;
        private normalizedLevelDetector;
        constructor(id: number);
        protected readSpectrum(): LightSpectrum;
        protected startReading(): void;
        spectrum(): LightSpectrum;
        onEvent(event: LightSpectrumEvent, handler: () => void): void;
    }
}
declare namespace input {
    function lightSpectrumSensor(): sensors.LightSpectrumSensor;
    /**
     * Uses a light spectrum sensor to capture the light spectrum range
     */
    function lightSpectrum(range: sensors.LightSpectrumRange): number;
    /**
     * Register code to run when the light condition changed
     * @param event
     * @param handler
     */
    function onLightSpectrumConditionChanged(event: sensors.LightSpectrumEvent, handler: () => void): void;
}
declare namespace sensors {
    enum TSL2591_AGAIN {
        AGAIN_LOW = 0,// Low gain mode
        AGAIN_MEDIUM = 16,// Medium gain mode
        AGAIN_HIGH = 32,// High gain mode
        AGAIN_MAX = 48
    }
    enum TSL2591_ATIME {
        ATIME_100_MS = 0,// 100 ms
        ATIME_200_MS = 1,// 200 ms
        ATIME_300_MS = 2,// 300 ms
        ATIME_400_MS = 3,// 400 ms
        ATIME_500_MS = 4,// 500 ms
        ATIME_600_MS = 5
    }
    export class TSL2591 extends sensors.LightSpectrumSensor {
        private TSL2591_I2C_ADDR;
        private isConnected;
        private atimeIntegrationValue;
        private gainSensorValue;
        constructor(id: number);
        private initSensor;
        setAtime(atime: TSL2591_ATIME): void;
        setGain(gain: TSL2591_AGAIN): void;
        private configureSensor;
        private enableSensor;
        disableSensor(): void;
        protected readSpectrum(): LightSpectrum;
    }
    export {};
}
declare namespace input {
}
/**
 * Reading data of module lora.
 */
declare namespace lora {
    const enum LoRaState {
        None = 0,
        /**
         * Started initialization
         */
        Initializing = 1,
        /**
         * LoRa module initialized and ready to go.
         */
        Ready = 2,
        /**
         * Firmware update is required on the LoRa module
         */
        LoRaIncorrectFirmwareVersion = 3,
        /**
         * Pins are not configured properly
         */
        LoRaInvalidConfiguration = 4
    }
    /**
     * Priority of log messages
     */
    let consolePriority: ConsolePriority;
    /**
     * State of the driver
     */
    let state: LoRaState;
    function setPins(spiDevice: SPI, csPin: DigitalInOutPin, bootPin: DigitalInOutPin, rstPin: DigitalInOutPin): void;
    /**
     * Indicates the LoRa module is correctly initialized
     */
    function isReady(): boolean;
    /**
    * Read Version of firmware
    **/
    function version(): number;
    /**
    * Parse a packet as a string
    **/
    function readString(): string;
    /**
    * Parse a packet as a buffer
    **/
    function readBuffer(): Buffer;
    /**
    * Parse Packet to send
    **/
    function parsePacket(size: number): number;
    /**
    * Packet RSSI
    **/
    function packetRssi(): number;
    /**
     * Packet SNR
     */
    function packetSnr(): number;
    /**
     * Write string to send
     **/
    function sendString(text: string): void;
    /**
     * Write buffer to send
     **/
    function sendBuffer(buffer: Buffer): void;
    /**
    * Available Packet
    **/
    function available(): number;
    /**
    * Read Packet
    **/
    function read(): number;
    /**
    * Peek Packet to send
    **/
    function peek(): number;
    /**
     * Put LoRa in idle mode
     */
    function idle(): void;
    /**
    * Sleep Mode
    **/
    function sleep(): void;
    /**
    * Set Tx Power
    **/
    function setTxPower(level: number, rfo?: boolean): void;
    /**
    * Set Frecuency of LoRa
    **/
    function setFrequency(frequency: number): void;
    /**
    * Get Spreading Factor of LoRa
    **/
    function spreadingFactor(): number;
    /**
     * Sets the spreading factoring
     * @param factor spreading factor
     */
    function setSpreadingFactor(factor: number): void;
    /**
    * Get Signal Bandwidth of LoRa
    **/
    function signalBandwidth(): number;
    /**
    * Set Signal Bandwidth of LoRa
    **/
    function setSignalBandwidth(value: number): void;
    function setCrc(on: boolean): void;
    function dumpRegisters(): void;
}
/**
 * User interaction on keypad buttons
 */
declare const enum MatrixKeypadButtonEvent {
    Click = 3,
    LongClick = 4,
    Up = 2,
    Down = 1
}
declare namespace matrixKeypad {
    class MatrixKeypad {
        private messageBusId;
        private rowPins;
        private columnPins;
        private timePressed;
        static fromCfg(): MatrixKeypad;
        constructor(messageBusId: number, rowPins: DigitalInOutPin[], columnPins: DigitalInOutPin[]);
        static setInput(p: DigitalInOutPin): void;
        private evId;
        private pulseRows;
        private pulseRow;
        /**
         * Gets the number of rows
         */
        get rows(): number;
        /**
         * Gets the number of columns
         */
        get columns(): number;
        /**
         * Register an event handler
         * @param x
         * @param y
         * @param ev
         * @param handler
         */
        onEvent(x: number, y: number, ev: MatrixKeypadButtonEvent, handler: () => void): void;
        /**
         * Indicates a button is pressed
         * @param x column index starting from 0
         * @param y row index starting from 0
         */
        isPressed(x: number, y: number): boolean;
    }
    const keypad: MatrixKeypad;
}
declare namespace music.sequencer {
    /**
     * Byte encoding format for songs
     * FIXME: should this all be word aligned?
     *
     * song(7 + length of all tracks bytes)
     *     0 version
     *     1 beats per minute
     *     3 beats per measure
     *     4 ticks per beat
     *     5 measures
     *     6 number of tracks
     *     ...tracks
     *
     * track(6 + instrument length + note length bytes)
     *     0 id
     *     1 flags
     *     2 instruments byte length
     *     4...instrument
     *     notes byte length
     *     ...note events
     *
     * instrument(28 bytes)
     *     0 waveform
     *     1 amp attack
     *     3 amp decay
     *     5 amp sustain
     *     7 amp release
     *     9 amp amp
     *     11 pitch attack
     *     13 pitch decay
     *     15 pitch sustain
     *     17 pitch release
     *     19 pitch amp
     *     21 amp lfo freq
     *     22 amp lfo amp
     *     24 pitch lfo freq
     *     25 pitch lfo amp
     *     27 octave
     *
     * drum(5 + 7 * steps bytes)
     *     0 steps
     *     1 start freq
     *     3 start amp
     *     5...steps
     *
     * drum step(7 bytes)
     *     0 waveform
     *     1 freq
     *     3 volume
     *     5 duration
     *
     * note event(5 + 1 * polyphony bytes)
     *     0 start tick
     *     2 end tick
     *     4 polyphony
     *     5...notes(1 byte each)
     *
     * note (1 byte)
     *     lower six bits = note - (instrumentOctave - 2) * 12
     *     upper two bits are the enharmonic spelling:
     *          0 = normal
     *          1 = flat
     *          2 = sharp
     */
    class Song extends Playable {
        buf: Buffer;
        tracks: Track[];
        constructor(buf: Buffer);
        get version(): number;
        set version(value: number);
        get beatsPerMinute(): number;
        set beatsPerMinute(value: number);
        get beatsPerMeasure(): number;
        set beatsPerMeasure(value: number);
        get ticksPerBeat(): number;
        set ticksPerBeat(value: number);
        get measures(): number;
        set measures(value: number);
        get numberOfTracks(): number;
        play(playbackMode: PlaybackMode): void;
    }
    class Envelope {
        buf?: Buffer;
        offset?: number;
        constructor(buf?: Buffer, offset?: number);
        get attack(): number;
        set attack(value: number);
        get decay(): number;
        set decay(value: number);
        get sustain(): number;
        set sustain(value: number);
        get release(): number;
        set release(value: number);
        get amplitude(): number;
        set amplitude(value: number);
        protected getValue(offset: number): number;
        protected setValue(offset: number, value: number): void;
    }
    class LFO {
        buf?: Buffer;
        offset?: number;
        constructor(buf?: Buffer, offset?: number);
        get frequency(): number;
        set frequency(value: number);
        get amplitude(): number;
        set amplitude(value: number);
    }
    class NoteEvent {
        buf: Buffer;
        offset: number;
        constructor(buf: Buffer, offset: number);
        get startTick(): number;
        set startTick(value: number);
        get endTick(): number;
        set endTick(value: number);
        get polyphony(): number;
        set polyphony(value: number);
        get byteLength(): number;
        getNote(offset: number, octave?: number): number;
        protected getValue(offset: number): number;
        protected setValue(offset: number, value: number): void;
    }
    class Track {
        buf: Buffer;
        offset: number;
        currentNoteEvent: NoteEvent;
        constructor(buf: Buffer, offset: number);
        get isMelodicTrack(): boolean;
        get id(): number;
        set id(value: number);
        get flags(): number;
        set flags(value: number);
        get instrumentByteLength(): number;
        set instrumentByteLength(value: number);
        get noteEventStart(): number;
        get noteEventByteLength(): number;
        set noteEventByteLength(value: number);
        get byteLength(): number;
        advanceNoteEvent(): void;
        protected getValue(offset: number): number;
        protected setValue(offset: number, value: number): void;
    }
    class MelodicTrack extends Track {
        instrument: Instrument;
        constructor(buf: Buffer, offset: number);
    }
    class DrumTrack extends Track {
        drums: DrumInstrument[];
        constructor(buf: Buffer, offset: number);
    }
    class Instrument {
        buf?: Buffer;
        offset?: number;
        ampEnvelope: Envelope;
        pitchEnvelope: Envelope;
        ampLFO: LFO;
        pitchLFO: LFO;
        constructor(buf?: Buffer, offset?: number);
        get waveform(): number;
        set waveform(value: number);
        get octave(): number;
        set octave(value: number);
    }
    class DrumInstrument {
        buf: Buffer;
        offset: number;
        steps: DrumStep[];
        constructor(buf: Buffer, offset: number);
        get byteLength(): number;
        get numSteps(): number;
        set numSteps(value: number);
        get startFrequency(): number;
        set startFrequency(value: number);
        get startVolume(): number;
        set startVolume(value: number);
        protected getValue(offset: number): number;
        protected setValue(offset: number, value: number): void;
    }
    class DrumStep {
        buf?: Buffer;
        offset?: number;
        constructor(buf?: Buffer, offset?: number);
        get waveform(): number;
        set waveform(value: number);
        get frequency(): number;
        set frequency(value: number);
        get volume(): number;
        set volume(value: number);
        get duration(): number;
        set duration(value: number);
        protected getValue(offset: number): number;
        protected setValue(offset: number, value: number): void;
    }
    /**
     * Renders a single note played on an instrument into a buffer of sound instructions.
     *
     * @param instrument The instrument being played
     * @param noteFrequency The frequency of the note being played. In other words, "the key being pressed on the piano"
     * @param gateLength The length of time that the "piano key" is held down in ms. The total duration
     *      of the sound instructions will be longer than this if the amplitude envelope of the
     *      instrument has a nonzero release time
     * @param volume The peak volume of the note to play (0-1024). Also called the "velocity"
     */
    function renderInstrument(instrument: Instrument, noteFrequency: number, gateLength: number, volume: number): Buffer;
    function renderDrumInstrument(sound: DrumInstrument, volume: number): Buffer;
    function _stopAllSongs(): void;
}
declare enum MusicOutput {
    AutoDetect = 0,
    Buzzer = 1,
    HeadPhones = 2
}
declare namespace music {
    function forceOutput(buf: MusicOutput): void;
    /**
     * Set the default output volume of the sound synthesizer.
     * @param volume the volume 0...255
     */
    function setVolume(volume: number): void;
    /**
     * Gets the current volume
     */
    function volume(): number;
    /**
     * Play a tone through the speaker for some amount of time.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param ms tone duration in milliseconds (ms), eg: BeatFraction.Half
     */
    function playTone(frequency: number, ms: number): void;
    /**
     * Play a melody from the melody editor.
     * @param melody - string of up to eight notes [C D E F G A B C5] or rests [-] separated by spaces,
     * which will be played one at a time, ex: "E D G F B A C5 B "
     * @param tempo - number in beats per minute (bpm), dictating how long each note will play for
     */
    function playMelody(melody: string, tempo: number): void;
    /**
     * Create a melody with the melody editor.
     * @param melody
     */
    function melodyEditor(melody: string): string;
    class Melody {
        _text: string;
        private _player;
        private static playingMelodies;
        static stopAll(): void;
        constructor(text: string);
        get text(): string;
        /**
         * Stop playing a sound
         */
        stop(): void;
        private registerMelody;
        private unregisterMelody;
        private playCore;
        /**
         * Start playing a sound in a loop and don't wait for it to finish.
         * @param sound the melody to play
         */
        loop(volume?: number): void;
        /**
         * Start playing a sound and don't wait for it to finish.
         * @param sound the melody to play
         */
        play(volume?: number): void;
        /**
         * Play a sound and wait until the sound is done.
         * @param sound the melody to play
         */
        playUntilDone(volume?: number): void;
        toString(): string;
    }
    function addNote(sndInstr: Buffer, sndInstrPtr: number, ms: number, beg: number, end: number, soundWave: number, hz: number, volume: number, endHz: number): number;
    class MelodyPlayer {
        melody: Melody;
        onPlayFinished: () => void;
        constructor(m: Melody);
        stop(): void;
        protected queuePlayInstructions(timeDelta: number, buf: Buffer): void;
        play(volume: number): void;
    }
    function createSong(song: Buffer): Playable;
    function playInstructions(when: number, instructions: Buffer): void;
    function lookupFrequency(note: number): number;
    const baDing: Melody;
    const wawawawaa: Melody;
    const jumpUp: Melody;
    const jumpDown: Melody;
    const powerUp: Melody;
    const powerDown: Melody;
    const magicWand: Melody;
    const siren: Melody;
    const pewPew: Melody;
    const knock: Melody;
    const footstep: Melody;
    const thump: Melody;
    const smallCrash: Melody;
    const bigCrash: Melody;
    const zapped: Melody;
    const buzzer: Melody;
    const sonar: Melody;
    const spooky: Melody;
    const beamUp: Melody;
}
declare namespace music.sequencer {
    class Sequencer {
        song: Song;
        currentTick: number;
        isPlaying: boolean;
        isLooping: boolean;
        isRunning: boolean;
        constructor(song: Song);
        start(loop: boolean): void;
        stop(): void;
        tickToMs(ticks: number): number;
        protected scheduleCurrentTick(): void;
        protected scheduleMelodicTrack(track: MelodicTrack): void;
        protected scheduleDrumTrack(track: DrumTrack): void;
    }
    function _stopAllSimSequencers(): void;
    class _SimulatorSequencer {
        protected id: number;
        constructor();
        play(song: Buffer, loop: boolean): void;
        stop(): void;
        setVolume(volume: number): void;
        setTrackVolume(trackIndex: number, volume: number): void;
        setDrumTrackVolume(trackIndex: number, drumIndex: number, volume: number): void;
        state(): string;
        currentTick(): number;
        dispose(): void;
        onTick(handler: (tick: number) => void): void;
        onStateChange(handler: (state: string) => void): void;
        onStop(handler: () => void): void;
        onLooped(handler: () => void): void;
    }
}
declare enum WaveShape {
    Sine = 0,
    Sawtooth = 1,
    Triangle = 2,
    Square = 3,
    Noise = 4
}
declare enum InterpolationCurve {
    Linear = 0,
    Curve = 1,
    Logarithmic = 2
}
declare enum SoundExpressionEffect {
    None = 0,
    Vibrato = 1,
    Tremolo = 2,
    Warble = 3
}
declare enum SoundExpressionPlayMode {
    UntilDone = 0,
    InBackground = 1
}
declare namespace music {
    class SoundEffect extends Playable {
        waveShape: WaveShape;
        startFrequency: number;
        endFrequency: number;
        startVolume: number;
        endVolume: number;
        duration: number;
        effect: SoundExpressionEffect;
        interpolation: InterpolationCurve;
        constructor();
        toBuffer(volume?: number): Buffer;
        play(playbackMode: PlaybackMode): void;
    }
    /**
     * Play a SoundEffect.
     * @param sound the SoundEffect to play
     * @param mode the play mode, play until done or in the background
     */
    function playSoundEffect(sound: SoundEffect, mode: SoundExpressionPlayMode): void;
    /**
     * Create a sound expression from a set of sound effect parameters.
     * @param waveShape waveform of the sound effect
     * @param startFrequency starting frequency for the sound effect waveform
     * @param endFrequency ending frequency for the sound effect waveform
     * @param startVolume starting volume of the sound, or starting amplitude
     * @param endVolume ending volume of the sound, or ending amplitude
     * @param duration the amount of time in milliseconds (ms) that sound will play for
     * @param effect the effect to apply to the waveform or volume
     * @param interpolation interpolation method for frequency scaling
     */
    function createSoundEffect(waveShape: WaveShape, startFrequency: number, endFrequency: number, startVolume: number, endVolume: number, duration: number, effect: SoundExpressionEffect, interpolation: InterpolationCurve): SoundEffect;
    function soundToInstructionBuffer(waveShape: WaveShape, startFrequency: number, endFrequency: number, startVolume: number, endVolume: number, duration: number, effect: SoundExpressionEffect, interpolation: InterpolationCurve, fxSteps: number, fxRange: number, globalVolume: number): Buffer;
    /**
     * Generate a random similar sound effect to the given one.
     *
     * @param sound the sound effect
     */
    function randomizeSound(sound: SoundEffect): SoundEffect;
}
/**
 * Mouse emulation
 */
declare namespace mouse {
    /**
     * Generates a mouse click
     * @param button the button to click
     */
    function click(button: MouseButton): void;
}
declare namespace mqtt {
    /**
     * Connect flags
     * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc385349229
     */
    const enum ConnectFlags {
        UserName = 128,
        Password = 64,
        WillRetain = 32,
        WillQoS2 = 16,
        WillQoS1 = 8,
        Will = 4,
        CleanSession = 2
    }
    /**
     * Connect Return code
     * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc385349256
     */
    const enum ConnectReturnCode {
        Unknown = -1,
        Accepted = 0,
        UnacceptableProtocolVersion = 1,
        IdentifierRejected = 2,
        ServerUnavailable = 3,
        BadUserNameOrPassword = 4,
        NotAuthorized = 5
    }
    /**
     * A message received in a Publish packet.
     */
    interface IMessage {
        pid?: number;
        topic: string;
        content: Buffer;
        qos: number;
        retain: number;
    }
    /**
     * MQTT Control Packet type
     * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc353481061
     */
    const enum ControlPacketType {
        Connect = 1,
        ConnAck = 2,
        Publish = 3,
        PubAck = 4,
        Subscribe = 8,
        SubAck = 9,
        Unsubscribe = 10,
        UnsubAck = 11,
        PingReq = 12,
        PingResp = 13,
        Disconnect = 14
    }
    /**
     * Optimization, the TypeScript compiler replaces the constant enums.
     */
    const enum Constants {
        PingInterval = 40,
        WatchDogInterval = 50,
        DefaultQos = 0,
        Uninitialized = -123,
        FixedPackedId = 1,
        KeepAlive = 60
    }
    /**
     * The options used to connect to the MQTT broker.
     */
    interface IConnectionOptions {
        host: string;
        port?: number;
        username?: string;
        password?: string;
        clientId: string;
        will?: IConnectionOptionsWill;
    }
    interface IConnectionOptionsWill {
        topic: string;
        message: string;
        qos?: number;
        retain?: boolean;
    }
    /**
     * The specifics of the MQTT protocol.
     */
    namespace Protocol {
        /**
         * CONNECT - Client requests a connection to a Server
         * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718028
         */
        function createConnect(options: IConnectionOptions): Buffer;
        /** PINGREQ - PING request
         * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc384800454
         */
        function createPingReq(): Buffer;
        /**
         * PUBLISH - Publish message header - doesn't include "payload"
         * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc384800410
         */
        function createPublishHeader(topic: string, payloadSize: number, qos: number, retained: boolean): Buffer;
        function parsePublish(cmd: number, payload: Buffer): IMessage;
        /**
         * PUBACK - Publish acknowledgement
         * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc384800416
         */
        function createPubAck(pid: number): Buffer;
        /**
         * SUBSCRIBE - Subscribe to topics
         * http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc384800436
         */
        function createSubscribe(topic: string, qos: number): Buffer;
    }
    type EventHandler = (arg?: string | IMessage) => void;
    class EventEmitter {
        private handlers;
        constructor();
        on(event: string, listener: EventHandler): void;
        protected emit(event: string, arg?: string | IMessage): boolean;
    }
    enum Status {
        Disconnected = 0,
        Connecting = 1,
        Connected = 2,
        Sending = 3
    }
    class Client extends EventEmitter {
        logPriority: ConsolePriority;
        tracePriority: ConsolePriority;
        private log;
        private trace;
        opt: IConnectionOptions;
        private net;
        private sct?;
        private wdId;
        private piId;
        private buf;
        private subs;
        status: Status;
        get connected(): boolean;
        private mqttHandlers;
        constructor(opt: IConnectionOptions);
        private static describe;
        disconnect(): void;
        connect(): void;
        private canSend;
        private doneSending;
        publish(topic: string, message?: string | Buffer, qos?: number, retained?: boolean): void;
        startPublish(topic: string, messageLen: number, qos?: number, retained?: boolean): boolean;
        continuePublish(data: Buffer): void;
        finishPublish(): void;
        private subscribeCore;
        subscribe(topic: string, handler?: (msg: IMessage) => void, qos?: number): void;
        awaitUpdate(topic: string, qos?: number): () => IMessage;
        private send;
        private handleMessage;
        private send1;
        private ping;
    }
}
declare namespace mp {
    /**
     * A type of state to get for a player
     */
    function _multiplayerState(kind: number): number;
}
declare namespace mp {
    function _indicatorForPlayer(player: number, direction: number): Image;
}
declare namespace mp {
}
declare namespace mp {
    export enum PlayerNumber {
        One = 1,
        Two = 2,
        Three = 3,
        Four = 4
    }
    export enum PlayerProperty {
        Index = 1,
        Number = 2
    }
    export enum MultiplayerButton {
        A = 0,
        B = 1,
        Up = 2,
        Right = 3,
        Down = 4,
        Left = 5
    }
    class ButtonHandler {
        button: MultiplayerButton;
        event: ControllerButtonEvent;
        handler: (player: Player) => void;
        constructor(button: MultiplayerButton, event: ControllerButtonEvent, handler: (player: Player) => void);
    }
    class ControllerEventHandler {
        event: ControllerEvent;
        handler: (player: Player) => void;
        constructor(event: ControllerEvent, handler: (player: Player) => void);
    }
    class ScoreHandler {
        target: number;
        handler: (player: Player) => void;
        constructor(target: number, handler: (player: Player) => void);
    }
    /**
     * A player in the game
     */
    export class Player {
        _sprite: Sprite;
        _state: number[];
        _index: number;
        _data: any;
        _mwb: boolean;
        _vx: number;
        _vy: number;
        constructor(index: number);
        get index(): number;
        get number(): number;
        get data(): any;
        set data(value: any);
        getProperty(prop: PlayerProperty): number;
        getSprite(): Sprite;
        setSprite(sprite: Sprite): void;
        moveWithButtons(vx?: number, vy?: number): void;
        getState(key: number): number;
        setState(key: number, val: number): void;
        _setState(key: number, val: number): void;
        _getState(key: number): number;
        _ensureState(key: number): void;
        _getInfo(): info.PlayerInfo;
        _getController(): controller.Controller;
    }
    class MPState {
        players: Player[];
        buttonHandlers: ButtonHandler[];
        controllerEventHandlers: ControllerEventHandler[];
        scoreHandlers: ScoreHandler[];
        lifeZeroHandler: (player: Player) => void;
        indicatorsVisible: boolean;
        indicatorRenderable: scene.Renderable;
        constructor();
        onButtonEvent(button: MultiplayerButton, event: ControllerButtonEvent, handler: (player: Player) => void): void;
        onControllerEvent(event: ControllerEvent, handler: (player: Player) => void): void;
        onReachedScore(score: number, handler: (player: Player) => void): void;
        onLifeZero(handler: (player: Player) => void): void;
        setPlayerIndicatorsVisible(visible: boolean): void;
        getButtonHandler(button: MultiplayerButton, event: ControllerButtonEvent): ButtonHandler;
        getControllerEventHandler(event: ControllerEvent): ControllerEventHandler;
        getScoreHandler(score: number): ScoreHandler;
        drawIndicators(target: Image, camera: scene.Camera): void;
    }
    export function _mpstate(): MPState;
    /**
     * Gets the sprite of the player
     * @param player The player to get the sprite of
     * @returns The sprite of the player, or undefined if the player has no assigned sprite
     */
    export function getPlayerSprite(player: Player): Sprite;
    /**
     * Sets the sprite of the player
     * @param player The player to set the sprite for
     * @param sprite The sprite to set
     */
    export function setPlayerSprite(player: Player, sprite: Sprite): void;
    /**
     * Selects one of the players by number
     * @param number The player number
     * @returns The player
     */
    export function playerSelector(number: PlayerNumber): Player;
    /**
     * Returns an array of all players
     */
    export function allPlayers(): Player[];
    /**
     * Gets the player the sprite is assigned to
     * @param sprite the sprite
     * @returns Player, or undefined if not found
     */
    export function getPlayerBySprite(sprite: Sprite): Player;
    /**
     * Control a player's sprite with directional buttons
     * @param player The player to control
     * @param vx The horizontal velocity of the sprite (optional)
     * @param vy The vertical velocity of the sprite (optional)
     */
    export function moveWithButtons(player: Player, vx?: number, vy?: number): void;
    /**
     * Runs code when a button on any controller is pressed, released, or held
     * @param button The button to listen for
     * @param event The event to listen for (pressed, released, or held)
     * @param handler The code to run when the button is pressed, released, or held
     */
    export function onButtonEvent(button: MultiplayerButton, event: ControllerButtonEvent, handler: (player: Player) => void): void;
    /**
     * Queries the state of a button on a controller
     * @param player The player to query
     * @param button The button to query
     * @returns true if the button is pressed
     */
    export function isButtonPressed(player: Player, button: MultiplayerButton): boolean;
    /**
     * Runs code when a controller is connected or disconnected
     * @param event The event to listen for (controller connected or disconnected)
     * @param handler Code to run when the event is raised
     */
    export function onControllerEvent(event: ControllerEvent, handler: (player: Player) => void): void;
    /**
     * Queries the connected state of the player
     * @param player The player to query
     * @returns true if the player is connected
     */
    export function isConnected(player: Player): boolean;
    /**
     * Gets the value of the specified player state
     * @param player The player to get the state for
     * @param state The state to get
     * @returns The value of the state
     */
    export function getPlayerState(player: Player, state: number): number;
    /**
     * Sets the value of the specified player state
     * @param player The player to set the state for
     * @param state The state to set
     * @param value The value to set the state to
     */
    export function setPlayerState(player: Player, state: number, value: number): void;
    /**
     * Changes the value of the specified player state
     * @param player The player to change the state for
     * @param state The state to change
     * @param delta The amount to change the state by
     */
    export function changePlayerStateBy(player: Player, state: number, delta: number): void;
    /**
     * Gets a property of the player
     * @param player The player to get the property of
     * @param prop The property to get
     * @returns The value of the property
     */
    export function getPlayerProperty(player: Player, prop: PlayerProperty): number;
    /**
     * Runs code once each time a player's score reaches a given value.
     * @param score The score to check for, eg: 100
     * @param handler The code to run when the score is reached
     */
    export function onScore(score: number, handler: (player: Player) => void): void;
    /**
     * Runs code when a player's number of lives reaches zero
     * @param handler The code to run when the lives reach zero
     */
    export function onLifeZero(handler: (player: Player) => void): void;
    export function gameOverPlayerWin(player: Player): void;
    /**
     * Gets the player by number
     * @param number The one-based number of the player
     * @returns Player, or undefined if not found
     */
    export function getPlayerByNumber(number: number): Player;
    /**
     * Gets the player by index
     * @param index The zero-based index of the player
     * @returns Player, or undefined if not found
     */
    export function getPlayerByIndex(index: number): Player;
    /**
     * Turns player indicators on or off
     * @param visible indicator visibility
     */
    export function setPlayerIndicatorsVisible(visible: boolean): void;
    export {};
}
declare namespace MultiplayerState {
    function create(): number;
    const score: number;
    const life: number;
}
declare namespace net {
}
/**
 * Update the current scene palette
 */
declare namespace palette {
    /**
     * Returns a clone of the default palette
     */
    function defaultPalette(): color.ColorBuffer;
    /**
     * Dynamically set all or part of the game's current palette
     *
     * @param palette The colors to set
     * @param pOffset The offset to start copying from the palette
     */
    function setColors(palette: color.ColorBuffer, pOffset?: number): void;
    /**
     * Get the palette that is currently being used
     */
    function getCurrentColors(): color.ColorBuffer;
    /**
     * Reset to default palette
     */
    function reset(): void;
}
/**
 * Well known colors for a NeoPixel strip
 */
declare const enum PixelColors {
    Red = 16711680,
    Orange = 16744192,
    Yellow = 16776960,
    Green = 65280,
    Blue = 255,
    Indigo = 4915330,
    Violet = 9055202,
    Purple = 10499045,
    Pink = 16711807,
    White = 16777215,
    Black = 0
}
/**
 * Functions to operate the on-board color LED (if any).
 */
declare namespace pixel {
    /**
     * Gets the underlying light strip
     */
    const strip: light.LightStrip;
    /**
     * Set the on-board pixel to a given color.
     * @param color RGB color of the LED
     */
    function setColor(color: number): void;
    /**
     * Get the RGB value of a known color
    */
    function colors(color: PixelColors): number;
    /**
     * Set the brightness of the neopixel. This flag only applies to future operations.
     * @param brightness a measure of LED brightness in 0-255. eg: 20
     */
    function setBrightness(brightness: number): void;
    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    function rgb(red: number, green: number, blue: number): number;
    /**
     * Fade the color by the brightness
     * @param color color to fade
     * @param brightness the amount of brightness to apply to the color, eg: 128
     */
    function fade(color: number, brightness: number): number;
    /**
     * Convert an HSV (hue, saturation, value) color to RGB
     * @param hue value of the hue channel between 0 and 255. eg: 255
     * @param sat value of the saturation channel between 0 and 255. eg: 255
     * @param val value of the value channel between 0 and 255. eg: 255
     */
    function hsv(hue: number, sat: number, val: number): number;
}
/**
 * Power and sleep management
 */
declare namespace power {
    /**
     * Set the no-activity duration after which the device should go to deep sleep.
     * @param seconds duration in seconds until the device should be put in lower power mode
     */
    function setDeepSleepTimeout(seconds: number): void;
    /**
     * Poke the activity watcher to keep the device awake.
     */
    function poke(): void;
    /**
     * Check if the device has had any "pokes" and needs to go into deep sleep mode.
     */
    function checkDeepSleep(): void;
    /**
     * Put the device into a deep sleep state.
     */
    function deepSleep(): void;
}
declare const enum PromixityEvent {
    Close = 1,
    Far = 2
}
declare namespace sensors {
    class PromixitySensor {
        private _levelDetector;
        constructor();
        distance(): number;
        private levelDetector;
        /**
         * Registers an event when a level is detected
         * @param event
         * @param handler
         */
        onDistanceEvent(event: PromixityEvent, handler: () => void): void;
    }
}
declare namespace input {
    /**
     * Gets the distance measured by the proximity sensor
     */
    function distance(): number;
    /**
     * Registers a distance event
     * @param event
     * @param handler
     */
    function onDistanceEvent(event: PromixityEvent, handler: () => void): void;
}
declare namespace vl53l0x {
    class VL53L0X extends sensors.PromixitySensor {
        private _distance;
        constructor();
        init(): void;
        distance(): number;
    }
}
/**
 * Communication between devices
 */
declare namespace network {
}
declare enum RadioPacketProperty {
    SignalStrength = 2,
    Time = 0,
    SerialNumber = 1
}
/**
 * Communicate data using radio packets
 */
declare namespace radio {
    const PACKET_TYPE_NUMBER = 0;
    const PACKET_TYPE_VALUE = 1;
    const PACKET_TYPE_STRING = 2;
    const PACKET_TYPE_BUFFER = 3;
    const PACKET_TYPE_DOUBLE = 4;
    const PACKET_TYPE_DOUBLE_VALUE = 5;
    let lastPacket: RadioPacket;
    /**
     * Registers code to run when the radio receives a number.
     */
    function onReceivedNumber(cb: (receivedNumber: number) => void): void;
    /**
     * Registers code to run when the radio receives a key value pair.
     */
    function onReceivedValue(cb: (name: string, value: number) => void): void;
    /**
     * Registers code to run when the radio receives a string.
     */
    function onReceivedString(cb: (receivedString: string) => void): void;
    /**
     * Registers code to run when the radio receives a buffer.
     */
    function onReceivedBuffer(cb: (receivedBuffer: Buffer) => void): void;
    /**
     * Returns properties of the last radio packet received.
     * @param type the type of property to retrieve from the last packet
     */
    function receivedPacket(type: number): number;
    /**
     * Gets a packet property.
     * @param type the packet property type, eg: PacketProperty.time
     */
    function _packetProperty(type: RadioPacketProperty): number;
    class RadioPacket {
        readonly data?: Buffer;
        static getPacket(data: Buffer): RadioPacket;
        static mkPacket(packetType: number): RadioPacket;
        private constructor();
        get signal(): number;
        get packetType(): number;
        get time(): number;
        set time(val: number);
        get serial(): number;
        set serial(val: number);
        get stringPayload(): string;
        set stringPayload(val: string);
        get numberPayload(): number;
        set numberPayload(val: number);
        get bufferPayload(): Buffer;
        set bufferPayload(b: Buffer);
        hasString(): boolean;
        hasNumber(): boolean;
    }
    /**
     * Broadcasts a number over radio to any connected micro:bit in the group.
     */
    function sendNumber(value: number): void;
    /**
    * Broadcasts a name / value pair along with the device serial number
    * and running time to any connected micro:bit in the group. The name can
    * include no more than 8 characters.
    * @param name the field name (max 8 characters), eg: "name"
    * @param value the numeric value
    */
    function sendValue(name: string, value: number): void;
    /**
     * Broadcasts a string along with the device serial number
     * and running time to any connected micro:bit in the group.
     */
    function sendString(value: string): void;
    /**
     * Broadcasts a buffer (up to 19 bytes long) along with the device serial number
     * and running time to any connected micro:bit in the group.
     */
    function sendBuffer(msg: Buffer): void;
    /**
    * Set the radio to transmit the serial number in each message.
    * @param transmit value indicating if the serial number is transmitted, eg: true
    */
    function setTransmitSerialNumber(transmit: boolean): void;
}
declare namespace radio {
    /**
     * Gets the message code
     */
    function __message(msg: number): number;
    /**
     * Broadcasts a message over radio
     * @param msg
     */
    function sendMessage(msg: number): void;
    /**
     * Registers code to run for a particular message
     * @param msg
     * @param handler
     */
    function onReceivedMessage(msg: number, handler: () => void): void;
}
/**
 * Rotary encoders
 */
declare namespace encoders {
    /**
     * Gets the default rotary encoder if any
     */
    const defaultEncoder: RotaryEncoder;
}
/**
 * Image manipulation blocks
 */
declare namespace images {
    function _spriteImage(img: Image): Image;
    function _screenImage(img: Image): Image;
    function _tileMapImage(img: Image): Image;
    function _tileImage(img: Image): Image;
    function _tile(tile: Image): Image;
    function _dialogImage(img: Image): Image;
    /**
     * An image
     * @param image the image
     */
    function _image(image: Image): Image;
    function __colorIndexPicker(index: number): number;
    /**
     * A position picker
     */
    function __positionPicker(index: number): number;
}
declare namespace control.__screen {
    function update(): void;
    function setupUpdate(update: () => void): void;
}
type color = number;
declare namespace image {
    function repeatY(count: number, image: Image): Image;
    function concatY(images: Image[]): Image;
}
interface Image {
    /**
     * Draw an icon (monochromatic image) using given color
     */
    drawIcon(icon: Buffer, x: number, y: number, c: color): void;
    /**
     * Fill a rectangle
     */
    fillRect(x: number, y: number, w: number, h: number, c: color): void;
    /**
     * Draw a line
     */
    drawLine(x0: number, y0: number, x1: number, y1: number, c: color): void;
    /**
     * Draw an empty rectangle
     */
    drawRect(x: number, y: number, w: number, h: number, c: color): void;
    /**
     * Draw a circle
     */
    drawCircle(cx: number, cy: number, r: number, c: color): void;
    /**
     * Fills a circle
     */
    fillCircle(cx: number, cy: number, r: number, c: color): void;
    /**
     * Fills a triangle
     */
    fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, col: number): void;
    /**
     * Fills a 4-side-polygon
     */
    fillPolygon4(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, col: number): void;
    /**
     * Returns an image rotated by -90, 0, 90, 180, 270 deg clockwise
     */
    rotated(deg: number): Image;
    /**
     * Scale and copy a row of pixels from a texture.
     */
    blitRow(dstX: number, dstY: number, from: Image, fromX: number, fromH: number): void;
    /**
     * Copy an image from a source rectangle to a destination rectangle, stretching or
     * compressing to fit the dimensions of the destination rectangle, if necessary.
     */
    blit(xDst: number, yDst: number, wDst: number, hDst: number, src: Image, xSrc: number, ySrc: number, wSrc: number, hSrc: number, transparent: boolean, check: boolean): boolean;
}
interface ScreenImage extends Image {
    /**
     * Sets the screen backlight brightness (10-100)
     */
    setBrightness(deg: number): Image;
    /**
     * Gets current screen backlight brightness (0-100)
     */
    brightness(): number;
}
declare namespace _helpers_workaround {
    let brightness: number;
}
declare namespace helpers {
    function imageBlit(img: Image, xDst: number, yDst: number, wDst: number, hDst: number, src: Image, xSrc: number, ySrc: number, wSrc: number, hSrc: number, transparent: boolean, check: boolean): boolean;
    function imageBlitRow(img: Image, dstX: number, dstY: number, from: Image, fromX: number, fromH: number): void;
    function imageDrawIcon(img: Image, icon: Buffer, x: number, y: number, c: color): void;
    function imageFillRect(img: Image, x: number, y: number, w: number, h: number, c: color): void;
    function imageMapRect(img: Image, x: number, y: number, w: number, h: number, m: Buffer): void;
    function imageDrawLine(img: Image, x: number, y: number, w: number, h: number, c: color): void;
    function imageDrawRect(img: Image, x: number, y: number, w: number, h: number, c: color): void;
    function imageDrawCircle(img: Image, cx: number, cy: number, r: number, col: number): void;
    function imageFillCircle(img: Image, cx: number, cy: number, r: number, col: number): void;
    function imageFillTriangle(img: Image, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, col: number): void;
    function imageFillPolygon4(img: Image, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, col: number): void;
    /**
     * Returns an image rotated by 90, 180, 270 deg clockwise
     */
    function imageRotated(img: Image, deg: number): Image;
    function setScreenBrightness(img: Image, b: number): void;
    function screenBrightness(img: Image): number;
}
declare namespace image {
    /**
    * Get the screen image
    */
    function screenImage(): Image;
}
declare namespace image {
    interface Font {
        charWidth: number;
        charHeight: number;
        data: Buffer;
        multiplier?: number;
    }
    const font8: Font;
    const font12: Font;
    function getFontForText(text: string): Font;
    function doubledFont(f: Font): Font;
    function scaledFont(f: Font, size: number): Font;
    const font5: Font;
}
declare namespace texteffects {
    interface TextEffectState {
        xOffset: number;
        yOffset: number;
    }
}
interface Image {
    print(text: string, x: number, y: number, color?: number, font?: image.Font, offsets?: texteffects.TextEffectState[]): void;
    printCenter(text: string, y: number, color?: number, font?: image.Font): void;
}
declare namespace helpers {
    function imagePrintCenter(img: Image, text: string, y: number, color?: number, font?: image.Font): void;
    function imagePrint(img: Image, text: string, x: number, y: number, color?: number, font?: image.Font, offsets?: texteffects.TextEffectState[]): void;
}
declare namespace serial {
    /**
     * Creates a serial comm device
     * @param tx
     * @param rx
     * @param id
     */
    function createSerial(tx: DigitalInOutPin, rx: DigitalInOutPin, id?: number): Serial;
    function device(): Serial;
    /**
    * Set the serial input and output to use pins instead of the USB connection.
    * @param tx the new transmission pin
    * @param rx the new reception pin
    * @param rate the new baud rate
    */
    function redirect(tx: DigitalInOutPin, rx: DigitalInOutPin, rate: BaudRate): void;
}
/**
 * Reading and writing data over a serial connection.
 */
declare namespace serial {
    let NEW_LINE: string;
    let NEW_LINE_DELIMITER: Delimiters;
    class Serial {
        serialDevice: SerialDevice;
        decoder: UTF8Decoder;
        constructor(serialDevice: SerialDevice);
        readString(): string;
        readLine(timeOut?: number): string;
        readUntil(delimiter: Delimiters, timeOut?: number): string;
        writeString(text: string): void;
        writeLine(text: string): void;
    }
    /**
    * Read the buffered received data as a string
    */
    function readString(): string;
    /**
     * Read a line of text from the serial port.
     */
    function readLine(): string;
    /**
     * Read a line of text from the serial port and return the buffer when the delimiter is met.
     * @param delimiter text delimiter that separates each text chunk
     */
    function readUntil(delimiter: Delimiters, timeOut?: number): string;
    /**
     * Write some text to the serial port.
     */
    function writeString(text: string): void;
    /**
     * Write a line of text to the serial port.
     * @param value to send over serial
     */
    function writeLine(text: string): void;
    /**
     * Write a number to the serial port.
     */
    function writeNumber(value: number): void;
    /**
     * Write a name:value pair as a line of text to the serial port.
     * @param name name of the value stream, eg: "x"
     * @param value to write
     */
    function writeValue(name: string, value: number): void;
    /**
    * Sets the size of the RX buffer in bytes
    */
    function setRxBufferSize(size: number): void;
    /**
    * Sets the size of the TX buffer in bytes
    */
    function setTxBufferSize(size: number): void;
    /**
    * Reads a single byte from the serial receive buffer. Negative if error, 0 if no data.
    */
    function read(): number;
    /**
    * Read the buffered received data as a buffer
    */
    function readBuffer(): Buffer;
    /**
    * Send a buffer across the serial connection.
    */
    function writeBuffer(buffer: Buffer): void;
    /**
    Set the baud rate of the serial port
    */
    function setBaudRate(rate: BaudRate): void;
    /**
      Send console messages through the TX, RX pins
      **/
    function attachToConsole(): void;
    /**
    * Registers code when serial events happen
    **/
    function onEvent(event: SerialEvent, handler: () => void): void;
    /**
    * Registers code when a delimiter is received
    **/
    function onDelimiterReceived(delimiter: Delimiters, handler: () => void): void;
    /**
     * Return the corresponding delimiter string
     */
    function delimiters(del: Delimiters): string;
}
/**
 * Control micro servos
 */
declare namespace servos {
}
/**
 * Control micro servos
 */
declare namespace servos {
    class Servo {
        private _minAngle;
        private _maxAngle;
        private _stopOnNeutral;
        private _angle;
        constructor();
        private clampDegrees;
        /**
         * Set the servo angle
         */
        setAngle(degrees: number): void;
        get angle(): number;
        protected internalSetContinuous(continuous: boolean): void;
        protected internalSetAngle(angle: number): number;
        /**
         * Set the throttle on a continuous servo
         * @param speed the throttle of the motor from -100% to 100%
         */
        run(speed: number): void;
        /**
         * Set the pulse width to the servo in microseconds
         * @param micros the width of the pulse in microseconds
         */
        setPulse(micros: number): void;
        protected internalSetPulse(micros: number): void;
        /**
         * Stop sending commands to the servo so that its rotation will stop at the current position.
         */
        stop(): void;
        /**
         * Gets the minimum angle for the servo
         */
        get minAngle(): number;
        /**
         * Gets the maximum angle for the servo
         */
        get maxAngle(): number;
        /**
         * Set the possible rotation range angles for the servo between 0 and 180
         * @param minAngle the minimum angle from 0 to 90
         * @param maxAngle the maximum angle from 90 to 180
         */
        setRange(minAngle: number, maxAngle: number): void;
        /**
         * Set a servo stop mode so it will stop when the rotation angle is in the neutral position, 90 degrees.
         * @param on true to enable this mode
         */
        setStopOnNeutral(enabled: boolean): void;
        protected internalStop(): void;
    }
    class PinServo extends Servo {
        private _pin;
        constructor(pin: PwmOnlyPin);
        protected internalSetAngle(angle: number): number;
        protected internalSetContinuous(continuous: boolean): void;
        protected internalSetPulse(micros: number): void;
        protected internalStop(): void;
    }
}
declare namespace settings {
    function runNumber(): number;
    /**
     * Delete all non-system settings.
     */
    function clear(): void;
    /**
     * Set named setting to a given buffer.
     */
    function writeBuffer(key: string, value: Buffer): void;
    /**
     * Set named settings to a given string.
     */
    function writeString(key: string, value: string): void;
    /**
     * Set named settings to a given JSON object.
     */
    function writeJSON(key: string, value: any): void;
    /**
     * Set named settings to a given number.
     */
    function writeNumber(key: string, value: number): void;
    /**
     * Set named settings to a given array of numbers.
     */
    function writeNumberArray(key: string, value: number[]): void;
    /**
     * Read named setting as a buffer. Returns undefined when setting not found.
     */
    function readBuffer(key: string): Buffer;
    /**
     * Read named setting as a string.
     */
    function readString(key: string): string;
    /**
     * Read named setting as a JSON object.
     */
    function readJSON(key: string): any;
    /**
     * Read named setting as a number.
     */
    function readNumber(key: string): number;
    /**
     * Read named setting as a number.
     */
    function readNumberArray(key: string): number[];
    /**
     * Return a list of settings starting with a given prefix.
     */
    function list(prefix?: string): string[];
    /**
     * Remove named setting.
     */
    function remove(key: string): void;
    /**
     * Check if a named setting exists.
     */
    function exists(key: string): boolean;
    class SecretStore {
        private key;
        constructor(key: string);
        setSecret(name: string, value: any): void;
        updateSecret(name: string, value: any): void;
        readSecret(name: string, ensure?: boolean): any;
        clearSecrets(): void;
        readSecrets(): any;
    }
    /**
     * Secrets shared by any program on the device
     */
    const deviceSecrets: SecretStore;
    /**
     * Program secrets
     */
    const programSecrets: SecretStore;
}
declare namespace helpers {
    function mapImage(toShade: Image, shadeLevels: Image, x: number, y: number, m: Buffer): void;
    function mergeImage(dst: Image, src: Image, x: number, y: number): void;
}
declare namespace scaling {
    /**
    * Scale a sprite to a percentage of its original size.
    * @param sprite to scale to a percentage of its original size
    * @param value that is the percentage to scale the sprite, eg: 150
    * @param direction from the sprite anchor point, eg: ScaleDirection.Uniformly
    */
    function scaleToPercent(sprite: Sprite, value: number, direction?: ScaleDirection, anchor?: ScaleAnchor): void;
    /**
    * Scale a sprite by a percentage of its original size.
    * @param sprite to scale to a percentage of its original size
    * @param value that is the percentage to scale the sprite by, eg: 50
    * @param direction from the sprite anchor point, eg: ScaleDirection.Uniformly
    */
    function scaleByPercent(sprite: Sprite, value: number, direction?: ScaleDirection, anchor?: ScaleAnchor): void;
    /**
    * Scale a sprite to a number of pixels.
    * @param sprite to scale to new pixel size
    * @param value that is the number of pixels to scale the sprite to, eg: 32
    * @param direction from the sprite anchor point, eg: ScaleDirection.Horizontally
    */
    function scaleToPixels(sprite: Sprite, value: number, direction?: ScaleDirection, anchor?: ScaleAnchor, proportional?: boolean): void;
    /**
    * Scale a sprite by a number of pixels.
    * @param sprite to scale to new pixel size
    * @param value that is the number of pixels to scale the sprite by, eg: 10
    * @param direction from the sprite anchor point, eg: ScaleDirection.Horizontally
    */
    function scaleByPixels(sprite: Sprite, value: number, direction?: ScaleDirection, anchor?: ScaleAnchor, proportional?: boolean): void;
}
/**
 * File storage operations
*/
declare namespace storage {
    let NEW_LINE: string;
    /**
     * Appends a new line to the file
    * @param filename name of the file, eg: "log.txt"
     */
    function appendLine(filename: string, data: string): void;
    /**
    * Append string data to a new or existing file.
    * @param filename name of the file, eg: "log.txt"
    */
    function append(filename: string, data: string): void;
    /**
    * Overwrite file with string data.
    * @param filename name of the file, eg: "log.txt"
    */
    function overwrite(filename: string, data: string): void;
    /**
    * Read contents of file as a string.
    * @param filename name of the file, eg: "log.txt"
    */
    function read(filename: string): string;
}
declare namespace storyboard {
    /**
     * Default boot sequence
     */
    const loaderBootSequence: BootSequence;
}
declare namespace input {
}
/**
 * Various test event in the execution cycle
 */
declare enum TestEvent {
    RunSetUp = 0,
    RunTearDown = 1,
    TestSetUp = 2,
    TestTearDown = 3
}
/**
 * A Unit tests framework
 */
declare namespace tests {
    /**
     * Registers a test to run
     */
    function test(name: string, handler: () => void): void;
    /**
     * Checks a boolean condition
     */
    function assert(message: string, condition: boolean): void;
    /**
     * Checks that 2 values are close to each other
     * @param expected what the value should be
     * @param actual what the value was
     * @param tolerance the acceptable error margin, eg: 5
     */
    function assertClose(name: string, expected: number, actual: number, tolerance: number): void;
    /**
     * Registers code to be called at various points in the test execution
     * @param handler
     */
    function onEvent(event: TestEvent, handler: () => void): void;
}
declare namespace tts {
    /**
     * Runs code each time a word or sentence boundary is reached in text being spoken
     */
    function onWordSpoken(handler: (offset: number, nextWord: string, fullText: string) => void): void;
    /**
     * Speak some text using the computer's text to speech voice and pause until the speaking has finished.
     * If some text is already being spoken, this text will be queued until the other text finishes.
     *
     * @param text The text to speak
     * @param volume The volume to speak at
     * @param pitch A pitch modifier for moving the pitch of text up or down
     * @param rate The rate at which the text will be spoken; higher is faster
     * @param language The ISO language code for the text to be spoken; defaults to the system language
     */
    function speakText(text: string, volume?: number, pitch?: number, rate?: number, language?: string): void;
}
declare namespace input {
}
interface TouchButton extends Button {
}
declare namespace net {
    class WifiController extends net.Controller {
        private networks;
        private inScan;
        private _ssid;
        constructor();
        private scanDone;
        scanNetworksCore(): net.AccessPoint[];
        startLoginServer(hostName: string): void;
        isLoginServerEnabled(): boolean;
        disconnectAP(): void;
        connectAP(ssid: string, pass: string): boolean;
        socket(): number;
        private logError;
        socketConnect(socket_num: number, dest: string | Buffer, port: number, conn_mode?: number): boolean;
        socketWrite(socket_num: number, buffer: Buffer): void;
        socketAvailable(socket_num: number): number;
        socketRead(socket_num: number, size: number): Buffer;
        socketClose(socket_num: number): void;
        hostbyName(hostname: string): Buffer;
        get isIdle(): boolean;
        get MACaddress(): Buffer;
        get IPaddress(): Buffer;
        get ssid(): string;
        get rssi(): number;
        ping(dest: string, ttl?: number): number;
        dataAvailableSrc(socket_num: number): number;
        dataAvailableValue(socket_num: number): number;
    }
}
