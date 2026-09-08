# Sarthak Atlasia - Personal Portfolio

Personal portfolio website for **Sarthak Atlasia**, a software developer focused on backend systems, infrastructure automation, REST APIs, and reliable production engineering.

The live site is available at [sarthak2443.github.io/Personal_Portfolio](https://sarthak2443.github.io/Personal_Portfolio/).

## Overview

This portfolio presents Sarthak's:

- Professional experience at Netweb Technologies India Ltd. and Amdocs Development Center India LLP
- Backend and infrastructure-focused engineering work
- Technical skills, certifications, and education
- Featured projects and live demos
- Contact information and an accessible contact form

The design uses an engineering-console aesthetic with responsive layouts, smooth scrolling, scroll-triggered reveals, a taskbar-style auto-hiding header, and a reduced-motion fallback.

## Technical Focus

- **Languages:** Go, Python, JavaScript, TypeScript, C++, HTML, CSS
- **Frameworks and libraries:** React, Node.js, Express, Django, Flask, FastAPI, Echo
- **APIs and technologies:** REST, GraphQL, gRPC, PostgreSQL, Kafka
- **Infrastructure:** Linux storage systems, disks, partitions, LVM, filesystems, mounts, server validation, and automation
- **Tools:** Git, Docker, Figma, VS Code, JIRA

## Featured Projects

- **TaskVault RESTful Task Manager API** - A Flask and PostgreSQL backend with JWT authentication, CRUD operations, and modular REST API architecture.
- **Dynamic Portfolio Dashboard** - A responsive financial dashboard with portfolio tracking, sector analysis, performance metrics, and interactive visualizations.
- **Personal Portfolio** - This responsive portfolio website with project sections, contact integration, animations, and mobile navigation.
- **Weather App** - A responsive JavaScript weather application powered by the OpenWeatherMap API.

## Built With

- Semantic HTML
- CSS, Tailwind CSS utilities, and custom responsive styles
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts
- Formspree for contact-form delivery

The project is intentionally lightweight and does not require a frontend framework or package manager.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/sarthak2443/Personal_Portfolio.git
cd Personal_Portfolio
```

Because this is a static website, serve the project with any local HTTP server. For example, with Python:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

Opening `index.html` directly also works for most pages, but a local server is recommended so routing, assets, and form behavior are tested in an environment closer to deployment.

## Project Structure

```text
.
├── index.html                 # Main portfolio page
├── contact.html               # Standalone contact page
├── intro.html                 # Skills and introduction page
├── services.html              # About and experience page
├── 404.html                   # Custom not-found page
├── styles.css                 # Shared styles for legacy pages and 404
├── script.js                  # Shared legacy-page interactions
├── favicon.svg                # Portfolio favicon
├── images/                    # Local image assets
└── Sarthak_Resume__Dec_.pdf   # Downloadable resume
```

## Accessibility and Responsive Features

- Responsive layouts for desktop, tablet, and mobile viewports
- Mobile navigation menu with keyboard and Escape-key support
- Clickable email and phone links
- Accessible labels, focus states, and semantic controls
- Custom 404 page with a clear route back to the homepage
- User-facing contact-form success and error messages
- Horizontal-overflow protections and mobile-friendly project cards
- `prefers-reduced-motion` support for visitors who disable animations

## Contact

- [LinkedIn](https://linkedin.com/in/sarthak-atlasia)
- [GitHub](https://github.com/sarthak2443)
- [X](https://x.com/Sarthakatlasia)
- [Email](mailto:sarthak.atlasia@gmail.com)
- [Phone](tel:+917898448482)

## License

No `LICENSE` file is currently included in the repository.
