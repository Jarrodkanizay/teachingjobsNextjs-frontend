// utils/useURLParams.js

import { useSearchParams } from 'next/navigation';

// Function to convert object to URLSearchParams
export function toURLParams(obj) {
    const { r = 'Global', q = '', l = '', lon = 0, lat = 0, page = 0, category = '', currentMiddleCategory = '', filter0 = [] , mode = 'default'} = obj;
    const params = new URLSearchParams();

    params.set('r', encodeURIComponent(r));
    params.set('l', encodeURIComponent(l));
    params.set('q', encodeURIComponent(q));
    params.set('lon', encodeURIComponent(lon));
    params.set('lat', encodeURIComponent(lat));
    params.set('page', encodeURIComponent(page));
    params.set('category', encodeURIComponent(category));
    params.set('currentMiddleCategory', encodeURIComponent(currentMiddleCategory));
    params.set('filter0', encodeURIComponent(JSON.stringify(filter0)));
    params.set('mode', decodeURIComponent(mode));

    return params;
}

// Function to load object from URLSearchParams
export function loadFromURLParams(searchParams) {
    if (!searchParams) return;

    const r = decodeURIComponent(searchParams.get('r') || 'Global');
    const q = decodeURIComponent(searchParams.get('q') || '');
    const l = decodeURIComponent(searchParams.get('l') || '');
    const lon = parseFloat(decodeURIComponent(searchParams.get('lon') || '0'));
    const lat = parseFloat(decodeURIComponent(searchParams.get('lat') || '0'));
    const page = parseInt(decodeURIComponent(searchParams.get('page') || '0'), 10);
    const category = decodeURIComponent(searchParams.get('category') || '');
    const currentMiddleCategory = decodeURIComponent(searchParams.get('currentMiddleCategory') || '');
    const filter = decodeURIComponent(searchParams.get('filter0') || '');
    const filter0 = filter ? JSON.parse(filter) : [];
    const mode = decodeURIComponent(searchParams.get('mode') || 'default');

    return { r, q, l, lon, lat, page, category, currentMiddleCategory, filter0, mode };
}

// Custom hook to encapsulate URL parameter logic
const useURLParams = () => {
    const searchParams = useSearchParams();
    return loadFromURLParams(searchParams);
};

export default useURLParams;
