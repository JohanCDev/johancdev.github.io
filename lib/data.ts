import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { MdPhoneIphone, MdMuseum } from "react-icons/md";
import { TbBrandPowershell } from "react-icons/tb";
import { FaBug, FaStethoscope } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import desoutter from "@/public/desoutter.png";
import chouicImg from "@/public/chouic.png";
import doctolibImg from "@/public/doctolib.png";
import bombermanImg from "@/public/bomberman.png";
import rtypeImg from "@/public/rtype.png";
import ftpImg from "@/public/Epitech.png";
import nolosayImg from "@/public/nolosay.png";
import { StaticImageData } from "next/image";

export const links = [
  {
    name: "À propos",
    hash: "#home",
  },
  {
    name: "Mes études",
    hash: "#study",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const studiesData = [
  {
    title: "1ère année Epitech Technology",
    location: "Nantes",
    description:
      "Apprentissage des bases de la programmation en C et de la méthodologie de travail. Projet de fin d'année : création d'un jeu vidéo en C en utilisant la librairie CSFML.",
    icon: React.createElement(TbBrandPowershell),
    date: "2020-2021",
  },
  {
    title: "2ème année Epitech Technology",
    location: "Nantes",
    description:
      "Approfondissement de la programmation en C++, découverte de la programmation fonctionnelle en Haskell et de la programmation réseau en C.",
    icon: React.createElement(FaBug),
    date: "2022",
  },
  {
    title: "3ème année Epitech Technology",
    location: "Nantes",
    description:
      "Découverte de différentes technologies web et mobiles. Commencement de la track innovation de Epitech avec la création d'un projet à vocation entrepenariale: NoLoSay.",
    icon: React.createElement(IoIosRocket),
    date: "2022-2023",
  },
  {
    title:
      "4ème année Epitech Technology en échange à l'Université du Québec à Chicoutimi",
    location: "Chicoutimi, Québec",
    description:
      "Année d'échange à l'UQAC. Découverte de nouvelles technologies et de nouvelles méthodologies de travail.",
    icon: React.createElement(FaCanadianMapleLeaf),
    date: "2023-aujourd'hui",
  },
] as const;

export const experiencesData = [
  {
    title: "Développeur front-end web et mobile chez Chouic",
    location: "Nantes",
    description:
      "Stage de 2e année. Développement de différentes fonctionnalités sur les sites webs de Chouic en WordPress et HTML/CSS, et développement sur leurs différentes applications mobiles en React Native.",
    icon: React.createElement(MdPhoneIphone),
    date: "2021",
  },
  {
    title: "Développeur iOS et C# chez Desoutter Tools",
    location: "Nantes",
    description:
      "Stage alterné de 3e année à 2 jours par semaine. Amélioration de l'application iOS de Desoutter Tools en Xamarin.cs et du back-end en C#. Déploiement de l'application sur l'App Store.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Développeur fullstack chez Doctolib",
    location: "Nantes",
    description:
      "Stage de fin de bachelor. Implémentation de diverses fonctionnalité dans l'équipe en charge de la mise en relation entre le professionnel de santé et l'équipe support de Doctolib sur Doctolib Pro. Utilisation de React, TypeScript et Ruby on Rails.",
    icon: React.createElement(FaStethoscope),
    date: "2023",
  },
  {
    title: "Lead-dev front-end chez NoLoSay",
    location: "Nantes",
    description:
      "NoLoSay est un projet étudiant dans le cadre de mon cursus Epitech. C'est un projet qui a pour but d'améliorer l'accessibilité des lieux de culture pour les sourds et malentendants. Je suis le lead-dev front-end de ce projet, particulièrement sur la partie mobile.",
    icon: React.createElement(MdMuseum),
    date: "2023-aujourd'hui",
  },
] as const;

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

export const projectsData: Project[] = [
  {
    title: "Chouic",
    description:
      "Pendant mon 1er stage effectué, j'ai travaillé sur les sites web de Chouic. J'ai ajouté des fonctionnalités sur les sites web. Puis j'ai pu travailler sur leurs applications mobiles en React Native.",
    tags: ["WordPress", "HTML/CSS", "React Native"],
    imageUrl: chouicImg,
  },
  {
    title: "Desoutter Tools",
    description:
      "Pendant mon second stage, j'ai pu travailler sur l'application mobile de Desoutter Tools. J'ai ajouté quelques fonctionnalités puis j'ai déployé l'application sur l'App Store pour la première fois.",
    tags: ["C#", "Xamarin.cs", "iOS"],
    imageUrl: desoutter,
  },
  {
    title: "Doctolib",
    description:
      "Lors de mon 3e stage, j'ai pu travailler chez Doctolib, dans l'équipe Customer Contact Support, j'ai travaillé sur des fonctionnalités qui facilitent la communication entre les professionnels de santé et l'équipe support de Doctolib.",
    tags: ["React", "Ruby on Rails", "Docker"],
    imageUrl: doctolibImg,
  },
  {
    title: "NoLoSay",
    description:
      "Je suis en charge du développement de l'application mobile et de nos réseaux sociaux. Notre but est d'améliorer l'accessibilité des lieux de culture pour les sourds et malentendants.",
    tags: ["React-Native", "Communication", "Innovation"],
    imageUrl: nolosayImg,
  },
];

export const studentProjectsData: Project[] = [
  {
    title: "MyRPG",
    description:
      "Projet de fin de première année ayant pour but de réaliser un RPG en C en utilisant la CSFML.",
    tags: ["C", "Travail en groupe"],
    imageUrl: ftpImg,
  },
  {
    title: "My FTP",
    description: "Réalisation d'un serveur FTP en C.",
    tags: ["C", "Réseau"],
    imageUrl: ftpImg,
  },
  {
    title: "Indie Studio",
    description:
      "Projet de fin de deuxième année ayant pour but de réaliser un Bomberman complet en C++ en utilisant la librairie C Raylib.",
    tags: ["C++", "C", "Gestion de projet"],
    imageUrl: bombermanImg,
  },
  {
    title: "R-Type",
    description:
      "Projet de fin de troisième année ayant pour but de réaliser un jeu R-Type en réseau en C++ en utilisant la librairie SFML.",
    tags: ["C++", "DevOps", "Gestion de projet"],
    imageUrl: rtypeImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "C",
  "C++",
  "C#",
  "Ruby on Rails",
  "Git",
  "Python",
  "Docker",
] as const;
