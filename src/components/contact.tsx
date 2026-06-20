import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section
            id="contact"
            className="border-t"
        >
            <div className="container mx-auto max-w-4xl px-4 py-24 text-center">
                <h2 className="mb-6 text-5xl font-bold tracking-tight">
                    Have an Idea?
                    <br />
                    Let's Turn It Into Software.
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-muted-foreground">
                    Whether you need a scalable backend, an AI-powered
                    application, workflow automation, or a complete
                    production-ready platform, I can help design,
                    build, and deploy it.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg">
                        
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=arwanimaulana89@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            Start a Conversation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                    >
                        <a href="#work">
                            View My Projects
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}