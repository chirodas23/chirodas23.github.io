type VideoCardProps = {
  label: string;
  title: string;
  src: string;
  href: string;
  className?: string;
};

export function VideoCard({ label, title, src, href, className = "" }: VideoCardProps) {
  return (
    <article className={`video-card ${className}`}>
      <div className="video-frame">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-meta">
        <div>
          <span>{label}</span>
          <h3>{title}</h3>
        </div>
        <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}>
          ↗
        </a>
      </div>
    </article>
  );
}
