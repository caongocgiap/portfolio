import type { PropsWithChildren } from "react";
import Header from "./elements/Header";
import ButtonChangeLanguage from "./ui/ButtonChangeLanguage";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col">
        {children}
      </main>
      <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4 z-50">
        <ButtonChangeLanguage />
      </div>
    </>
  );
};
