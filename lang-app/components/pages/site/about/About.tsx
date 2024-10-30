export default function About({ l }: { l: any }) {
  return (
    <div>
      <div className="container">
        <h1>{l.about.title}</h1>
        <p>{l.about.subtitle}</p>
      </div>
    </div>
  );
}
