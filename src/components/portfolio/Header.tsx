export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80 animate-slide-in-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold gradient-text cursor-pointer hover-bounce"
          >
            ADITYA
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-primary transition-colors font-medium hover-slide-right"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-primary transition-colors font-medium hover-slide-right"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-primary transition-colors font-medium hover-slide-right"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
