import { Link, Route, Routes } from "react-router";
import { Activity, ArrowRight, ShieldCheck } from "lucide-react";

function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          ACL Frontend
        </div>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            React · TypeScript · Vite
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your ACL application starts here.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A clean, typed frontend foundation with routing, data fetching,
            forms, validation, and reusable UI components ready to configure.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Explore starter page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {["Type-safe forms", "Server state", "Data tables"].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Activity className="mb-4 h-5 w-5 text-blue-600" />
              <h2 className="font-semibold">{item}</h2>
              <p className="mt-2 text-sm text-slate-600">
                A foundation for building maintainable features.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Starter project</h1>
        <p className="mt-3 text-slate-600">
          React Router navigation is working. Add your application features here.
        </p>
        <Link to="/" className="mt-6 inline-block font-medium text-blue-600 hover:underline">
          Back to home
        </Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}