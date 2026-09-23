import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import MissaoVisao from "@/components/MissaoVisao";
import Valores from "@/components/Valores";
import Impacto from "@/components/Impacto";
import Futuro from "@/components/Futuro";
import Diretoria from "@/components/Diretoria";
import Equipe from "@/components/Equipe";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Sobre />
        <MissaoVisao />
        <Valores />
        <Impacto />
        <Futuro />
        <Diretoria />
        <Equipe />
        <Contato />
      </main>

      <Footer />
    </>
  );
}
