import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";


/**
 * Represents the layout component for the pages.
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.Component - The component to be rendered.
 * @param {any} props.state - The state object.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout({ Component, state }: PageProps) {

  return (
    <div class="bg-black min-h-screen relative ">
      <Header />
      <div class="pb-[210px]">
        <Component />
      </div>
      <Footer />
    </div>
  );
}
