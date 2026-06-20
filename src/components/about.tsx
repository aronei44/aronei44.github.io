export function About() {
    return (
        <section
            id="about"
            className="container mx-auto max-w-5xl px-4 py-24"
        >
            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
                <div>
                    <h2 className="mb-8 text-4xl font-bold">
                        About Me
                    </h2>

                    <div className="space-y-6 text-lg leading-8 text-muted-foreground">
                        <p>
                            I'm a Software Engineer from Indonesia with a strong
                            focus on backend engineering, artificial intelligence,
                            cloud infrastructure, and system automation.
                        </p>

                        <p>
                            Over the years, I have built and maintained
                            enterprise-grade systems across banking,
                            government, education, and digital platforms.
                            My experience spans the entire software lifecycle,
                            from architecture design and API development to
                            deployment, monitoring, and production support.
                        </p>

                        <p>
                            I primarily work with Rust, Python, Laravel,
                            React, and PostgreSQL, while also designing
                            scalable infrastructure using Docker, Linux,
                            Nginx, Redis, and observability tools.
                        </p>

                        <p>
                            Beyond traditional software development,
                            I enjoy exploring machine learning, AI agents,
                            retrieval-augmented generation (RAG), and
                            intelligent automation systems that solve
                            real-world business problems.
                        </p>

                        <p>
                            My goal is simple: build reliable systems that
                            are fast, maintainable, scalable, and provide
                            measurable value to users and organizations.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-xl border bg-card p-6">
                        <p className="text-3xl font-bold">
                            4+
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Years of Professional Experience
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <p className="text-3xl font-bold">
                            12+
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Production Systems Delivered
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <p className="text-3xl font-bold">
                            Banking
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Enterprise & Financial Technology
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <p className="text-3xl font-bold">
                            AI
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Machine Learning & Automation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}