/**
 * Thanks to:
 * GNOME VDG
 * KDE VDG
 * Font Awesome
 * Creative Commons
 */
const SVG_PRESET = {
    'gnome-feather-tool': `<svg class="feather feather-tool" viewBox="0 0 24 24" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    'kde-menu': `<svg viewBox="0 0 48 48" fill="none" height="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M10,14h24M10,24h28M10,34h28"></path></svg>`,
    'kde-rss': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="1em" height="1em" fill="currentcolor"><circle class="symbol" cx="2" cy="6" r="1"></circle><path class="symbol" d="m1 4a3 3 0 013 3h1A4 4 0 001 3z"></path><path class="symbol" d="m1 2a5 5 0 015 5h1A6 6 0 001 1z"></path></svg>`,
    'fa-calendar': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentcolor"><!--!@fontawesome https://fontawesome.com--><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>`,
    'fa-book': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentcolor"><!--!@fontawesome https://fontawesome.com--><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`,
    'fa-tag': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentcolor"><!--!@fontawesome https://fontawesome.com--><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"/></svg>`,
    'creative-commons': `<svg viewBox="0 0 30 30" fill="currentColor"><g><path d="M14.972 0c4.196 0 7.769 1.465 10.715 4.393A14.426 14.426 0 0128.9 9.228C29.633 11.04 30 12.964 30 15c0 2.054-.363 3.978-1.085 5.772a13.77 13.77 0 01-3.2 4.754 15.417 15.417 0 01-4.983 3.322A14.932 14.932 0 0114.973 30c-1.982 0-3.88-.38-5.692-1.14a15.087 15.087 0 01-4.875-3.293c-1.437-1.437-2.531-3.058-3.281-4.862A14.71 14.71 0 010 15c0-1.982.38-3.888 1.138-5.719a15.062 15.062 0 013.308-4.915C7.303 1.456 10.812 0 14.972 0zm.055 2.706c-3.429 0-6.313 1.196-8.652 3.589a12.896 12.896 0 00-2.72 4.031 11.814 11.814 0 00-.95 4.675c0 1.607.316 3.156.95 4.646a12.428 12.428 0 002.72 3.992 12.362 12.362 0 003.99 2.679c1.483.616 3.037.924 4.662.924 1.607 0 3.164-.312 4.675-.937a12.954 12.954 0 004.084-2.705c2.339-2.286 3.508-5.152 3.508-8.6 0-1.66-.304-3.231-.91-4.713a11.994 11.994 0 00-2.651-3.965c-2.412-2.41-5.314-3.616-8.706-3.616zm-.188 9.803l-2.01 1.045c-.215-.445-.477-.758-.79-.937-.312-.178-.602-.268-.87-.268-1.34 0-2.01.884-2.01 2.652 0 .803.17 1.446.509 1.928.34.482.84.724 1.5.724.876 0 1.492-.43 1.85-1.286l1.847.937a4.407 4.407 0 01-1.634 1.728c-.696.42-1.464.63-2.303.63-1.34 0-2.42-.41-3.242-1.233-.821-.82-1.232-1.964-1.232-3.428 0-1.428.416-2.562 1.246-3.401.83-.84 1.879-1.26 3.147-1.26 1.858 0 3.188.723 3.992 2.17zm8.652 0l-1.983 1.045c-.214-.445-.478-.758-.79-.937-.313-.178-.613-.268-.897-.268-1.34 0-2.01.884-2.01 2.652 0 .803.17 1.446.51 1.928.338.482.838.724 1.5.724.874 0 1.49-.43 1.847-1.286l1.875.937a4.606 4.606 0 01-1.66 1.728c-.696.42-1.455.63-2.277.63-1.357 0-2.441-.41-3.253-1.233-.814-.82-1.22-1.964-1.22-3.428 0-1.428.415-2.562 1.246-3.401.83-.84 1.879-1.26 3.147-1.26 1.857 0 3.18.723 3.965 2.17z" fill="currentColor"></path></g></svg>`,
}

let SVG_USED = [];

/**
 * Thanks to:
 * Material Symbols
 */
const SVG_COMMON = {
    prefix: `<svg height="1em" viewBox="0 0 24 24">`,
    suffix: `</svg>`
};
const SVGS = {
    'material-symbols:calendar-today-outline-rounded': {
        prefix: SVG_COMMON.prefix,
        suffix: SVG_COMMON.suffix,
        inner: `<path d="M6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zm0-2h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20" fill="currentColor"></path>`
    },
    'material-symbols:book-2-outline-rounded': {
        prefix: SVG_COMMON.prefix,
        suffix: SVG_COMMON.suffix,
        inner: `<path d="M6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zm0-2h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20" fill="currentColor"></path>`
    },
    'material-symbols:tag-rounded': {
        prefix: SVG_COMMON.prefix,
        suffix: SVG_COMMON.suffix,
        inner: `<path d="m9 16l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T6.3 18.8L7 16H4.275q-.5 0-.8-.387T3.3 14.75q.075-.35.35-.55t.625-.2H7.5l1-4H5.775q-.5 0-.8-.387T4.8 8.75q.075-.35.35-.55t.625-.2H9l.825-3.275Q9.9 4.4 10.15 4.2t.6-.2q.475 0 .775.375t.175.825L11 8h4l.825-3.275q.075-.325.325-.525t.6-.2q.475 0 .775.375t.175.825L17 8h2.725q.5 0 .8.387t.175.863q-.075.35-.35.55t-.625.2H16.5l-1 4h2.725q.5 0 .8.388t.175.862q-.075.35-.35.55t-.625.2H15l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T12.3 18.8L13 16zm.5-2h4l1-4h-4z" fill="currentColor"></path>`
    },
    'material-symbols:chevron-right-rounded': {
        prefix: SVG_COMMON.prefix,
        suffix: SVG_COMMON.suffix,
        inner: `<path d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z" fill="currentColor"></path>`
    }
};

