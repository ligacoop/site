import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Person } from "@/data/content";

export default function PeopleGrid({
  people,
  columns,
}: {
  people: Person[];
  columns: 4 | 6;
}) {
  return (
    <div className={`people-grid people-grid-${columns}`}>
      {people.map((person) => (
        <Reveal as="figure" className="person-card" key={person.name}>
          <Image
            src={person.image}
            alt={person.name}
            className="person-photo"
            placeholder="blur"
            sizes={`(max-width: 480px) 50vw, (max-width: 980px) 33vw, ${
              columns === 4 ? "25vw" : "20vw"
            }`}
          />
          <figcaption>
            <strong>{person.name}</strong>
            <span>{person.role}</span>
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
