
declare const PAGE_TYPE: string;
declare const IS_INDEX: boolean;
declare const BASE: string;

declare const FastClick: any;
declare const Chart: any;
declare const mermaid: any;
declare const mxEvent: any;
declare const Editor: any;
declare const Graph: any;
declare const mxConstants: any;
declare const mxUtils: any;
declare const mxStencilRegistry: any;

interface EventList 
{
    [K: string]: ((...args: any[]) => void);
}

interface PhotoSwipeUIInfo
{
    eventList: EventList;
    options: object;
}

interface PhotoSwipeUI<T extends Photo, TInfo extends PhotoSwipeUIInfo>
{
    readonly info: TInfo;
}

interface PhotoSwipeDefaultUIOptions<T extends Photo>
{
    // Size of top & bottom bars in pixels,
    // "bottom" parameter can be 'auto' (will calculate height of caption)
    // option applies only when mouse is used, 
    // or width of screen is more than 1200px
    // 
    // (Also refer to `parseVerticalMargin` event)
    barsSize?: { top: number, bottom: number | 'auto' };

    // Adds class pswp__ui--idle to pswp__ui element when mouse isn't moving for 4000ms
    timeToIdle?: number;

    // Same as above, but this timer applies when mouse leaves the window
    timeToIdleOutside?: number;

    // Delay until loading indicator is displayed
    loadingIndicatorDelay?: number;

    // Function builds caption markup
    addCaptionHTMLFn?: (item: T, captionEl: HTMLElement, isFake: boolean) => boolean;

    // Buttons/elements
    closeEl?: boolean;
    captionEl?: boolean;
    fullscreenEl?: boolean;
    zoomEl?: boolean;
    shareEl?: boolean;
    counterEl?: boolean;
    arrowEl?: boolean;
    preloaderEl?: boolean;

    // Tap on sliding area should close gallery
    tapToClose?: boolean;

    // Tap should toggle visibility of controls
    tapToToggleControls?: boolean;

    // Mouse click on image should close the gallery,
    // only when image is smaller than size of the viewport
    clickToCloseNonZoomable?: boolean;

    // Element classes click on which should close the PhotoSwipe.
    // In HTML markup, class should always start with "pswp__", e.g.: "pswp__item", "pswp__caption".
    // 
    // "pswp__ui--over-close" class will be added to root element of UI when mouse is over one of these elements
    // By default it's used to highlight the close button.
    closeElClasses?: string[];

    // Separator for "1 of X" counter
    indexIndicatorSep?: string;



    // Share buttons
    // 
    // Available variables for URL:
    // {{url}}             - url to current page
    // {{text}}            - title
    // {{image_url}}       - encoded image url
    // {{raw_image_url}}   - raw image url
    shareButtons?: { id: string, label: string, url: string, download?: boolean }[];

    // Next 3 functions return data for share links
    // 
    // functions are triggered after click on button that opens share modal,
    // which means that data should be about current (active) slide
    getImageURLForShare?: (shareButtonData: ({ id: string, label: string, url: string, download?: boolean })) => string;
    getPageURLForShare?: (shareButtonData: ({ id: string, label: string, url: string, download?: boolean })) => string;
    getTextForShare?: (shareButtonData: ({ id: string, label: string, url: string, download?: boolean })) => string;

    // Parse output of share links
    // `shareButtonData` - object from shareButtons array
    // `shareButtonOut` - raw string of share link element
    parseShareButtonOut?: (shareButtonData: ({ id: string, label: string, url: string, download?: boolean }), shareButtonOut: string) => string;
}

interface PhotoSwipeDefaultUIEventList<T extends Photo> extends EventList
{
    shareLinkClick: (e: MouseEvent, item: { id: string, label: string, url: string, download?: boolean }) => void;
}

interface PhotoSwipeUI_DefaultInfo<T extends Photo>
{
    eventList: PhotoSwipeDefaultUIEventList<T>;
    options: PhotoSwipeDefaultUIOptions<T>;
}

declare class PhotoSwipeUI_Default<T extends Photo> implements PhotoSwipeUI<T, PhotoSwipeUI_DefaultInfo<T>>
{
    readonly info: PhotoSwipeUI_DefaultInfo<T>;
}

