import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "./useActiveSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 👇 Use label + id pairs
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "how-It-Works", label: "How it Works" },
    { id: "pricing", label: "Pricing" },
    { id: "about-Us", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const activeId = useActiveSection(navLinks.map(link => link.id));

  return (
    <header className="nav">
      {/* Brand */}
      <div className="nav__brand">
        <img src="/nexLeadlogo.png" alt="NexLeads Logo" width="120" />
      </div>

      {/* Links - Desktop */}
      <nav className="nav__links desktop">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Actions - Desktop */}
      <div className="nav__actions desktop">
        <button className="btn btn-outline">Login</button>
      </div>

      {/* Burger Icon - Mobile */}
      <button className="burger mobile" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="nav__mobile mobile">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className={activeId === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
          <button className="btn btn-outline">Login</button>
        </nav>
      )}
    </header>
  );
}
