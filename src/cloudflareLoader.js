export default function cloudflareLoader({ src, width, quality }) {

    const normalSrc = src.startsWith('/') ? src.slice(1) : src;

    const params = [`width=${width}`];
    if (quality) {
      params.push(`quality=${quality}`);
    }
    const paramsString = params.join(',');
    return `/cdn-cgi/image/${paramsString}/${normalSrc}`;
  };