interface PhotoSwipeOption<T extends Photo>
{
    index?: number;
    getThumbBoundsFn?: (index: number) => { x: number, y: number, w: number };
    showHideOpacity?: boolean;
    showAnimationDuration?: number;
    hideAnimationDuration?: number;
    bgOpacity?: number;
    spacing?: number;
    allowPanToNext?: boolean;
    maxSpreadZoom?: number;
    getDoubleTapZoom?: (isMouseClick: boolean, item: T) => number;
    loop?: boolean;
    pinchToClose?: boolean;
    closeOnScroll?: boolean;
    closeOnVerticalDrag?: boolean;
    mouseUsed?: boolean;
    escKey?: boolean;
    arrowKeys?: boolean;
    history?: boolean;
    galleryUID?: boolean;
    galleryPIDs?: boolean;
    errorMsg?: string;
    preload?: [number, number];
    mainClass?: string;
    getNumItemsFn?: () => number;
    focus?: boolean;
    isClickableElement?: (el: HTMLElement) => boolean;
    modal?: boolean;
}

interface Photo
{
    msrc?: string;
    src?: string;
    w?: number;
    h?: number;
}

type UIInfoType<T> = T extends PhotoSwipeUI<infer TPhoto, infer TUIInfo> ? TUIInfo : never;
type UIPhotoType<T> = T extends PhotoSwipeUI<infer TPhoto, infer TUIInfo> ? TPhoto : never;
type a = UIInfoType<PhotoSwipeUI_Default<Photo>>;
interface PhotoSwipeConstructor
{

    new <T extends Photo, TUI extends PhotoSwipeUI<T, TUIInfo>, TUIInfo extends PhotoSwipeUIInfo>(pswpElement: HTMLElement, ui: { new(): TUI }, items: T[], options: PhotoSwipeOption<T> | UIInfoType<TUI>["options"])
        : PhotoSwipe<T, TUI>;
}

declare const PhotoSwipe: PhotoSwipeConstructor;

interface PhotoSwipeEventList<T extends Photo>
{
    beforeChange: () => void;
    afterChange: () => void;
    imageLoadComplete: (index: number, item: T) => void;
    resize: () => void;
    gettingData: (index: number, item: T) => void;
    mouseUsed: () => void;
    initialZoomIn: () => void;
    initialZoomInEnd: () => void;
    initialZoomOut: () => void;
    initialZoomOutEnd: () => void;
    parseVerticalMargin: (item: T & { vGap: { top: number, bottom: number } }) => void;
    close: () => void;
    unbindEvents: () => void;
    destroy: () => void;
    updateScrollOffset: (offset: { x: number, y: number }) => void;
    preventDragEvent: (e: DragEvent, isDown: boolean, preventObj: { prevent: boolean }) => void;
}

interface PhotoSwipe<T extends Photo, TUI>
{
    listen<K extends keyof (PhotoSwipeEventList<T> & UIInfoType<TUI>['eventList'])>(event: K, handler: (PhotoSwipeEventList<T> & UIInfoType<TUI>['eventList'])[K]): void;
    shout<K extends keyof (PhotoSwipeEventList<T> & UIInfoType<TUI>['eventList'])>(event: K, ...args: Parameters<(PhotoSwipeEventList<T> & UIInfoType<TUI>['eventList'])[K]>): void;

    init(): void;
    close(): void;
    destroy(): void;

    goTo(index: number): void;
    next(): void;
    prev(): void;
    /** 
     * Update gallery size
     * @param  {boolean} `force` If you set it to `true`, 
     * size of the gallery will be updated 
     * even if viewport size hasn't changed.
     */
    updateSize(force: boolean): void;
    /**   
     * Zoom current slide to (optionally with animation)
     * @param  {number}   `destZoomLevel` Destination scale number. 1 - original.
     *                                   pswp.currItem.fitRatio - image will fit into viewport.
     * @param  {object}   `centerPoint`   Object of x and y coordinates, relative to viewport.
     * @param  {int}      `speed`         Animation duration. Can be 0.
     * @param  {function} `easingFn`      Easing function (optional). Set to false to use default easing.
     * @param  {function} `updateFn`      Function will be called on each update frame. (optional)
     * 
     * Example below will 2x zoom to center of slide:
     * pswp.zoomTo(2, {x:pswp.viewportSize.x/2,y:pswp.viewportSize.y/2}, 2000, false, function(now) {
     *   });   
     */
    zoomTo(destZoomLevel: number, centerPoint: { x: number, y: number }, speed: number, easingFn?: (time: number) => number, updateFn?: () => void): void;
    /**  
     * Apply zoom and pan to the current slide
     * 
     * @param   {number} `zoomLevel`
     * @param   {int}    `panX`
     * @param   {int}    `panY`
     * 
     * For example: `pswp.applyZoomPan(1, 0, 0)`
     * will zoom current image to the original size
     * and will place it on top left corner
     */
    applyZoomPan(zoomLevel: number, panX: number, panY: number): void;
    readonly items: T[];

    readonly currItem: T;
}
