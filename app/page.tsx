
const projects = [
  {
    number: "01",
    name: "Restaurant SaaS",
    type: "Product Management · AI-assisted Development",
    description:
      "Designing an order management experience to improve coordination between restaurant staff and kitchen teams.",
  },
  {
    number: "02",
    name: "Nozhan",
    type: "Marketplace · Growth",
    description:
      "Building a wedding services marketplace focused on helping couples discover suppliers and helping businesses get visibility.",
  },
  {
    number: "03",
    name: "AI Product Experiments",
    type: "AI · Prototyping",
    description:
      "Exploring how AI tools can accelerate product discovery, prototyping, and software development.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#">Mahta Zangene</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          
<a href="#education">Education</a>

          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      
<section className="hero">
  <p className="eyebrow">
    PRODUCT MANAGER · AI PRODUCT BUILDER
  </p>

  <h1>
    From real problems
    <br />
    to <span>products that work.</span>
  </h1>

  <p className="intro">
    Hi, I’m Mahta. I connect product strategy,
    user discovery, and AI-powered prototyping
    to turn real-world problems into practical
    digital products.
  </p>

  <div className="hero-actions">
    <a className="primary-btn" href="#projects">
      Explore my work ↗
    </a>

    <a className="text-link" href="#contact">
      Get in touch
    </a>

    <a
      className="text-link"
      href="/mahta-zangeneh-resume.pdf"
      target="_blank"
      rel="noreferrer"
    >
      Download Resume ↓
    </a>
  </div>

  <div className="hero-footer">
    <span>PRODUCT STRATEGY</span>
    <span>USER DISCOVERY</span>
    <span>AI-POWERED BUILDING</span>
  </div>
</section>


      <section className="about section" id="about">
        
<p className="eyebrow">A LITTLE ABOUT ME</p>
<h2>I think in problems. I build in possibilities.</h2>
<p>
  I’m Mahta — a Product Manager and AI Product Builder
  with a background in software development and
  early-stage ventures.
</p>
<p>
  I connect user insights, business goals, and technical
  execution to figure out what’s worth building and bring
  ideas to life. From product discovery and defining
  priorities to prototyping with AI, I enjoy turning
  ambiguity into products people can actually use.
</p>

      </section>
      

<section className="experience section" id="experience">
  <p className="eyebrow">MY JOURNEY</p>
  <h2>From building software to building products.</h2>
  <p className="section-copy">
    My journey combines product management, technical
    execution, and entrepreneurship — turning customer
    problems into practical product solutions.
  </p>

  <div className="experience-list">
    <article className="experience-item">
      <div className="experience-date">DEC 2025 — JUN 2026</div>
      <div className="experience-content">
        <h3>Fakher Holding</h3>
        <p className="experience-role">
          Product Manager · Discovery & AI Prototyping
        </p>
        <p>
          Validated product opportunities through 40+ user
          interviews and benchmarking 20+ logistics and
          crowdsourcing platforms. Defined requirements and
          user journeys, then built Shahro's MVP using Codex
          and Figma Make.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">OCT 2024 — OCT 2025</div>
      <div className="experience-content">
        <h3>Software Genesis Group</h3>
        <p className="experience-role">
          Product Manager · Go-to-Market
        </p>
        <p>
          Coordinated engineering, marketing, and sales
          around product launches. Contributed to go-to-market
          planning and defined KPIs for acquisition,
          retention, and engagement.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">JUL 2023 — SEP 2024</div>
      <div className="experience-content">
        <h3>MamanPaz</h3>
        <p className="experience-role">
          Product Manager · B2B Transition
        </p>
        <p>
          Led the employee food app redesign and improved
          payment collection through credit limits and a
          debtor-monitoring dashboard. Defined requirements
          for the B2C-to-B2B transition and centralized
          supplier-to-company delivery operations.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">NOV 2022 — AUG 2023</div>
      <div className="experience-content">
        <h3>DigiKala</h3>
        <p className="experience-role">
          Associate Product Manager · E-commerce
        </p>
        <p>
          Improved seller shipping labels, seller-panel
          usability, and seller performance metrics.
          Contributed to a 30% reduction in customer
          complaints, a 5% improvement in seller performance,
          and a 25% improvement in seller-panel interaction
          and conversion metrics.
        </p>
        <div className="experience-highlight">
          Seller experience · Operational efficiency · Product analytics
        </div>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">JUL 2022 — NOV 2022</div>
      <div className="experience-content">
        <h3>Quera</h3>
        <p className="experience-role">
          Project Manager · Backend Education
        </p>
        <p>
          Led the Summer 1401 backend skill-up initiative,
          coordinating planning and collaboration to improve
          project delivery.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">JUL 2021 — JUN 2022</div>
      <div className="experience-content">
        <h3>PergasTeb</h3>
        <p className="experience-role">
          Frontend Web Developer
        </p>
        <p>
          Developed and maintained an administrative panel
          using Vue.js, Nuxt.js, JavaScript, and Tailwind CSS.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">DEC 2019 — MAR 2022</div>
      <div className="experience-content">
        <h3>HivanTech</h3>
        <p className="experience-role">
          Co-founder & Frontend Developer
        </p>
        <p>
          Co-founded a software development company,
          developed web applications, and coordinated
          projects and frontend development workflows.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-date">DEC 2018 — DEC 2019</div>
      <div className="experience-content">
        <h3>MamanPazoon</h3>
        <p className="experience-role">
          Founder & CEO · FoodTech
        </p>
        <p>
          Launched a regional food marketplace serving
          consumers and businesses. Led market research,
          supplier onboarding, product development, and
          business operations.
        </p>
      </div>
    </article>
  </div>
</section>


<section className="education section" id="education">
  <p className="eyebrow">EDUCATION & LEARNING</p>
  <h2>Building knowledge across business, technology, and AI.</h2>

  <div className="education-list">
    <article className="education-item">
      <img
        className="organization-logo"
        src="https://media.licdn.com/dms/image/v2/C560BAQEln-TDcFOkRA/company-logo_100_100/company-logo_100_100/0/1631356455437?e=1794441600&v=beta&t=B4KGxS3lVnNG3W68eCr_0eEAkpuweIuVDwGDJzx52xM"
        alt="Bu-Ali Sina University logo"
      />
      <div className="education-content">
        <h3>Bu-Ali Sina University</h3>
        <p>B.Sc. in Industrial Engineering</p>
        <span>2016 – 2020</span>
      </div>
    </article>

    <article className="education-item">
      <img
        className="organization-logo"
        src="https://media.licdn.com/dms/image/v2/C4E0BAQE-NIX4SUSCOg/company-logo_100_100/company-logo_100_100/0/1631311354545?e=1794441600&v=beta&t=bRezAJcn_k96obr0UOHrE-P7J_6rtseXjAZQm11Tfmo"
        alt="University of Tehran logo"
      />
      <div className="education-content">
        <h3>University of Tehran</h3>
        <p>MBA — Business Administration and Management</p>
        <span>Oct 2021 – Oct 2022</span>
      </div>
    </article>
  </div>
</section>

<section className="certifications section" id="certifications">
  <p className="eyebrow">COURSES & CERTIFICATIONS</p>
  <h2>Continuous learning, practical application.</h2>

  <div className="certifications-list">
    <article className="education-item">
      <img
        className="organization-logo"
        src="https://media.licdn.com/dms/image/v2/C4D0BAQFEfzvK_VQGZg/company-logo_100_100/company-logo_100_100/0/1630494687370/bozhanschool_logo?e=1794441600&v=beta&t=lMN4UISuZSkynPpDal33sb_zlURLucqVMfn7U9j8ogQ"
        alt="Bozhan School logo"
      />
      <div className="education-content">
        <h3>AI Product Manager</h3>
        <p>Bozhan School</p>
        <span>Issued Apr 2025</span>
        <div className="education-tags">
          <span>n8n</span>
          <span>Lovable</span>
        </div>
      </div>
    </article>

    <article className="education-item">
      <img
        className="organization-logo"
        src="https://media.licdn.com/dms/image/v2/D4E0BAQF6BTZPMyonDA/company-logo_100_100/company-logo_100_100/0/1722411871182?e=1794441600&v=beta&t=UPLVm96whhZ3tqkhOJ-DNMjoVQYyTDtPEaqXTa9bj1w"
        alt="DigiNext logo"
      />
      <div className="education-content">
        <h3>Startup Bootcamp</h3>
        <p>DigiNext</p>
        <span>Jan 2022 – Sep 2022</span>
        <div className="education-tags">
          <span>Market Research</span>
          <span>Benchmarking</span>
        </div>
      </div>
    </article>
  </div>
</section>



<section className="skills section" id="skills">
  <p className="eyebrow">WHAT I BRING</p>
  <h2>A mix of product thinking and building.</h2>

  <div className="skills-grid">
    <article className="skill-card">
      <span>01</span>
      <h3>Product Management</h3>
      <p>
        Product strategy, prioritization, roadmapping,
        PRDs, and MVP definition.
      </p>
    </article>

    <article className="skill-card">
      <span>02</span>
      <h3>Discovery & Research</h3>
      <p>
        User interviews, problem discovery,
        competitive analysis, and validation.
      </p>
    </article>

    <article className="skill-card">
      <span>03</span>
      <h3>Data & Business</h3>
      <p>
        KPI definition, funnel analysis,
        business models, and product metrics.
      </p>
    </article>

    <article className="skill-card">
      <span>04</span>
      <h3>AI & Prototyping</h3>
      <p>
        AI-assisted development, rapid prototyping,
        and turning ideas into working products.
      </p>
    </article>
  </div>
</section>


     
<section className="projects section" id="projects">
  <div className="section-heading">
    <div>
      <p className="eyebrow">SELECTED WORK</p>
      <h2>Things I’m building.</h2>
    </div>
    <span className="project-count">04 PROJECTS</span>
  </div>

  <div className="project-list">
    <article className="project-card" key="01">
      <span className="project-number">01</span>

      <div className="project-content">
        <p className="project-type">
          SAAS · PRODUCT DISCOVERY · VIBE CODING
        </p>
        <h3>Restaurant Order Management Platform</h3>
        <p className="project-description">
          A multi-tenant SaaS platform that digitizes restaurant
          order flow from waiter to kitchen. I defined the problem,
          prioritized the MVP, designed role-based workflows, and
          built the product using AI-assisted development.
        </p>
        <p className="project-tools">
          <strong>Tools:</strong> Next.js · TypeScript · Prisma ·
          SQLite · AI-assisted development
        </p>
        <a
          className="project-link"
          href="https://github.com/mahtazangene97/iran-restaurant-platform"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code ↗
        </a>
      </div>

      <span className="project-status">Built</span>
    </article>

    <article className="project-card" key="02">
      <span className="project-number">02</span>

      <div className="project-content">
        <p className="project-type">
          AI · RESUME BUILDER · WORKFLOW AUTOMATION
        </p>
        <h3>Hamyar Resume</h3>
        <p className="project-description">
          A resume-building experience that helps users create
          resumes, receive section-by-section improvement
          suggestions, evaluate resume quality with a score,
          improve ATS readiness, download their resumes, and
          discover relevant job roles based on resume keywords.
        </p>
        <p className="project-tools">
          <strong>Tools:</strong> Figma Make · n8n
        </p>
        <a
          className="project-link"
          href="https://www.figma.com/make/rlB2yVr0lh0QHmVzjqCmQx/Untitled?t=1UJ9HH5IH2t1QU0Y-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore prototype ↗
        </a>
      </div>

      <span className="project-status">Prototype</span>
    </article>

    <article className="project-card" key="03">
      <span className="project-number">03</span>

      <div className="project-content">
        <p className="project-type">
          AI · RESUME BUILDER · RAPID PROTOTYPING
        </p>
        <h3>ResumeYar</h3>
        <p className="project-description">
          A second implementation of the resume-building concept.
          Users can create and improve resumes, review a resume
          score, get ATS-focused suggestions, download their
          resumes, and explore job roles based on resume keywords.
        </p>
        <p className="project-tools">
          <strong>Tools:</strong> Bolt.new
        </p>
        <a
          className="project-link"
          href="https://resumeyar-web-applic-mkzg.bolt.host/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit website ↗
        </a>
      </div>

      <span className="project-status">Live prototype</span>
    </article>

    <article className="project-card" key="04">
      <span className="project-number">04</span>

      <div className="project-content">
        <p className="project-type">
          HEALTH · DIGITAL PRODUCT
        </p>
        <h3>Diet & Nutrition Platform</h3>
        <p className="project-description">
          A digital product focused on diet and nutrition.
          The project is currently in preparation, and more
          details will be added as development progresses.
        </p>
        <p className="project-tools">
          <strong>Status:</strong> In progress
        </p>
        <span className="project-link project-link-disabled">
          Coming soon
        </span>
      </div>

      <span className="project-status">In progress</span>
    </article>
  </div>
</section>


      <section className="contact section" id="contact">
        <p className="eyebrow">HAVE A GOOD CHALLENGE?</p>
        <h2>Let’s make something meaningful.</h2>
        <p>
          Open to conversations about product opportunities,
          collaborations, and AI-powered products.
        </p>
        <a
          className="primary-btn"
          href="https://www.linkedin.com/in/mahta-zangene/"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn ↗
        </a>
      </section>

      <footer className="footer">
        <span>MAHTA ZANGENEH © 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
