export default function SkillIcon({ iconSrc, altText, title }) {
  return (
    <div>
      <img src={iconSrc} alt={altText} />
      <p className="icon-title">{title}</p>
    </div>
  );
}
