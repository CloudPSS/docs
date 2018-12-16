namespace Util
{
    export const DOMContentLoaded: () => Promise<void> = (function ()
    {
        let isReady = false;
        let waiting = new Array<() => void>();
        document.addEventListener('DOMContentLoaded', function ()
        {
            isReady = true;
            for (const cb of waiting)
                cb();
            waiting = [];
        }, false);

        return function DOMContentLoaded(): Promise<void>
        {
            if (isReady)
                return Promise.resolve();
            return new Promise(function (resolve)
            {
                waiting.push(resolve);
            });
        }
    })();

    export async function fetchJson<T>(url: string | URL): Promise<T>
    {
        const urlData = (typeof url === 'string') ? new URL(url) : url;
        const response = await fetch(urlData.href);
        if (!response.ok)
            throw new Error(response.statusText);
        return await response.json() as T;
    }

    export function fetchJsonP<T>(url: string | URL): Promise<T>
    {
        const urlData = (typeof url === 'string') ? new URL(url) : url;
        urlData.searchParams.set('callback', 'resolve');
        return new Promise(async function (resolve, reject)
        {
            const response = await fetch(urlData.href);
            eval(await response.text());
        })
    }

    interface ShapeData
    {
        classname: string;
        shape: Document;
    }

    export async function fetchShape(symbol: string): Promise<ShapeData>
    {
        interface ShapeResponse
        {
            classname: string;
            shape: string;
        }
        const data = await fetchJsonP<ShapeResponse>(`http://192.168.0.133/editor/getCompShapeBySym/?sym=${symbol}`);
        return {
            classname: data.classname,
            shape: mxUtils.parseXml(data.shape)
        };
    }

    export interface CompModel
    {

    }

    export function fetchCompModel(classname: string): Promise<CompModel>
    {
        return fetchJsonP(`http://192.168.0.133/editor/getCompModelByClassname/?classname=${classname}`);
    }

    // Stolen from: https://github.com/hexojs/hexo-util/blob/master/lib/escape_regexp.js
    export function escapeRegExp(str: string)
    {
        // http://stackoverflow.com/a/6969486
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }

    // Stolen from: https://github.com/hexojs/hexo-util/blob/master/lib/slugize.js
    export function slugize(str: string, options?: { separator?: string; transform?: ((input: string) => string); })
    {
        const option = options || {}

        const rControl = /[\u0000-\u001f]/g
        const rSpecial = /[\s~`!@#\$%\^&\*\(\)\-_\+=\[\]\{\}\|\\;:"'<>,\.\?\/]+/g
        const separator = option.separator || '-'
        const escapedSep = escapeRegExp(separator)

        var result = str
            // Remove control characters
            .replace(rControl, '')
            // Replace special characters
            .replace(rSpecial, separator)
            // Remove continuous separators
            .replace(new RegExp(escapedSep + '{2,}', 'g'), separator)
            // Remove prefixing and trailing separators
            .replace(new RegExp('^' + escapedSep + '+|' + escapedSep + '+$', 'g'), '')

        if (options && options.transform)
            return options.transform(result);
        else
            return result;
    }

    export function htmlEscape(text: string)
    {
        return text
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    }
}

export default Util;
