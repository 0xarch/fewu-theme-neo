const SVG_PRESET = {
    'gnome-feather-tool': `<svg class="feather feather-tool" viewBox="0 0 24 24" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    'kde-menu': `<svg viewBox="0 0 48 48" fill="none" height="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M10,14h24M10,24h28M10,34h28"></path></svg>`,
    'kde-rss': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="1em" height="1em" fill="currentcolor"><circle class="symbol" cx="2" cy="6" r="1"></circle><path class="symbol" d="m1 4a3 3 0 013 3h1A4 4 0 001 3z"></path><path class="symbol" d="m1 2a5 5 0 015 5h1A6 6 0 001 1z"></path></svg>`
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
    load_svg: (str) => SVG_PRESET[str]
}

export default {
    install,
    provide
}