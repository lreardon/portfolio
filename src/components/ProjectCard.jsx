export default function ProjectCard({ project, photo, imageLeft }) {
    const { name, description, technologies, backgroundColor, frameColor } = project

    return (
        <section className={`flex ${backgroundColor} block-container items-center p-4 gap-4 ${imageLeft ? '' : 'flex-row-reverse'}`}>
            <div className={`${frameColor} p-4 w-full sm:w-2/5 shrink-0`}>
                <img src={photo} alt={name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className={`${frameColor} flex flex-col gap-3 p-4`}>
                <h2 className="text-2xl sm:text-3xl font-bold">{name}</h2>
                <p className="text-lg">{description}</p>
                <ul className="flex flex-wrap gap-2">
                    {technologies.map(t => <li key={t} className="bg-white/60 px-2 py-0.5 text-sm">{t}</li>)}
                </ul>
            </div>
        </section>
    )
}
