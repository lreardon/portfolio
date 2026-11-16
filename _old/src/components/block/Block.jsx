export default function Block({ href, imgSrc, imgAlt, imgWidth, imgHeight, backgroundColor, frameColor, imageLeft, children }) {
    const image = (
        <a key="image" href={href} target="_blank" rel="noopener noreferrer" className="block block-image-container">
            <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} className={`object-scale-down ${frameColor} p-4`} />
        </a>
    );
    const headline = (
        <div key="headline" className={`flex ${frameColor} p-2 justify-center items-center`}>
            <p className="text-xl sm:text-3xl">{children}</p>
        </div>
    );

    return (
        <div className={`flex ${backgroundColor} block-container items-center p-4 gap-4`}>
            {imageLeft ? [image, headline] : [headline, image]}
        </div>
    );
}
