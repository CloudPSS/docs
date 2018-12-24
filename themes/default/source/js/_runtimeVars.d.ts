
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

interface PhotoSwipeUI<T extends Photo, TOptions>
{
}
interface DefaultUIOptions<T extends Photo>
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

declare class PhotoSwipeUI_Default<T extends Photo> implements PhotoSwipeUI<T, DefaultUIOptions<T>>{
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

interface PhotoSwipeConstructor
{

    new <T extends Photo>(pswpElement: HTMLElement, ui: { new(): PhotoSwipeUI_Default<T> }, items: T[], options: PhotoSwipeOption<T> | DefaultUIOptions<T>)
        : PhotoSwipe<T, PhotoSwipeUI_Default<T>>;
    new <T extends Photo, TUIOptions>(pswpElement: HTMLElement, ui: { new(): PhotoSwipeUI<T, TUIOptions> }, items: T[], options: PhotoSwipeOption<T> | TUIOptions)
        : PhotoSwipe<T, PhotoSwipeUI<T, TUIOptions>>;
}

declare const PhotoSwipe: PhotoSwipeConstructor;

interface PhotoSwipeEventList<T extends Photo>
{
    gettingData: (index: number, item: T) => void;
    beforeChange: () => void;
    afterChange: () => void;
    resize: () => void;
}
interface PhotoSwipeEventArgs<T extends Photo>
{
    gettingData: [number, T];
    beforeChange: [];
    afterChange: [];
    resize: [];
}

interface PhotoSwipe<T extends Photo, TUI>
{
    listen<K extends keyof PhotoSwipeEventList<T>>(event: K, handler: PhotoSwipeEventList<T>[K]): void;
    shout<K extends keyof PhotoSwipeEventArgs<T>>(event: K, ...args: PhotoSwipeEventArgs<T>[K]): void;

    init(): void;

    readonly items: T[];

    readonly currItem: T;
}
