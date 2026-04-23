import projImg1 from "../assets/img/comingsoon.png";
import projImg2 from "../assets/img/comingsoon.png";
import projImg3 from "../assets/img/comingsoon.png";
import projImg4 from "../assets/img/comingsoon.png";

const ProjectsData = [
  {
    id: 1,
    title: "B2B Product Bundle Plugin",
    description:
      "Built a full-featured bundle management plugin from scratch for a live B2B nopCommerce store. Includes a custom admin UI for creating and managing bundles, cart rendering with per-item pricing breakdown, a discount algorithm supporting both percentage and fixed-amount rules, and cascading updates so editing a bundle auto-refreshes all linked cart line items.",
    imgUrl: projImg1,
    path: "b2b-product-bundle-plugin",
    demo: "#",
    code: "#",
    technologies: ["C#", ".NET", "nopCommerce", "Razor Views", "jQuery", "SQL"],
  },
  {
    id: 2,
    title: "B2B Store Custom Plugin Suite",
    description:
      "Developed multiple plugins to support complex B2B purchasing workflows across three live production stores. Features include tier pricing with category-level quantity inputs, a Purchase Order plugin enforcing required PO number and ship date at checkout, sales rep access control to restrict store visibility and pricing by rep assignment, and a restore roll feature allowing customers to reorder from order history.",
    imgUrl: projImg2,
    path: "b2b-store-plugin-suite",
    demo: "#",
    code: "#",
    technologies: ["C#", ".NET", "nopCommerce", "JavaScript", "SQL"],
  },
  {
    id: 3,
    title: "ERP & nopCommerce Data Sync",
    description:
      "Researched and implemented automated data synchronisation between Microsoft Dynamics GP and nopCommerce, eliminating manual data entry between the two systems. Python scripts handle product, pricing, and order sync with incremental updates to avoid full re-sync overhead on every run.",
    imgUrl: projImg3,
    path: "erp-nopcommerce-sync",
    demo: "#",
    code: "#",
    technologies: ["Python", "MS Dynamics GP", "nopCommerce API", "SQL"],
  },
  {
    id: 4,
    title: "Corporate Website Revamp",
    description:
      "Rebuilt an outdated corporate website from the ground up using WordPress and Elementor (free tier only). The original had gone years without updates as nobody dared touch it. Added custom JavaScript for interactive elements beyond Elementor's native support, and successfully deployed to cPanel with zero downtime. Modernised design with improved mobile responsiveness.",
    imgUrl: projImg4,
    path: "corporate-website-revamp",
    demo: "#",
    code: "#",
    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "HTML",
      "CSS",
      "cPanel",
    ],
  },
];

export default ProjectsData;
