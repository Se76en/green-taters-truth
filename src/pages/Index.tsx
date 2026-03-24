// Glycoalkaloids Research Project
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/green-potatoes-hero.jpg";
import structureImage from "@/assets/solanine-structure.png";
import greenTomatoesImg from "@/assets/green-tomatoes.jpg";
import eggplantsImg from "@/assets/eggplants.jpg";
import greenPotatoSproutsImg from "@/assets/green-potato-sprouts.jpg";
import tomatineVsSolanineImg from "@/assets/tomatine-vs-solanine.png";
import {
  AlertTriangle, BookOpen, ChevronDown, FlaskConical,
  Leaf, Menu, Microscope, Moon, Skull, Sun, X, Zap,
} from "lucide-react";

/* ───────── data ───────── */

const sections = [
  { id: "glicoalcaloid", label: "Glicoalcaloid" },
  { id: "despre", label: "Ce este?" },
  { id: "structura", label: "Structură" },
  { id: "mecanism", label: "Mecanism" },
  { id: "plante", label: "Plante" },
  { id: "toxicitate", label: "Toxicitate" },
  { id: "biosinteza", label: "Biosinteză" },
  { id: "bibliografie", label: "Bibliografie" },
];

const plants = [
  { name: "Cartoful", latin: "Solanum tuberosum", detail: "Sursa principală de expunere. Solanina se concentrează în coaja verde, germeni și în zonele expuse la lumină.", img: greenPotatoSproutsImg },
  { name: "Tomatele verzi", latin: "Solanum lycopersicum", detail: "Conțin tomatină, un alcaloid înrudit cu solanina, în cantități mai mari înainte de coacere.", img: greenTomatoesImg },
  { name: "Vinetele", latin: "Solanum melongena", detail: "Pot conține alcaloizi steroizi înrudiți, dar în general la niveluri mici. Solanina se găsește mai ales în frunze și tulpină.", img: eggplantsImg },
];

const cellMechanisms = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Perturbarea membranei celulare",
    text: "Solanina se leagă de colesterolul din membranele celulare, formând complexe care creează pori. Aceasta duce la pierderea controlului asupra transportului ionic și, în final, la liza celulei.",
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    title: "Inhibarea acetilcolinesterazei",
    text: "La nivel neuronal, solanina blochează enzima acetilcolinesteraza (AChE), ducând la acumularea acetilcolinei în sinapse. Efectul este similar cu cel al unor insecticide organofosforice.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Distrugerea mitocondriilor",
    text: "Glicoalcaloizii perturbă potențialul membranei mitocondriale, declanșând eliberarea citocromului c și activarea cascadei apoptotice (moartea celulară programată).",
  },
  {
    icon: <FlaskConical className="h-5 w-5" />,
    title: "Efecte asupra tractului GI",
    text: "În epiteliul intestinal, solanina crește permeabilitatea barierei mucoase, facilitând translocarea bacteriană și declanșând inflamație locală acută.",
  },
];

const bibliography = [
  { text: "Friedman, M. (2006). Potato Glycoalkaloids and Metabolites: Roles in the Plant and in the Diet. J. Agric. Food Chem.", href: "https://doi.org/10.1021/jf061471t" },
  { text: "WHO/FAO (1999). Solanine and Chaconine. WHO Food Additives Series 42.", href: "https://inchem.org/documents/jecfa/jecmono/v042je04.htm" },
  { text: "Mensinga, T. T. et al. (2005). Potato glycoalkaloids and adverse effects in humans. Regul. Toxicol. Pharmacol.", href: "https://doi.org/10.1016/j.yrtph.2004.09.004" },
  { text: "Hellenäs, K.-E. et al. (1995). High levels of glycoalkaloids in the Swedish potato variety Magnum Bonum. J. Sci. Food Agric.", href: "https://onlinelibrary.wiley.com/doi/10.1002/jsfa.2740680211" },
  { text: "Keukens, E. A. J. et al. (1995). Molecular basis of glycoalkaloid induced membrane disruption. Biochim. Biophys. Acta.", href: "https://doi.org/10.1016/0005-2736(95)00202-2" },
  { text: "Roddick, J. G. et al. (2001). Steroidal glycoalkaloids of Solanum species and their fungitoxic effects. Adv. Exp. Med. Biol.", href: "https://doi.org/10.1007/978-1-4615-0629-4_7" },
  { text: "Patel, B. et al. (2018). Potato glycoalkaloids: chemistry, biosynthesis, and biological activity. Food Chem. Toxicol.", href: "https://doi.org/10.1016/j.fct.2018.08.028" },
  { text: "Milner, S. E. et al. (2011). Bioactivities of glycoalkaloids and their aglycones from Solanum species. J. Agric. Food Chem.", href: "https://doi.org/10.1021/jf200439q" },
  { text: "Wikipedia — Solanine", href: "https://en.wikipedia.org/wiki/Solanine" },
];

