---
<!-- title: corproart -->
layout: collection
permalink: /portfolio/
collection: portfolio
entries_layout: grid
classes: wide
author_profile: true
<!-- # show_excerpts: # true (default), false
# sort_by: # date (default), title or any metadata key added to the collection's documents -->
sort_order: reverse # forward (default), reverse
---

<style>
  /* --- Font Import --- */
  @font-face {
    font-family: 'Tuner';
    /* Adjust paths if your font files are located elsewhere or have different names */
    src: url('/assets/fonts/Tuner.woff2') format('woff2'), /* Modern Browsers */
         url('/assets/fonts/Tuner.woff') format('woff');   /* Older Browsers */
    font-weight: normal;
    font-style: normal;
  }

  /* --- Apply Tuner Font to the Resume Content --- */
  .resume-custom-font-area {
    font-family: 'Tuner', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* Add a fallback font stack */
    line-height: 1.5; /* Adjust for readability with Tuner */
  }

  /* --- Layout Styling --- */
  .resume-header {
    margin-bottom: 20px;
  }
  .resume-header .name-line {
    font-size: 1.8em; /* Adjust as needed */
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
  }
  .resume-header .name-line > * {
    margin-right: 0.5em; /* Spacing between elements */
  }
  .resume-header .sign-name-svg {
    height: 1.2em; /* Adjust size of SVG */
    vertical-align: middle; /* Align with text */
    display: inline-block;
  }
  .resume-header .pronunciation {
    font-size: 0.8em;
    color: #555; /* Lighter text for pronunciation */
    display: block; /* On its own line */
    margin-bottom: 5px;
  }
  .resume-header .title {
    font-size: 1.3em;
    font-weight: bold;
    margin-top: 0.2em;
  }

  .resume-intro {
    margin-bottom: 30px;
  }

  .resume-grid {
    display: grid;
    grid-template-columns: 2fr 1fr; /* Left column wider than right */
    gap: 30px; /* Space between columns */
  }

  /* Responsive: Stack columns on smaller screens */
  @media (max-width: 768px) {
    .resume-grid {
      grid-template-columns: 1fr; /* Single column */
    }
  }

  .resume-section-title {
    font-weight: bold;
    font-size: 1.2em;
    margin-top: 20px;
    margin-bottom: 10px;
    /* Optional: if you want a line similar to the original image */
    /* border-bottom: 2px solid #ccc; */
    /* padding-bottom: 5px; */
    /* display: inline-block; */
  }

  .resume-subsection-title {
    font-weight: bold;
    font-size: 1.1em;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .resume-list {
    list-style-type: none;
    padding-left: 0;
  }
  .resume-list li {
    margin-bottom: 4px;
  }

  .work-item, .academic-item {
    margin-bottom: 15px;
  }
  .work-item p, .academic-item p {
    margin: 2px 0;
    font-size: 0.95em;
  }
  .work-item .details {
    font-style: italic;
    font-size: 0.9em;
    padding-left: 15px; /* Indent details */
    color: #333; /* Slightly darker for emphasis */
  }

  .contact-info p {
    margin: 3px 0;
  }

  .qr-code-container {
    margin-top: 15px;
    /* text-align: right; /* Or center, depending on preference */
  }
  .qr-code-container img {
    max-width: 100px; /* Adjust size */
    display: block; /* Or inline-block if you want text next to it differently */
    margin-bottom: 5px;
  }
  .qr-code-container .peek-text {
    font-size: 0.8em;
    display: block; /* Or inline */
    text-align: center; /* If QR is centered */
  }
</style>

<div class="resume-custom-font-area">

  <div class="resume-header">
    <div class="pronunciation">/ljaʊ dz tsən/</div>
    <div class="name-line">
      <span>RYAN LEO</span>
      <span>|</span>
      <span>廖子呈</span>
      <span>|</span>
      <img src="signname.svg" alt="Ryan Leo Sign Name" class="sign-name-svg">
      <span>|</span>
      <span>"OVXX"</span>
    </div>
    <div class="title">Product & Sound Designer.</div>
  </div>

  <p class="resume-intro">
    As a multidisciplinary art academic & maker, I'm always eager to learn something new –
    my ability to draw inspiration from anywhere fuels my passion & ambition, while my flexible work
    style keeps me adaptable & reliable in a team. So, here's to exploring new horizons!
  </p>

  <div class="resume-grid">
    <!-- Left Column -->
    <div class="left-column">
      <h3 class="resume-section-title">力 SKILLS</h3>
      <div>
        <h4 class="resume-subsection-title">Digital Fabrication</h4>
        <ul class="resume-list">
          <li>Computer-Aided Design (CAD)</li>
          <li>3D Prototyping & Printing</li>
          <li>Product Design</li>
          <li>Programming</li>
          <li>PCB Design</li>
          <li>Design for Manufacture</li>
        </ul>
      </div>
      <div>
        <h4 class="resume-subsection-title">Multimedia Art</h4>
        <ul class="resume-list">
          <li>VR, Game & Web Development</li>
          <li>Interaction Design & UIUX</li>
          <li>3D Modelling & Motion</li>
          <li>Graphics & Typography</li>
          <li>Video Production & Editing</li>
          <li>Projection Mapping & VDJing</li>
          <li>Creative Strategy Marketing</li>
          <li>Art Direction</li>
        </ul>
      </div>
      <div>
        <h4 class="resume-subsection-title">Sound Design</h4>
        <ul class="resume-list">
          <li>Music Production & Composition</li>
          <li>Mixing & Mastering</li>
          <li>DJing, Curation & Journalism</li>
        </ul>
      </div>
      <h3 class="resume-section-title">聿 ACADEMICS</h3>
      <div class="academic-item">
        <h4 class="resume-subsection-title">Product Design Technology</h4>
        <p>BSc(Hons) (2023+)</p>
        <p>University of the West of England</p>
      </div>
      <div class="academic-item">
        <h4 class="resume-subsection-title">Digital Media Design</h4>
        <p>Diploma (2019 - 23)</p>
        <p>The One Academy</p>
      </div>
      <div class="academic-item">
        <h4 class="resume-subsection-title">Music Technology</h4>
        <p>Diploma (2018 - 19)</p>
        <p>Limkokwing University</p>
      </div>
      <h3 class="resume-section-title">I WORK EXPERIENCE</h3>
      <div class="work-item">
        <h4 class="resume-subsection-title">Front-of-House Restaurant Coordinator</h4>
        <p>Xing Long 興隆 (2024+)</p>
      </div>
      <div class="work-item">
        <h4 class="resume-subsection-title">Gallery Assistant & Projection Mapper</h4>
        <p>Digital Art Gallery by Filamen (2023)</p>
      </div>
      <div class="work-item">
        <h4 class="resume-subsection-title">Music Journalist</h4>
        <p>Shawn Zod (2022 - 23)</p>
      </div>
      <div class="work-item">
        <h4 class="resume-subsection-title">Music Producer & Composer</h4>
        <p>ContraPoints (2019 - 21)</p>
        <p class="details">on films “Envy”, “Opulence”, “Transtrenders” & “Men”</p>
      </div>
    </div>
    <!-- Right Column -->
    <div class="right-column">
      <h3 class="resume-section-title">TOOLKIT 鼎</h3>
      <ul class="resume-list">
        <li>Arduino</li>
        <li>Rhinoceros 3D</li>
        <li>Solidworks</li>
        <li>Fusion 360</li>
        <li>Luxion Keyshot</li>
        <li>UltiMaker Cura</li>
        <li>Inventables Easel</li>
        <li>Unity</li>
        <li>Blender</li>
        <li>Cinema 4D</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Adobe After Effects</li>
        <li>Adobe Premiere Pro</li>
        <li>Adobe XD & InDesign</li>
        <li>Touchdesigner</li>
        <li>Resolume Arena</li>
        <li>FL Studio</li>
        <li>Microsoft 365</li>
        <li>Linux</li>
      </ul>
      <h3 class="resume-section-title">LANGUAGES 言</h3>
      <ul class="resume-list">
        <li>English</li>
        <li>Mandarin 華語</li>
        <li>British Sign</li>
        <li>Malay ساب</li>
        <li>OpenSCAD</li>
        <li>HTML/CSS</li>
        <li>C++</li>
        <li>C#</li>
      </ul>
      <h3 class="resume-section-title">CONTACT & PORTFOLIO 圖</h3>
      <div class="contact-info">
        <p>ryovxx@gmail.com</p>
        <p><a href="http://be.net/ryanmeow" target="_blank" rel="noopener noreferrer">be.net/ryanmeow</a></p>
        <p>+44 7466 132733</p>
      </div>
      <div class="qr-code-container">
        <!-- 
          Generate your QR code pointing to your portfolio (e.g., be.net/ryanmeow)
          and replace 'path/to/your/qr-code.png' with the actual path to the image.
          You can upload the QR code image to your GitHub repo, e.g., in 'assets/images/'.
        -->
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://be.net/ryanmeow" alt="QR Code for Portfolio">
        <span class="peek-text">peek</span>
      </div>
    </div>
  </div>
</div>

This section is still in the works, it might make more sense to go to my [Behance](https://www.behance.net/ryanmeow)

<iframe width="560" height="315" src="https://www.youtube.com/embed/g9JDMQ1mcVI?si=RQnQ6qZswMxTkfUq&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

