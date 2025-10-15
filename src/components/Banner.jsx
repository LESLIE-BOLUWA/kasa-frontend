// Banner (Bandeau )

export default function Banner({ image, title = "" }) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="banner" style={style}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}
