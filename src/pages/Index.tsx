import { useEffect, useState } from "react";
import heroImage from "@/assets/green-potatoes-hero.jpg";
import structureImage from "@/assets/solanine-structure.png";
import { AlertTriangle, BookOpen, ChevronDown, FlaskConical, Leaf, Menu, Moon, Skull, Sun, X } from "lucide-react";

const sections = [
  { id: "despre", label: "Ce este?" },
  { id: "structura", label: "Structură" },
  { id: "plante", label: "Plante" },
  { id: "toxicitate", label: "Toxicitate" },
  { id: "biosinteza", label: "Biosinteză" },
  { id: "bibliografie", label: "Bibliografie" },
];

const plants = [
  {
    name: "Cartoful",
    latin: "Solanum tuberosum",
    detail: "Sursa principală de expunere. Solanina se concentrează în coaja verde, germeni și în zonele expuse la lumină.",
  },
  {
    name: "Tomatele verzi",
    latin: "Solanum lycopersicum",
    detail: "Conțin tomatină, un alcaloid înrudit cu solanina, în cantități mai mari înainte de coacere.",
  },
  {
    name: "Pătlăgelele vinete",
    latin: "Solanum melongena",
    detail: "Pot conține alcaloizi steroizi înruditi, dar în general la niveluri mici.",
  },
  {
    name: "Zărnacica",
    latin: "Solanum dulcamara",
    detail: "Plantă toxică ce conține solanină și alți compuși asemănători în frunze și fructe.",
  },
  {
    name: "Lăcrămioarele negre",
    latin: "Solanum nigrum",
    detail: "Fructele necoapte și alte părți ale plantei pot avea concentrații relevante de glicoalcaloizi.",
  },
  {
    name: "Mătrăguna și Datura",
    latin: "Atropa belladonna / Datura stramonium",
    detail: "Nu sunt surse tipice de solanină, dar sunt importante deoarece aparțin aceleiași familii și produc alți alcaloizi foarte toxici.",
  },
];

const bibliography = [
  {
    text: "Friedman, M. (2006). Potato Glycoalkaloids and Metabolites: Roles in the Plant and in the Diet.",
    href: "https://doi.org/10.1021/jf061471t",
  },
  {
    text: "WHO/FAO (1999). Solanine and Chaconine. WHO Food Additives Series 42.",
    href: "https://inchem.org/documents/jecfa/jecmono/v042je04.htm",
  },
  {
    text: "Mensinga, T. T. et al. (2005). Potato glycoalkaloids and adverse effects in humans.",
    href: "https://doi.org/10.1016/j.yrtph.2004.09.004",
  },
  {
    text: "Hellenäs, K.-E. et al. (1995). High levels of glycoalkaloids in the Swedish potato variety Magnum Bonum.",
    href: "https://onlinelibrary.wiley.com/doi/10.1002/jsfa.2740680211",
  },
  {
    text: "Wikipedia — Solanine",
    href: "https://en.wikipedia.org/wiki/Solanine",
  },
];

