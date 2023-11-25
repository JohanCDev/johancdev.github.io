"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Actuellement en échange à l'{" "}
        <span className="font-medium">UQAC</span>, Je suis passionné depuis
        toujours pas l'informatique et c'est donc facilement que j'ai choisi{" "}
        <span className="font-medium">Epitech</span> pour me former.{" "}Avec son
        approche pédagogique basée sur la{" "} <span className="font-medium">réalisation de projets</span>,
        j'ai pu apprendre à{" "} <span className="font-medium">travailler en équipe</span> et à{" "}
        <span className="font-medium">résoudre des problèmes</span> concrets tout en
        développant mes compétences techniques en programmation, que ce soit {" "}
        <span className="font-medium">front-end</span> ou {" "} <span className="font-medium">back-end</span>.{" "}
        <span className="italic">Ma conviction</span> est de rendre le monde meilleur
        en créant des outils utiles qui changent la vie de ses utilisateurs.
        Je développe actuellement mes connaissances en {" "}
        <span className="font-medium">
          React-Native, Node.js et Next.js
        </span>
        . Je suis aussi familier avec Typescript, le C et le C++. Je suis toujours prêt
        à apprendre de nouvelles technologies. Je suis actuellement à la recherche d'un{" "}
        <span className="font-medium">stage alterné</span> de 3 jours par semaine à partir
        du 4 septembre 2023 jusqu'à fin avril 2024 dans le cadre de ma 5ème et dernière année à Epitech.
      </p>

      <p>
        <span className="italic">Quand je ne code pas, (oui ça arrive)</span>, J'aime faire du basket-ball 
        et du sport en général, {" "}<span className="font-medium">découvrir</span> de nouvelles choses à travers des livres, des documentaires ou des 
        jeux vidéos. J'apprends actuellement beaucoup des grands entrepreneurs qui ont façonnés la technologie et le monde d'aujourd'hui comme {" "}
        <span className="font-medium">Steve Jobs, Elon Musk et bien évidemment Thomas Pesquet 🇫🇷🧑🏼‍🚀</span>.
      </p>
    </motion.section>
  );
}
