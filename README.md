# Threads - Twitter Clone

Threads is a social media platform designed to mimic the functionality of Twitter. It is built using Next.js with TypeScript, Shadcn, Tailwind CSS, Clerk for user authentication, webhooks for real-time updates, and FileUploadThing for image uploads.

## Live Demo

Check out the live deployment of Threads: [https://threads-eight-ivory.vercel.app/](https://threads-eight-ivory.vercel.app/)

## Features

- **User Authentication:** Utilizing Clerk, Threads provides secure and easy-to-use user authentication.
- **Real-time Updates:** Webhooks are integrated to deliver real-time updates to users.
- **Image Uploads:** FileUploadThing is employed for hassle-free image uploads.
- **Responsive Design:** Tailwind CSS ensures a seamless experience across different devices.

## Tech Stack

- **Frontend:** Next.js, TypeScript, Shadcn, Tailwind CSS
- **Authentication:** Clerk
- **Image Uploads:** FileUploadThing
- **Deployment:** Vercel

## Installation

1. Clone this repository: `git clone https://github.com/your-username/threads.git`
2. Navigate to the project directory: `cd threads`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - `NEXT_PUBLIC_API_KEY`: Your Clerk API key
   - `OTHER_ENV_VARS`: Other environment variables your project requires
5. Run the development server: `npm run dev`

## Usage

- Visit the website's homepage and sign up or log in using Clerk.
- Start creating posts, following other users, and exploring the Threads community.
- Use the image upload feature to share pictures with your posts.
- Experience real-time updates through webhooks.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the platform, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Implement your changes and commit: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request, detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).
