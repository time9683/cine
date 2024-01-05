import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
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