let GObject;

function install(PROVISION) {
    GObject = PROVISION.GObject;
}

let provide = {
    hasPropertyThenOr: (g1, g2, g3) => {
        return GObject.hasProperty(g1, g2) ? GObject.getProperty(g1, g2) : g3
    },
    /**
     * 
     * @param {string} str 
     * @returns {string} css hex code
     */
    getColorByString: (str) => {
        let arr = ['', '', ''];
        if (!str) str = Date.now().toString();
        while (str.length % 3 != 0) str += '^';
        for (let i = 0; i < str.length; i += 3) {
            arr[0] += str[i];
            arr[1] += str[i + 1];
            arr[2] += str[i + 2];
        }
        let arr_num = arr.map(v => {
            let sum = 0;
            for (let i = 0; i < v.length; i++)
                sum += v.charCodeAt(i);
            sum = (sum % 255).toString(16).padStart(2, 'f');
            return sum;
        });
        return {
            toHex: () => '#' + arr_num.join(''),
            toRgb: () => arr_num.map(v => parseInt(v, 16)),
            toGrayscale: () => {
                let rgb = arr_num.map(v => parseInt(v, 16));
                return rgb[0] * 0.2989 + rgb[1] * 0.5870 + rgb[2] * 0.1140;
            }
        }
    },
    load_svg: (str) => SVG_PRESET[str],
    refreshSvg: () => {
        SVG_USED = [];
    },
    getSvg: (str) => {
        if (SVGS[str]) {
            if (SVG_USED.includes(str)) {
                return SVGS[str].prefix + `<use xlink:href="#svg:${str}"` + SVGS[str].suffix;
            } else {
                SVG_USED.push(str);
                return SVGS[str].prefix + `<symbol id="svg:${str}">${SVGS[str].inner}</symbol><use xlink:href="#svg:${str}"` + SVGS[str].suffix;
            }
        }
        return SVG_PRESET[str];
    }
}

export default {
    install,
    provide
}