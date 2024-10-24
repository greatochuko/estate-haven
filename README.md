# Estate-Haven
![Estate Haven home page](/public/homepage.png)

**Estate-Haven** is a real estate website built using modern web technologies. The platform allows users to explore real estate listings, search for properties, and get detailed information on various housing options. This project leverages **Next.js**, **TypeScript**, **Supabase**, and **Tailwind CSS** for a responsive and efficient user experience.

## Features

- **Browse Listings**: View real estate listings with detailed property information.
- **Search Properties**: Filter properties by location, price, and type.
- **Create & Edit Listings**: Users can create new real estate listings and edit existing ones (admin functionality).
- **Wishlist**: Save favorite properties to a wishlist for future reference.
- **Responsive Design**: Seamless experience across devices, optimized for both mobile and desktop views.
- **Real-time Data Management**: Powered by Supabase for fast, real-time property updates.

## Tech Stack

- **Next.js**: Server-side rendering and static site generation for fast loading times and SEO optimization.
- **TypeScript**: Strongly typed JavaScript for better code quality and debugging.
- **Supabase**: Backend as a service (BaaS) providing real-time databases and authentication.
- **Tailwind CSS**: Utility-first CSS framework for building responsive and modern designs quickly.

## Installation

To get started with the project, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/estate-haven.git
   ```

2. Navigate into the project directory:
   ```bash
   cd estate-haven
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up your environment variables. Create a `.env.local` file in the root directory with your Supabase keys:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   JWT_SECRET=your-jwt-secret
   NEXT_PUBLIC_ORIGIN=your-origin
   NEXT_PUBLIC_EMAILJS_PRIVATE_KEY=your-emailjs-private-key
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-emailjs-public-key
   
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

To deploy this project, you can use platforms such as **Vercel** or **Netlify**:

1. Connect your repository to the platform.
2. Ensure your environment variables are correctly set up.
3. Deploy your site directly from the platform's dashboard.

## Contribution

If you'd like to contribute to **Estate-Haven**, feel free to submit a pull request. Make sure to follow the coding standards and ensure that your changes are well tested.

---

### Contact

If you have any questions or suggestions regarding this project, feel free to reach out to me:

- **Portfolio**: [https://greatochuko.vercel.app/](https://greatochuko.vercel.app/)
- **Email**: officialgreatochuko@gmail.com