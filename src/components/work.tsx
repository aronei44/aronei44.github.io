import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import { getClients } from "../lib/clients";
import { getSkills } from "../lib/skills";

const projects = [
    {
        title: "AI Essay Assessment System",
        description:
            "AI-powered essay evaluation system capable of analyzing written responses and generating automated scores based on predefined assessment criteria.",
        technologies: getSkills([
            "Python",
            "PyTorch",
            "Numpy",
            "Pandas",
            "SkLearn",
        ]),
        clients: [],
    }, 
    {
        title: "ARC AGI Solver",
        description:
            "Research project focused on solving Abstraction and Reasoning Corpus (ARC) tasks using machine learning and reasoning-based approaches to advance artificial general intelligence capabilities.",
        technologies: getSkills([
            "Python",
            "PyTorch",
            "Numpy",
            "Pandas",
        ]),
        clients: [],
    },
    {
        title: "Banking System",
        description:
            "Core banking platform covering authentication, general ledger, funding, financing, treasury, and migration tools.",
        technologies: getSkills([
            "React",
            "Next.js",
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
            "Docker",
            "Nginx",
            "Redis",
            "Open Telemetry",
        ]),
        clients: getClients(["isi", "pos"]),
    },
    {
        title: "OpenAPI SNAP BI Admin",
        description:
            "Administration portal for managing Indonesia SNAP BI OpenAPI integrations, clients, and monitoring.",
        technologies: getSkills([
            "React",
            "Next.js",
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
            "Docker",
            "Redis",
            "Keycloak",
        ]),
        clients: getClients(["isi", "pos"]),
    },
    {
        title: "Cash Management System (Remittance)",
        description:
            "Cash management and remittance platform for secure domestic and international fund transfers.",
        technologies: getSkills([
            "React",
            "Python",
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
            "Docker",
            "Nginx",
        ]),
        clients: getClients(["isi", "ap"]),
    },
    {
        title: "Cash Management System",
        description:
            "Enterprise cash management platform supporting liquidity monitoring, fund transfers, and financial operations.",
        technologies: getSkills([
            "React",
            "Python",
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
            "Docker",
            "Nginx",
        ]),
        clients: getClients(["isi", "bjbs", "pos"]),
    },
    {
        title: "QRIS Management",
        description:
            "Administrative platform for managing QRIS merchants, transactions, and settlement processes.",
        technologies: getSkills([
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
            "Docker",
            "Laravel",
        ]),
        clients: getClients(["isi", "bjbs"]),
    },
    {
        title: "Printer Driver",
        description:
            "Custom Windows device driver enabling banking applications to communicate with thermal printers over USB and Bluetooth.",
        technologies: getSkills([
            "Rust",
            "RestAPI",
        ]),
        clients: getClients(["isi", "pos"]),
    },
    {
        title: "Branch Distribution System",
        description:
            "Banking platform for branch operations, enabling customer service and teller workflows across multiple locations.",
        technologies: getSkills([
            "React",
            "Next.js",
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
        ]),
        clients: getClients(["isi", "net", "bjbs", "bcas"]),
    },
    {
        title: "SILBTAM",
        description:
            "Laboratory information management system for tap water quality testing and reporting.",
        technologies: getSkills([
            "Laravel",
            "RestAPI",
            "PostgreSQL",
            "Git",
            "Tailwind",
        ]),
        clients: getClients(["edubox"]),
    },
    {
        title: "Jabar Future Leader Scholarship",
        description:
            "Scholarship management platform with content management features and automatic image optimization.",
        technologies: getSkills([
            "Laravel",
            "RestAPI",
            "Tailwind",
            "MySQL",
            "Git",
        ]),
        clients: getClients(["disdik"]),
    },
    {
        title: "Community Telegram and Discord Bot",
        description:
            "Community management bot featuring moderation, anti-spam protection, and broadcast capabilities.",
        technologies: getSkills([
            "Python",
            "RestAPI",
            "PostgreSQL",
            "Git",
        ]),
        clients: getClients(["jda"]),
    },
    {
        title: "E2E Testing Software",
        description:
            "Automated end-to-end testing platform built with Selenium for regression and acceptance testing.",
        technologies: getSkills([
            "Python",
            "Pandas",
            "Selenium",
        ]),
        clients: getClients(["isi"]),
    },
    {
        title: "Pos Giro Cash (PGC) Admin",
        description:
            "Administrative dashboard for monitoring and managing social assistance distribution programs.",
        technologies: getSkills([
            "Laravel",
            "RestAPI",
            "Git",
        ]),
        clients: getClients(["isi", "pos"]),
    },
];

export function Work() {
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll
        ? projects
        : projects.slice(0, 6);

    return (
        <section
            id="work"
            className="container mx-auto px-4 py-24"
        >
            <h2 className="mb-2 text-4xl font-bold">
                Selected Projects
            </h2>

            <p className="mb-10 text-muted-foreground">
                A collection of systems, platforms, and software solutions
                delivered across banking, government, education, and enterprise sectors.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project) => (
                    <Card
                        key={project.title}
                        className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <CardHeader>
                            <CardTitle>
                                {project.title}
                            </CardTitle>

                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div>
                                <p className="mb-3 text-sm text-muted-foreground">
                                    Technologies
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex h-10 w-10 items-center justify-center rounded-md border"
                                            style={{
                                                backgroundColor: skill.color,
                                            }}
                                        >
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="object-contain"
                                                style={{
                                                    width: 24,
                                                    height: 24,
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {project.clients.length > 0 && (
                                <div>
                                    <p className="mb-3 text-sm text-muted-foreground">
                                        Delivered For
                                    </p>

                                    <div className="flex -space-x-2">
                                        {project.clients.map((client) => (
                                            <div
                                                key={client.name}
                                                className="flex h-14 w-14 items-center justify-center rounded-full border bg-background"
                                                style={{
                                                    backgroundColor:
                                                        client.color || undefined,
                                                }}
                                            >
                                                {client.logo ? (
                                                    <img
                                                        src={client.logo}
                                                        alt={client.name}
                                                        className="object-contain"
                                                        style={{
                                                            width: 40,
                                                            height: 24,
                                                        }}
                                                    />
                                                ) : (
                                                    <p className="text-sm font-bold">
                                                        {client.name}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {projects.length > 6 && (
                <div className="mt-10 flex justify-center">
                    <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll
                            ? "Show Less"
                            : `View All ${projects.length} Projects`}
                    </Button>
                </div>
            )}
        </section>
    );
}