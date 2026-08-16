// Edit this file to change the English wording used across the website.
// Keep the property names unchanged so the pages can find each line of text.
export const siteTextEn = {
  brandName: "Secret Digging Club",
  description: "A doujin club/Discord community for discussing tkmiz's works, ZUN's Music Collections, and Touhou Project.",
  ui: {
    skipToContent: "Skip to content",
    homeLabel: "Secret Digging Club home",
    primaryNavigation: "Primary navigation",
    footerNavigation: "Footer navigation",
    languageNavigation: "Language",
  },
  gateway: {
    metadataDescription: "Choose a language for Secret Digging Club.",
    message: "Choose a language. Your browser preference will be used automatically.",
    navigationLabel: "Choose a language",
  },
  notFound: { message: "This page does not exist." },
  nav: { writings: "Writings", people: "People", about: "About", discord: "Discord" },
  home: {
    read: "Read our writing", recent: "Recent writing", viewAll: "View all", noWritings: "No writing has been published yet.", club: "The club",
    clubText: "We are a small doujin circle and Discord community. We publish essays, working papers, analyses, and Opinion/HC posts about our interests.",
    privacy: "The site is updated manually. Our Discord server and website are maintained separately.",
    about: "About the club", people: "People", allProfiles: "All profiles", noPeople: "No public profiles have been added yet.", join: "Join our Discord",
    joinText: "Come talk with us about tkmiz, ZUN's Music Collections, and related interests.", serverInfo: "Server information",
  },
  writings: {
    title: "Writings", intro: "Essays, analyses, working papers, and Opinion/HC posts.", search: "Search writings",
    placeholder: "Search by title, author, type, or tag…", noResults: "No writings match this search.", empty: "No writing has been published yet.",
  },
  people: {
    title: "People", intro: "Public profiles are optional and manually maintained. Discord membership does not imply a listing here.", empty: "No public profiles have been added yet.",
    interests: "Interests", elsewhere: "Elsewhere", noLinks: "No links listed.", policy: "Profile policy", policyText: "Pseudonymous and manually maintained.",
    publications: "Publications", noPublications: "No publications yet.", allPeople: "All people",
  },
  about: {
    title: "About", intro: "Secret Digging Club is an independent doujin circle/Discord community.",
    p1: "We like subjects that reward one more search, comparison, or footnote. We publish essays, analyses, working papers, reviews, and Opinion/HC posts.",
    serverTitle: "The website and the server", server1: "This website is our public, indexed archive. Discord is where conversation happens. Membership does not automatically create a public profile, and server messages are never copied here automatically.",
    server2: "A quotation from Discord is only published when it is selected manually and approved by the quoted participant.",
    editorialTitle: "Editorial approach", editorial: "All material is reviewed and posted manually by the site owner. Submissions, collaborations, and public profiles are accepted at the owner’s discretion.",
    copyrightTitle: "Copyright", copyright: "Copyright remains with each author. No open-content license is granted. All rights are reserved.",
  },
  discord: {
    title: "Discord", intro: "A space for discussion, shared references, and works in progress.", widget: "Discord server",
    widgetHelp: "The server widget appears here when Discord allows it to load.", expect: "What to expect",
    items: [
      "Conversation about works, translations, archives, and related interests.",
      "An environment for both casual conversation and detailed analysis.",
      "Private-by-default discussions. Nothing is automatically copied onto this website.",
      "Public profiles and published contributions remain optional and pseudonymous.",
    ],
    join: "Join the server", forthcoming: "Invite link forthcoming",
  },
  article: { writtenBy: "Written by", published: "Published", format: "Format", length: "Length", minutes: "min read", tags: "Tags", rights: "All rights reserved by the author." },
  kinds: { "essay": "Essay", "working-paper": "Working paper", "opinion-hc": "Opinion/HC" },
  footer: "Secret Digging Club and the respective authors. All rights reserved.",
} as const;
