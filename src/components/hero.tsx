import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="container mx-auto px-4 py-32">
            <div className="max-w-5xl">
                <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm text-muted-foreground">
                    Software Engineer • AI Engineer • Fullstack Specialist
                </div>

                <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl">
                    Building Reliable
                    <br />
                    Software for
                    <br />
                    Businesses,
                    <span className="text-primary">
                        {" "}Automation,
                    </span>
                    <br />
                    and AI.
                </h1>

                <p className="mb-10 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                    I'm Arwani Maulana, a Software Engineer specializing in
                    fullstack systems, artificial intelligence, cloud
                    infrastructure, and enterprise applications.
                    I build scalable APIs, good UX interfaces, banking platforms,
                    automation tools, and AI-powered solutions that
                    solve real business problems.
                </p>

                <div className="mb-14 flex flex-wrap gap-4">
                    <Button size="lg">
                        <a href="#work" className="flex items-center">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                    >
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=arwanimaulana89@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </a>
                    </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-3xl font-bold">
                            4+
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Years Experience
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
                            Banking
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Enterprise Projects
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-3xl font-bold">
                            AI
                        </p>

                        <p className="text-sm text-muted-foreground">
                            ML & Automation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}