"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { env } from "@/env";
import { ProjectCard } from "./project-card";
import { SearchBar } from "./search-bar";

const projects = [
  {
    id: 1,
    slug: "ai-powered-health-tracking-app",
    title: "AI-Powered Health Tracking App",
    description:
      "Building a mobile app that uses AI to track and analyze health metrics, providing personalized recommendations.",
    skills: [
      "Mobile Developer",
      "AI Engineer",
      "UI/UX Designer",
      "Health Expert",
    ],
    author: "Sarah Johnson",
    date: "2 days ago",
  },
];

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="flex-1 py-12">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              Projetos
            </h1>
            <p className="text-muted-foreground">
              Navegue e descubra projetos em busca de colaboradores
            </p>
          </div>
          <Link
            href={`${env.NEXT_PUBLIC_APP_URL}/projetos/criar`}
            target="_self"
          >
            <Button variant="secondary">
              <Plus className="mr-2 h-4 w-4" />
              Publicar um Projeto
            </Button>
          </Link>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </main>
  );
};
