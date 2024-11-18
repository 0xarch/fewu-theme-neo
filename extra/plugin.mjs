const SVG_PRESET = {
    'gnome-feather-tool': `<svg class="feather feather-tool" viewBox="0 0 24 24" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    'kde-menu': `<svg viewBox="0 0 48 48" fill="none" height="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M10,14h24M10,24h28M10,34h28"></path></svg>`,
    'kde-rss': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="1em" height="1em" fill="currentcolor"><circle class="symbol" cx="2" cy="6" r="1"></circle><path class="symbol" d="m1 4a3 3 0 013 3h1A4 4 0 001 3z"></path><path class="symbol" d="m1 2a5 5 0 015 5h1A6 6 0 001 1z"></path></svg>`,
    'fa-calendar': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentcolor"><!--!@fontawesome https://fontawesome.com--><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>`,
    'fa-book': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentcolor"><!--!@fontawesome https://fontawesome.com--><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`,
    'fa-tag': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentcolor"><!--!@fontawesome https://fontawesome.com--><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"/></svg>`
}

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
    getSvg: (str) => SVG_PRESET[str]
}

export default {
    install,
    provide
}