const Index = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#top" className="text-xl font-black tracking-tight text-foreground">
            🥔 Solanina
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="text-sm font-semibold text-muted-foreground hover:text-primary">
                {section.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-border bg-card p-2 text-foreground hover:bg-muted"
              aria-label="Schimbă tema"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-full border border-border bg-card p-2 text-foreground md:hidden"
              aria-label="Deschide meniul"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="section-shell space-y-3 border-t border-border py-4 md:hidden">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold text-muted-foreground hover:text-primary"
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main id="top" className="pt-24">
        <header className="section-shell py-10 md:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Toxina din cartofii verzi
              </span>
              <h1 className="max-w-4xl text-5xl font-black leading-none text-foreground md:text-7xl">
                Solanina: cum apare, unde se găsește și de ce poate deveni periculoasă.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Un site informativ despre glicoalcaloidul produs de plantele din familia Solanaceae,
                cu accent pe cartofii verzi, toxicitate, biosinteză și surse bibliografice.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#despre" className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90">
                  Citește explicația
                </a>
                <a href="#bibliografie" className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted">
                  Vezi sursele
                </a>
              </div>
              <a href="#despre" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explorează mai jos <ChevronDown className="h-4 w-4 animate-bounce" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
              <div className="absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
              <div className="hero-shadow overflow-hidden rounded-[2rem] border border-border bg-card p-3">
                <img
                  src={heroImage}
                  alt="Cartofi verzi cu germeni, expuși la lumină"
                  className="h-[460px] w-full rounded-[1.5rem] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </header>

        <section id="despre" className="section-shell py-12 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="soft-card p-8 md:p-10">
              <SectionTitle icon={<Leaf className="h-6 w-6" />} title="Ce este solanina?" />
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  <strong>Solanina</strong> este un <em>glicoalcaloid</em> toxic produs natural de anumite
                  plante din familia <strong>Solanaceae</strong>. Formula moleculară este
                  <strong> C₄₅H₇₃NO₁₅</strong>, iar compusul are rol defensiv împotriva insectelor,
                  fungilor și erbivorelor.
                </p>
                <p>
                  În cartof, acumularea ei crește mai ales când tuberculul este expus la lumină,
                  începe să încolțească sau este deteriorat. Verdele cartofului vine de la clorofilă,
                  dar acesta este și un semn că pot crește simultan nivelurile de glicoalcaloizi.
                </p>
              </div>
            </article>

            <aside className="soft-card p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Date rapide</p>
              <div className="mt-6 space-y-5">
                <InfoStat label="Formula moleculară" value="C₄₅H₇₃NO₁₅" />
                <InfoStat label="Masă molară" value="868,06 g/mol" />
                <InfoStat label="Doză toxică estimată" value="2–5 mg/kg" />
                <InfoStat label="Stabilitate termică" value="nu este eliminată prin gătire" />
              </div>
            </aside>
          </div>
        </section>

        <section id="structura" className="section-shell py-12 md:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="soft-card overflow-hidden p-4 md:p-6">
              <img
                src={structureImage}
                alt="Structura 2D a moleculei de solanină"
                className="w-full rounded-[1.5rem] border border-border bg-card object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <SectionTitle icon={<FlaskConical className="h-6 w-6" />} title="Structura 2D a solaninei" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Molecula conține un nucleu steroidal numit <strong>solanidină</strong>, la care este
                atașat un lanț glucidic format din <strong>glucoză, galactoză și ramnoză</strong>.
                Această organizare îi permite să interacționeze cu membranele celulare și să le altereze.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="soft-card p-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Aglicon</p>
                  <p className="mt-2 text-xl font-bold text-foreground">Solanidina</p>
                </div>
                <div className="soft-card p-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Lanț zaharidic</p>
                  <p className="mt-2 text-xl font-bold text-foreground">Glc + Gal + Rha</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plante" className="section-shell py-12 md:py-20">
          <SectionTitle icon={<Leaf className="h-6 w-6" />} title="În ce plante se mai găsește" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {plants.map((plant) => (
              <article key={plant.name} className="soft-card p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-foreground">{plant.name}</h3>
                <p className="mt-1 text-sm italic text-primary">{plant.latin}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{plant.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="toxicitate" className="section-shell py-12 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="soft-card p-8 md:p-10">
              <SectionTitle icon={<Skull className="h-6 w-6" />} title="Cât de toxică este?" />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  <strong>Doza toxică</strong> pentru om este estimată la aproximativ
                  <strong> 2–5 mg/kg corp</strong>. Pentru un adult de 70 kg, aceasta ar însemna
                  aproximativ <strong>140–350 mg</strong> de solanină.
                </p>
                <p>
                  În cartofii obișnuiți pot exista niveluri scăzute, dar în cartofii verzi sau încolțiți
                  concentrațiile pot crește foarte mult. La copii, riscul este mai mare deoarece greutatea
                  corporală este mai mică.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="soft-card flex gap-4 p-6">
                <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                <div>
                  <p className="font-bold text-foreground">Important</p>
                  <p className="mt-1 text-muted-foreground">
                    Solanina <strong>nu este distrusă complet prin fierbere, coacere sau prăjire</strong>.
                    Temperatura de descompunere este în jur de <strong>243°C</strong>, peste nivelul multor
                    metode uzuale de gătire.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="soft-card p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Simptome digestive</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>greață</li>
                    <li>vărsături</li>
                    <li>diaree</li>
                    <li>crampe abdominale</li>
                  </ul>
                </div>
                <div className="soft-card p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Simptome neurologice</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>amețeli și cefalee</li>
                    <li>confuzie</li>
                    <li>halucinații în cazuri severe</li>
                    <li>paralizie sau comă, rar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="biosinteza" className="section-shell py-12 md:py-20">
          <div className="soft-card p-8 md:p-10">
            <SectionTitle icon={<FlaskConical className="h-6 w-6" />} title="Cum este produsă în natură" />
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  În cartof, biosinteza solaninei pornește din <strong>calea mevalonatului</strong>,
                  o secvență metabolică prin care compușii de bază ai plantei sunt transformați în
                  steroli și apoi în alcaloizi steroizi.
                </p>
                <div className="mt-6 rounded-3xl border border-border bg-background/70 p-6 font-mono text-sm leading-8 text-foreground">
                  Acetil-CoA → Mevalonat → IPP / DMAPP → FPP → Squalen → Lanosterol → Colesterol → Solanidină → α-Solanină
                </div>
              </div>

              <div className="space-y-4">
                <FactorCard title="Lumină" text="Expunerea la lumină stimulează simultan formarea clorofilei și a glicoalcaloizilor." />
                <FactorCard title="Deteriorare mecanică" text="Loviturile, tăieturile și atacul insectelor activează răspunsul defensiv al plantei." />
                <FactorCard title="Temperaturi joase" text="Depozitarea la rece, sub aproximativ 7°C, poate favoriza acumularea de compuși toxici." />
                <FactorCard title="Germinare" text="Germenii și zonele din jurul lor pot concentra cantități mari de solanină." />
              </div>
            </div>
          </div>
        </section>

        <section id="bibliografie" className="section-shell py-12 pb-24 md:py-20 md:pb-28">
          <SectionTitle icon={<BookOpen className="h-6 w-6" />} title="Bibliografie și siteografie" />
          <div className="mt-8 soft-card p-8 md:p-10">
            <ol className="list-decimal space-y-5 pl-5 text-foreground/85">
              {bibliography.map((item) => (
                <li key={item.href}>
                  <span>{item.text}</span>
                  <br />
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary underline underline-offset-4">
                    {item.href}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/60 py-8 text-center text-sm text-muted-foreground">
        <div className="section-shell">
          <p>Site informativ despre solanină, toxicitatea ei și contextul biologic al producerii în plante.</p>
          <p className="mt-2">© 2026 — Realizat cu Lovable</p>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      {icon}
    </div>
    <h2 className="text-3xl font-black text-foreground md:text-4xl">{title}</h2>
  </div>
);

const InfoStat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-border bg-background/80 p-5">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    <p className="mt-2 text-2xl font-black text-foreground">{value}</p>
  </div>
);

const FactorCard = ({ title, text }: { title: string; text: string }) => (
  <div className="rounded-2xl border border-border bg-background/80 p-5 transition-transform duration-300 hover:translate-x-1">
    <p className="text-lg font-bold text-foreground">{title}</p>
    <p className="mt-2 text-muted-foreground">{text}</p>
  </div>
);

export default Index;
