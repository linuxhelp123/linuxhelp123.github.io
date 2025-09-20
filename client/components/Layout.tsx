import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_-20%_-10%,rgba(147,51,234,0.12),transparent_50%),radial-gradient(1000px_600px_at_120%_-20%,rgba(244,63,94,0.12),transparent_50%),linear-gradient(to_bottom_right,rgba(99,102,241,0.06),rgba(236,72,153,0.06))]">
      <Header />
      <main className={cn("relative z-10")}> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 shadow-md" />
          <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
            Extension Setup Guide
          </span>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container py-8 text-sm text-muted-foreground">
        <p className="text-center">
          For help, contact me on Discord: <span className="font-semibold text-foreground">dr_sheeezh</span>.
        </p>
      </div>
    </footer>
  );
}
