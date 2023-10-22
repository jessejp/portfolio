---
  layout: ../../layouts/BlogPostLayout.astro
  slug: progress-journal
  title: Progress Journal
  projectLink: http://progress-journal.vercel.app/
  thumbnail: /assets/thumbnails/progress-journal-v3.webp
  thumbnailAnimated: "/assets/thumbnails/progress-journal-video.webm"
  altText: "smartphone with progress journal web app open"
  gitLink: https://github.com/jessejp/progress-journal
  techStack: ["React", "Next.js", "TypeScript", "Prisma", "trpc", "zod", "TailwindCSS", "React Hook Form", "Recharts", "Figma"]
  description: "A full-stack training progress application built on the T3-stack."
  highlightEnabled: true
  hightlightOrder: 1
  hightlightAltStyle: false
---

I made the <a class="text-brandMain" href="https://www.figma.com/file/PVcrJV05Z5n0GSwusOl4jN/Progress-Journal---%40shadcn%2Fui?type=design&node-id=103-985&mode=design" target="_blank">Figma layout</a> for this project using the @shadcn/ui design system. The components I built myself instead of using the ui library.

The purpose of the app is to have a general design for the data so that it could be used in multiple contexts or hobbies.

I was excited to try making a web application using the <a class="text-brandMain" href="https://create.t3.gg/" target="_blank">T3-stack</a>, a full-stack, typesafe Next.js developement environment. The development experience was nice, felt quite fast and bug-free to ship features. 🙂

<h4 class="text-3xl">Work-in-progress, currently supported features</h4>
<ul>
<li>- Discord authentication</li>
<li>- Create subjects containing fields and inputs</li>
<li>- Create entries for the subject</li>
<li>- View previous entries</li>
<li>- View progress in a chart (only for weight/rep/set fields)</li>
</ul>
