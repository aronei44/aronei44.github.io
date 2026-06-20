export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="font-bold">
                    Arwani Maulana
                </div>

                <nav className="hidden gap-6 md:flex">
                    <a href="#work">Work</a>
                    <a href="#skills">Skills</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}