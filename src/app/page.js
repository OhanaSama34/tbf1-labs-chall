import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        color: "#333",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* HEADER / NAVIGATION */}
      <header
        style={{
          background: "#fff",
          padding: "1rem 2rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Image
            src="/next.svg"
            alt="TBF1 Labs Logo"
            width={120}
            height={30}
            priority
          />
          <nav>
            <a
              href="#home"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Home
            </a>
            <a
              href="#services"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Services
            </a>
            <a
              href="#about"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Contact
            </a>
            <a
              href="/login"
              style={{
                margin: "0 1rem",
                padding: "0.5rem 1rem",
                background: "#0070f3",
                borderRadius: "0.5rem",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          background: "#f4f6f8",
        }}
      >
        <main
          style={{
            background: "#fff",
            padding: "3rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            width: "100%",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          {/* LOGO */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Image
              src="/next.svg"
              alt="TBF1 Labs Logo"
              width={120}
              height={30}
              priority
            />
          </div>

          {/* TITLE */}
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Welcome to <span style={{ color: "#0070f3" }}>TBF1 Labs</span>
          </h1>

          {/* SUBTITLE */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            We provide modern solutions for your CTF Problem Solver and Challenge Author needs. 
            High-quality, secure, and scalable technology for your business.
          </p>

          {/* CTA BUTTONS */}
          <div style={{ marginTop: "2rem" }}>
            <a
              href="/login"
              style={{
                padding: "0.9rem 1.8rem",
                background: "#0070f3",
                borderRadius: "0.5rem",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                marginRight: "1rem",
                display: "inline-block",
              }}
            >
              Get Started
            </a>

            <a
              href="#about"
              style={{
                padding: "0.9rem 1.8rem",
                background: "#eaeaea",
                borderRadius: "0.5rem",
                color: "#333",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Learn More
            </a>
          </div>
        </main>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        style={{
          padding: "4rem 2rem",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                padding: "2rem",
                background: "#f4f6f8",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                CTF Problem Solving
              </h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Expert assistance in solving complex Capture The Flag challenges with cutting-edge tools and strategies.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "#f4f6f8",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                Challenge Authoring
              </h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create high-quality, secure CTF challenges tailored to your needs, ensuring scalability and engagement.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "#f4f6f8",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                Custom Solutions
              </h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Bespoke technology solutions for cybersecurity training, events, and business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          background: "#f4f6f8",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            About TBF1 Labs
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            TBF1 Labs is a leading provider of cybersecurity solutions, specializing in Capture The Flag (CTF) challenges and problem-solving tools. 
            Our team of experts delivers secure, scalable, and innovative technology to empower businesses and individuals in the cybersecurity space.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#777",
            }}
          >
            Founded by Challenge Author NafyCat69, we are committed to advancing the field of cybersecurity through education and practical applications.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              marginBottom: "2rem",
            }}
          >
            Ready to get started? Reach out to us for inquiries, partnerships, or support.
          </p>
          <a
            href="mailto:contact@tbf1labs.com"
            style={{
              padding: "0.9rem 1.8rem",
              background: "#0070f3",
              borderRadius: "0.5rem",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Email Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#333",
          color: "#fff",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "1rem" }}>
          © {new Date().getFullYear()} TBF1 Labs. All rights reserved.
        </p>
        <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
          Challenge Author: NafyCat69
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a
            href="#"
            style={{
              margin: "0 1rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              margin: "0 1rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
