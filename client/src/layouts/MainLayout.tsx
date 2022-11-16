import { Footer, Header } from "../components";

export default function MainLayout({ children }: any) {
  return (
    <div className="body">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
