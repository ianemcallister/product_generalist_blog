import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          © Copyright 2024 Product Generalist · All Rights Reserved · Ian McAllister · Privacy Policy
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
