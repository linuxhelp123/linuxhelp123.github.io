import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-xl text-center rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-8">
        <h1 className="text-4xl font-extrabold">404</h1>
        <p className="mt-2 text-muted-foreground">Oops! Page not found.</p>
        <Link to="/" className="mt-6 inline-block text-primary underline-offset-4 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