/* ───────── animation helpers ───────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const vp = { once: true, margin: "-60px" as any };

/* ───────── page ───────── */

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
      {/* ── NAV ── */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#top" className="text-xl font-black tracking-tight text-foreground">🥔 Solanina</a>
          <div className="hidden items-center gap-6 md:flex">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{s.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleTheme} className="rounded-full border border-border bg-card p-2 text-foreground hover:bg-muted" aria-label="Schimbă tema">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button type="button" onClick={() => setMenuOpen((v) => !v)} className="rounded-full border border-border bg-card p-2 text-foreground md:hidden" aria-label="Meniu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="section-shell space-y-3 border-t border-border py-4 md:hidden">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-muted-foreground hover:text-primary">{s.label}</a>
            ))}
          </div>
        )}
      </nav>

      <main id="top" className="pt-24">
        {/* ── HERO ── */}
        <header className="section-shell py-10 md:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div className="space-y-6" initial="hidden" animate="visible" variants={stagger}>
              <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Toxina din cartofii verzi
              </motion.span>
              <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-4xl text-5xl font-black leading-none text-foreground md:text-7xl">
                Solanina: cum apare, unde se găsește și de ce poate deveni periculoasă.
              </motion.h1>
              <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {"\n"}
              </motion.p>
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-3">
                <a href="#despre" className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90">Citește explicația</a>
                <a href="#bibliografie" className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted">Vezi sursele</a>
              </motion.div>
              <motion.a variants={fadeUp} transition={{ duration: 0.5 }} href="#despre" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explorează mai jos <ChevronDown className="h-4 w-4 animate-bounce" />
              </motion.a>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
              <div className="absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
              <div className="hero-shadow overflow-hidden rounded-[2rem] border border-border bg-card p-3">
                <img src={heroImage} alt="Cartofi verzi cu germeni, expuși la lumină" className="h-[460px] w-full rounded-[1.5rem] object-cover" loading="eager" />
              </div>
            </motion.div>
          </div>
        </header>

        {/* ── GLICOALCALOID ── */}
        <section id="glicoalcaloid" className="section-shell py-12 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-5">
              <SectionTitle icon={<FlaskConical className="h-6 w-6" />} title="Ce este un glicoalcaloid?" />
              <div className="space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  <strong>Glicoalcaloizii</strong> sunt o clasă de compuși chimici naturali produși de plante, formați din două componente distincte: un <em>alcaloid steroidal</em> (numit aglicon) legat de un <em>lanț de zaharuri</em> (glicozid).
                </p>
                <p>
                  Acești compuși au rol de <strong>apărare chimică</strong> — protejează planta împotriva insectelor, ciupercilor și erbivorelor. Sunt caracteristici familiei <strong>Solanaceae</strong> (cartofi, tomate, vinete, ardei).
                </p>
                <p>
                  Solanina și chaconina sunt cei mai cunoscuți glicoalcaloizi din cartofi, dar există sute de variante identificate în diferite specii de <em>Solanum</em>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── CE ESTE ── */}
        <section id="despre" className="section-shell py-12 md:py-20">
          <motion.div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.article variants={fadeRight} transition={{ duration: 0.6 }} className="soft-card p-8 md:p-10">
              <SectionTitle icon={<Leaf className="h-6 w-6" />} title="Ce este solanina?" />
              <div className="mt-4 space-y-5 text-lg leading-relaxed text-foreground/85">
                <p><strong>Solanina</strong> este un <em>glicoalcaloid</em> toxic produs natural de anumite plante din familia <strong>Solanaceae</strong>. Formula moleculară este <strong>C₄₅H₇₃NO₁₅</strong>, iar compusul are rol defensiv împotriva insectelor, fungilor și erbivorelor.</p>
                <p><strong>Rolul în plantă:</strong> Solanina funcționează ca un <em>pesticid natural</em>. Planta o produce în frunze, fructe necoapte și tuberculi expuși pentru a descuraja insectele, ciupercile și animalele erbivore. Este, practic, sistemul imunitar chimic al plantei.</p>
                <p>În cartof, acumularea ei crește mai ales când tuberculul este expus la lumină, începe să încolțească sau este deteriorat. Verdele cartofului vine de la clorofilă, dar acesta este și un semn că pot crește simultan nivelurile de glicoalcaloizi.</p>
              </div>
            </motion.article>

            <motion.aside variants={fadeLeft} transition={{ duration: 0.6 }} className="soft-card p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Date rapide</p>
              <div className="mt-6 space-y-5">
                <InfoStat label="Formula moleculară" value="C₄₅H₇₃NO₁₅" />
                <InfoStat label="Masă molară" value="868,06 g/mol" />
                <InfoStat label="Doză toxică estimată" value="2–5 mg/kg" />
                <InfoStat label="Stabilitate termică" value="nu este eliminată prin gătire" />
              </div>
            </motion.aside>
          </motion.div>
        </section>

        {/* ── STRUCTURA ── */}
        <section id="structura" className="section-shell py-12 md:py-20">
          <motion.div className="grid items-center gap-8 lg:grid-cols-2" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={scaleIn} transition={{ duration: 0.6 }} className="soft-card overflow-hidden p-4 md:p-6">
              <img src={structureImage} alt="Structura 2D a moleculei de solanină" className="w-full rounded-[1.5rem] border border-border bg-card object-cover" loading="lazy" />
            </motion.div>
            <motion.div variants={fadeLeft} transition={{ duration: 0.6 }} className="space-y-5">
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
            </motion.div>
          </motion.div>
        </section>

        {/* ── MECANISM CELULAR (NOU) ── */}
        <section id="mecanism" className="section-shell py-12 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle icon={<Microscope className="h-6 w-6" />} title="Cum acționează asupra celulelor" />
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Solanina nu este doar un iritant simplu — ea atacă celulele prin mai multe mecanisme simultane,
              afectând membranele, sistemul nervos și procesele energetice celulare.
            </p>
          </motion.div>
          <motion.div className="mt-8 grid gap-5 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            {cellMechanisms.map((m, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="soft-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{m.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{m.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-8 soft-card p-6 md:p-8" initial="hidden" whileInView="visible" viewport={vp} variants={scaleIn} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Rezumat: cascada toxică</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-sm text-foreground">
              {[
                "Solanina se leagă de colesterol",
                "→ Formează pori în membrană",
                "→ Pierdere ionică (Ca²⁺, K⁺)",
                "→ Disfuncție mitocondrială",
                "→ Eliberare citocrom c",
                "→ Apoptoză / liză celulară",
              ].map((step, i) => (
                <motion.span key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="rounded-full border border-border bg-background/70 px-3 py-1.5"
                >{step}</motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── PLANTE ── */}
        <section id="plante" className="section-shell py-12 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle icon={<Leaf className="h-6 w-6" />} title="În ce plante se mai găsește" />
          </motion.div>
          <motion.div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            {plants.map((plant) => (
              <motion.article key={plant.name} variants={fadeUp} transition={{ duration: 0.5 }} className="soft-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                {plant.img && (
                  <img src={plant.img} alt={plant.name} className="h-44 w-full object-cover" loading="lazy" width={768} height={512} />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground">{plant.name}</h3>
                  <p className="mt-1 text-sm italic text-primary">{plant.latin}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{plant.detail}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div className="mt-8 soft-card overflow-hidden p-4 md:p-6" initial="hidden" whileInView="visible" viewport={vp} variants={scaleIn} transition={{ duration: 0.6 }}>
            <img src={tomatineVsSolanineImg} alt="Comparație între structura chimică a α-Tomatinei (din tomate) și α-Solaninei (din cartofi), evidențiind diferența de aranjament al inelelor" className="w-full rounded-[1.5rem] border border-border bg-white object-contain" loading="lazy" />
            <p className="mt-3 text-center text-sm text-muted-foreground">Comparație structurală: α-Tomatina (spirosolane) vs. α-Solanina (solanidane)</p>
          </motion.div>
        </section>

        {/* ── TOXICITATE ── */}
        <section id="toxicitate" className="section-shell py-12 md:py-20">
          <motion.div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeRight} transition={{ duration: 0.6 }} className="soft-card p-8 md:p-10">
              <SectionTitle icon={<Skull className="h-6 w-6" />} title="Cât de toxică este?" />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p><strong>Doza toxică</strong> pentru om este estimată la aproximativ <strong>2–5 mg/kg corp</strong>. Pentru un adult de 70 kg, aceasta ar însemna aproximativ <strong>140–350 mg</strong> de solanină.</p>
                <p>În cartofii obișnuiți pot exista niveluri scăzute, dar în cartofii verzi sau încolțiți concentrațiile pot crește foarte mult. La copii, riscul este mai mare deoarece greutatea corporală este mai mică.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeLeft} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="soft-card flex gap-4 p-6">
                <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                <div>
                  <p className="font-bold text-foreground">Important</p>
                  <p className="mt-1 text-muted-foreground">Solanina <strong>nu este distrusă complet prin fierbere, coacere sau prăjire</strong>. Temperatura de descompunere este în jur de <strong>243°C</strong>, peste nivelul multor metode uzuale de gătire.</p>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="soft-card p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Simptome digestive</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>greață</li><li>vărsături</li><li>diaree</li><li>crampe abdominale</li>
                  </ul>
                </div>
                <div className="soft-card p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Simptome neurologice</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>amețeli și cefalee</li><li>confuzie</li><li>halucinații în cazuri severe</li><li>paralizie sau comă, rar</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── BIOSINTEZĂ ── */}
        <section id="biosinteza" className="section-shell py-12 md:py-20">
          <motion.div className="soft-card p-8 md:p-10" initial="hidden" whileInView="visible" viewport={vp} variants={scaleIn} transition={{ duration: 0.6 }}>
            <SectionTitle icon={<FlaskConical className="h-6 w-6" />} title="Cum este produsă în natură" />
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  În cartof, biosinteza solaninei pornește din <strong>calea mevalonatului</strong>,
                  o secvență metabolică prin care compușii de bază ai plantei sunt transformați în
                  steroli și apoi în alcaloizi steroizi.
                </p>
                <div className="mt-6 rounded-3xl border border-border bg-background/70 p-6 font-mono text-sm leading-8 text-foreground">
                  Colesterol → Solanidină → <strong>α-Solanină</strong>
                </div>
              </div>
              <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
                <motion.div variants={fadeLeft} transition={{ duration: 0.4 }}><FactorCard title="Lumină" text="Expunerea la lumină stimulează simultan formarea clorofilei și a glicoalcaloizilor." /></motion.div>
                <motion.div variants={fadeLeft} transition={{ duration: 0.4 }}><FactorCard title="Deteriorare mecanică" text="Loviturile, tăieturile și atacul insectelor activează răspunsul defensiv al plantei." /></motion.div>
                <motion.div variants={fadeLeft} transition={{ duration: 0.4 }}><FactorCard title="Temperaturi joase" text="Depozitarea la rece, sub aproximativ 7°C, poate favoriza acumularea de compuși toxici." /></motion.div>
                <motion.div variants={fadeLeft} transition={{ duration: 0.4 }}><FactorCard title="Germinare" text="Germenii și zonele din jurul lor pot concentra cantități mari de solanină." /></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── ȘTIAȚI CĂ? ── */}
        <section className="section-shell py-12 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle icon={<Zap className="h-6 w-6" />} title="Știați că?" />
          </motion.div>
          <motion.div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            {[
              { emoji: "🥔", fact: "Un cartof complet verde poate conține până la 100 mg de solanină — suficient pentru a provoca simptome la un copil." },
              { emoji: "🌡️", fact: "Solanina rezistă la temperaturi de gătire obișnuite. Nici fierberea, nici prăjirea nu o elimină complet — se descompune abia la ~243°C." },
              { emoji: "🍅", fact: "Tomatele verzi conțin tomatină, un 'văr chimic' al solaninei. Pe măsură ce roșia se coace, nivelul scade dramatic." },
              { emoji: "⚔️", fact: "În Evul Mediu, cartofii erau priviți cu suspiciune în Europa. Unii credeau că provoacă lepră, tocmai din cauza efectelor toxice ale solaninei." },
              { emoji: "🛡️", fact: "Solanina este de fapt un pesticid natural — planta o produce pentru a se apăra de insecte, ciuperci și animale erbivore." },
              { emoji: "🔬", fact: "Cercetările recente sugerează că solanina ar putea avea proprietăți anti-tumorale, dar dozele necesare sunt prea aproape de cele toxice." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="soft-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="text-3xl">{item.emoji}</span>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.fact}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── BIBLIOGRAFIE ── */}
        <section id="bibliografie" className="section-shell py-12 pb-24 md:py-20 md:pb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle icon={<BookOpen className="h-6 w-6" />} title="Bibliografie și siteografie" />
          </motion.div>
          <motion.div className="mt-8 soft-card p-8 md:p-10" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <ol className="list-decimal space-y-5 pl-5 text-foreground/85">
              {bibliography.map((item) => (
                <li key={item.href}>
                  <span>{item.text}</span><br />
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary underline underline-offset-4">{item.href}</a>
                </li>
              ))}
            </ol>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/60 py-8 text-center text-sm text-muted-foreground">
        <div className="section-shell">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground"
          >
            Realizat de{" "}
            <motion.span
              className="font-bold text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Iurașcu Iulian, Chiribau Elena si Manole Ana
            </motion.span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

/* ───────── sub-components ───────── */

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{icon}</div>
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
