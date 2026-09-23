import Reveal from "@/components/Reveal";
import PeopleGrid from "@/components/PeopleGrid";
import { teamMembers } from "@/data/content";

export default function Equipe() {
  return (
    <section className="section section-dark" id="equipe">
      <div className="wrap">
        <Reveal as="p" className="kicker">
          Núcleo Corporativo
        </Reveal>
        <Reveal as="h2">Gestão, tecnologia e operação que sustentam a Liga.</Reveal>

        <PeopleGrid people={teamMembers} columns={6} />
      </div>
    </section>
  );
}
