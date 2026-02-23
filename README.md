<a name="readme-top"></a>

# Taskify - Collaborate, manage projects and reach new productivity peaks.

![Taskify - Collaborate, manage projects and reach new productivity peaks.](/.github/images/img_main.png "Taskify - Collaborate, manage projects and reach new productivity peaks.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/trello-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/trello-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/trello-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/trello-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/trello-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/trello-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/trello-clone/commits "Github commits")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://app-taskify.vercel.app/ "Vercel status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/trello-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/trello-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/trello-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/trello-clone/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
trello-clone/
  |- actions/
    |-- copy-card/
    |-- copy-list/
    |-- create-board/
    |-- create-card/
    |-- create-list/
    |-- delete-board/
    |-- delete-card/
    |-- delete-list/
    |-- stripe-redirect/
    |-- update-board/
    |-- update-card/
    |-- update-card-order/
    |-- update-list/
    |-- update-list-order/
  |- app/
    |-- (marketing)/
    |-- (platform)/
    |-- api/
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- form/
    |-- modals/
    |-- providers/
    |-- ui/
    |-- activity-item.tsx
    |-- hint.tsx
    |-- logo.tsx
  |- config/
    |-- site.ts
  |- constants/
    |-- boards.ts
    |-- images.ts
  |- hooks/
    |-- use-action.ts
    |-- use-card-modal.ts
    |-- use-mobile-sidebar.ts
    |-- use-pro-modal.ts
  |- lib/
    |-- create-audit-log.ts
    |-- create-safe-action.ts
    |-- db.ts
    |-- fetcher.ts
    |-- generate-log-messages.ts
    |-- org-limit.ts
    |-- stripe.ts
    |-- subscription.ts
    |-- unsplash.ts
    |-- utils.ts
  |- prisma/
    |-- schema.prisma
  |- public/
  |- .env.example
  |- .env/.env.local
  |- .eslintrc.json
  |- .gitignore
  |- bun.lock
  |- components.json
  |- middleware.ts
  |- next.config.js
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
  |- types.ts
  |- vercel.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root directory.
4. Contents of `.env`:

```bash
# .env


# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect url(s)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# mysql db url
DATABASE_URL=<your-db-url>

# unsplash api key
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# stripe api & webhook key
STRIPE_API_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# app base url
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. **Clerk Keys**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are provided by Clerk. You need to sign up for an account on Clerk (https://www.clerk.dev/), log in, and access these keys in your account settings.

![Copy Clerk Secret and Publishable Key](/.github/images/step_clerk.png "Copy Clerk Secret and Publishable Key")

6. **Stripe Secret Key**:
   - `STRIPE_API_KEY` is provided by Stripe in order to setup online payments. You need to sign up for an account on Stripe (https://stripe.com/), log in, and access these keys in your account dashboard.

![Copy Stripe Secret Key](/.github/images/step_stripe.png "Copy Stripe Secret Key")

7. **Stripe Webhook Secret**:
   - `STRIPE_WEBHOOK_SECRET` is required for handling Stripe webhooks securely. Follow these steps to obtain the webhook secret:
     - Sign in to your Stripe account (https://dashboard.stripe.com/).
     - In the Dashboard, go to "Developers" > "Webhooks".
     - Click the "Add endpoint" button.
     - Set up the endpoint details and select `checkout.session.completed` and `invoice.payment_succeeded` event.
     - After saving, you'll see the webhook signing secret. Copy this value to use as `STRIPE_WEBHOOK_SECRET`.

8. **URLs for Clerk**:
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`, and `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` are endpoints or URLs related to your Clerk setup. You can configure these in your Clerk dashboard.

9. **Prisma Database URL**:
   - `DATABASE_URL` is the connection URL for your Supabase PostgreSQL database. You will need to create a Supabase account (https://supabase.com/) or use an existing one. Obtain the connection URL from your Supabase dashboard after creating a new project.

10. **Public App URL**:
    - `NEXT_PUBLIC_APP_URL` are endpoints or URLs related to this Project. You can configure/copy this from your needs.

11. **Unsplash API Key**:
    - Sign up on [Unsplash](https://unsplash.com/) if you haven't already.
    - Join the Unsplash Developer Community [here](https://unsplash.com/developers).
    - Create a new application in the [Developer Dashboard](https://unsplash.com/oauth/applications).
    - Obtain your `Access Key` from the created application.
    - Set the `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` environment variable in your project with the obtained key.

12. Open terminal in root directory. Run npm install or yarn install.

13. Now app is fully configured 👍 and you can start using this app using npm run dev or yarn dev.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Create Boards](/.github/images/img2.png "Create Boards")

![Premium Lists and Card](/.github/images/img3.png "Premium Lists and Card")

![View Activity](/.github/images/img4.png "View Activity")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")

## :wrench: Stats

[![Stats for Taskify](/.github/images/stats.svg "Stats for Taskify")](https://pagespeed-insights-svg.glitch.me/?url=https://app-taskify.vercel.app/ "Stats for Taskify")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

- Thanks to CodeWithAntonio: https://codewithantonio.com/
<!--- DEPENDENCIES_START --->
- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.31.5
- [@hello-pangea/dnd](https://www.npmjs.com/package/@hello-pangea/dnd): ^16.6.0
- [@prisma/client](https://www.npmjs.com/package/@prisma/client): ^5.22.0
- [@radix-ui/react-accordion](https://www.npmjs.com/package/@radix-ui/react-accordion): ^1.2.12
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.1.11
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.1.15
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.1.8
- [@radix-ui/react-popover](https://www.npmjs.com/package/@radix-ui/react-popover): ^1.1.15
- [@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator): ^1.1.8
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.2.4
- [@radix-ui/react-tooltip](https://www.npmjs.com/package/@radix-ui/react-tooltip): ^1.2.8
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query): ^5.90.21
- [@types/lodash](https://www.npmjs.com/package/@types/lodash): ^4.17.23
- [@types/node](https://www.npmjs.com/package/@types/node): ^25.2.3
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.2.14
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.2.3
- [@vercel/config](https://www.npmjs.com/package/@vercel/config): ^0.0.33
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.24
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.1
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [date-fns](https://www.npmjs.com/package/date-fns): ^4.1.0
- [eslint](https://www.npmjs.com/package/eslint): ^8
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 14.0.3
- [lodash](https://www.npmjs.com/package/lodash): ^4.17.23
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.574.0
- [next](https://www.npmjs.com/package/next): 15.5.10
- [next-pwa](https://www.npmjs.com/package/next-pwa): ^5.6.0
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [prisma](https://www.npmjs.com/package/prisma): ^5.6.0
- [react](https://www.npmjs.com/package/react): ^19.2.4
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.2.4
- [sonner](https://www.npmjs.com/package/sonner): ^2.0.7
- [stripe](https://www.npmjs.com/package/stripe): ^20.3.1
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.0.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.0
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [typescript](https://www.npmjs.com/package/typescript): ^5.9.3
- [unsplash-js](https://www.npmjs.com/package/unsplash-js): ^7.0.20
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts): ^3.1.1
- [zod](https://www.npmjs.com/package/zod): ^4.3.6
- [zustand](https://www.npmjs.com/package/zustand): ^5.0.11

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/trello-clone&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/trello-clone&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/trello-clone&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/trello-clone&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
