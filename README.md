![image](https://github.com/user-attachments/assets/44725fcc-5265-44fb-8b79-a7be08fa07cd)


# SaaS App - LMS with Next.js, Supabase & Payments

Discover a cutting-edge LMS SaaS solution built from the ground up, featuring robust user authentication, seamless subscriptions, and secure payments. Powered by Next.js, Supabase, and Stripe, this platform revolutionizes online learning by offering real-time teaching capabilities with integrated AI vocal agents. Experience interactive learning sessions like never before, ensuring a smooth and engaging educational experience. This project addresses the pressing need for accessible, efficient, and engaging online education solutions, catering to both educators and learners worldwide.

![image](https://github.com/user-attachments/assets/ed0d2b2d-b5a4-476b-8406-2084aef7d765)

## ⚙️ Tech Stack

*   **[Clerk](https://clerk.com/)** is a unified platform for authentication, user management, and billing. It offers embeddable UI components, flexible APIs, and admin dashboards for secure user management. Clerk also simplifies subscription management, allowing you to define plans, create pricing pages, and control access based on subscription tiers—all in one solution.

*   **[Next.js](https://nextjs.org/)** is a powerful React framework that enables the development of fast, scalable web applications with features like server-side rendering, static site generation, and API routes for building full-stack applications.
    
*   **[Sentry](https://sentry.io/welcome/)** is an error tracking and performance monitoring tool that helps developers fix bugs faster by providing real-time alerts, stack traces, and performance insights.
    
*   **[shadcn/ui](https://ui.shadcn.com/)** is a customizable component library built on Radix UI and Tailwind CSS. It offers a modern, accessible design system with pre-built components that are easy to theme and extend, making it ideal for building polished UIs with minimal effort.
    

*   **[Supabase](https://supabase.com/)** is an open-source backend-as-a-service platform that provides instant APIs, real-time subscriptions, authentication, storage, and a PostgreSQL database, enabling developers to build scalable and secure applications with ease.

*   **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.
*   **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.

*   **[Vapi](https://vapi.ai/)** is a developer-centric voice AI platform that enables the creation of conversational voice agents with low-latency voice interactions, speech-to-text, and text-to-speech capabilities. It supports multilingual conversations, customizable voices, and seamless integration with various AI models and tools.

*   **[Zod](https://zod.dev/)** is a TypeScript-first schema validation library that provides a simple and expressive way to define and validate data structures. Zod ensures data integrity by catching errors early during development.

  ![image](https://github.com/user-attachments/assets/8af1a9ff-bee8-4993-a063-7f6a4b632d86)


## 🔋 Features

*   **AI Voice Agents**: Take tutoring sessions with voiced AIs specializing in the topics you want to get better at.

*   **Authentication**: Secure user sign-up and sign-in with Clerk; Google authentication and many more.

*   **Billing & Subscriptions**: Easily manage plans, upgrades, and payment details.

*   **Bookmarks and Session History**: Let users organise their learning by bookmarking tutors and accessing previous sessions.

*   **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.

*   **Create a Tutor**: Create your own AI tutors, choosing a subject, topic, and style of conversation.

*   **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.

*   **Database Integration**: Uses Supabase for real-time data handling and storage needs.

*   **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

*   **Scalable Tech Stack**: Built with Next.js for a fast, production-ready web application that scales seamlessly.

*   **Search Functionality**: Find tutors quickly with robust filters and search bar.

and many more, including code architecture and reusability.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

*   [Git](https://git-scm.com/)
*   [Node.js](https://nodejs.org/en/)
*   [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```shell
git clone https://github.com/adrianhajdin/saas-app.git
cd saas-app
```

**Installation**

Install the project dependencies using npm:

```shell
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```dotenv
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on: [Supabase](https://supabase.com/), [Clerk](https://clerk.com/), [Sentry](https://sentry.io/welcome/), [Vapi](https://vapi.ai/).

**Running the Project**

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser to view the project.


