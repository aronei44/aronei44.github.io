import { getSkills } from "../lib/skills";

const skillGroups = [
    {
        title: "Backend & System Engineering",
        skills: getSkills([
            "Rust",
            "Axum",
            "Tokio",
            "Python",
            "FastAPI",
            "Laravel",
            "Keycloak",
        ]),
    },

    {
        title: "Machine Learning & AI",
        skills: getSkills([
            "PyTorch",
            "Tensorflow",
            "Keras",
            "Numpy",
            "Pandas",
            "SkLearn",
            "Matplotlib",
            "OpenCV",
            "Media Pipe",
        ]),
    },

    {
        title: "Frontend Engineering",
        skills: getSkills([
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "Material UI",
        ]),
    },

    {
        title: "Data & Storage",
        skills: getSkills([
            "PostgreSQL",
            "MySQL",
            "Redis",
            "SQLite",
            "S3",
            "Minio",
        ]),
    },

    {
        title: "Infrastructure & DevOps",
        skills: getSkills([
            "Ubuntu",
            "Docker",
            "Nginx",
            "Git",
            "Grafana",
            "Cloudflare",
            "Gitlab CI",
            "Open Telemetry",
            "Selenium",
        ]),
    },

    {
        title: "API & Communication",
        skills: getSkills([
            "RestAPI",
            "GRPC",
            "WebSocket",
            "GraphQL",
            "Redis Pub Sub",
        ]),
    },
];

export function Capabilities() {
    const totalSkills = skillGroups.reduce(
        (acc, group) => acc + group.skills.length,
        0
    );

    return (
        <section
            id="skills"
            className="container mx-auto px-4 py-24"
        >
            <div className="mb-16">
                <h2 className="text-4xl font-bold">
                    Technical Expertise
                </h2>

                <p className="mt-3 max-w-3xl text-muted-foreground">
                    Specialized in backend engineering, AI solutions,
                    distributed systems, and cloud infrastructure.
                    From system architecture and API design to
                    deployment and production monitoring.
                </p>
            </div>

            {/* Summary */}
            <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-card p-5">
                    <p className="text-3xl font-bold">
                        4+
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Years of Experience
                    </p>
                </div>

                <div className="rounded-xl border bg-card p-5">
                    <p className="text-3xl font-bold">
                        12+
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Production Systems
                    </p>
                </div>

                <div className="rounded-xl border bg-card p-5">
                    <p className="text-3xl font-bold">
                        {totalSkills}+
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Technologies
                    </p>
                </div>

                <div className="rounded-xl border bg-card p-5">
                    <p className="text-3xl font-bold">
                        Banking
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Enterprise Experience
                    </p>
                </div>
            </div>

            <div className="space-y-14">
                {skillGroups.map((group) => (
                    <div key={group.title}>
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-semibold">
                                {group.title}
                            </h3>

                            <span className="text-sm text-muted-foreground">
                                {group.skills.length} technologies
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                            {group.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="
                                        group
                                        flex
                                        h-28
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-xl
                                        border
                                        bg-card
                                        p-3
                                        transition-all
                                        duration-200
                                        hover:-translate-y-1
                                        hover:border-primary/40
                                        hover:shadow-lg
                                    "
                                    style={{
                                        backgroundColor: skill.color,
                                    }}
                                >
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="object-contain"
                                        style={{
                                            height: 42,
                                            width: "auto",
                                        }}
                                    />

                                    <span
                                        className="
                                            text-center
                                            text-xs
                                            font-medium
                                            leading-tight
                                        "
                                        style={{
                                            color: skill.textColor,
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}