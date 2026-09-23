import Reveal from "@/components/Reveal";
import PeopleGrid from "@/components/PeopleGrid";
import { boardMembers } from "@/data/content";

export default function Diretoria() {
  return (
    <section className="section" id="diretoria">
      <div className="wrap">
        <Reveal as="p" className="kicker">
          Conselho Administrativo
        </Reveal>
        <Reveal as="h2">Quem lidera a Liga Coop.</Reveal>

        <PeopleGrid people={boardMembers} columns={4} />
      </div>
    </section>
  );
}
