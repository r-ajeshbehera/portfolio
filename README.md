# Rajesh Behera Digital Studio

Personal brand website built with Next.js 15 and React.

## Run
`npm install`, copy `.env.example` to `.env.local`, then `npm run dev`.

## Update content
- Services, availability, skills, products, links, YouTube videos: `data/site.js`
- Projects and their labels: `data/showcase.js`
- Blog posts: `data/blogs.jsx`

## Contact form
Run `supabase/contact_messages.sql` once in Supabase, and set the Supabase variables in Vercel. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` to receive each enquiry by email. Without either, the form asks visitors to email you directly.
