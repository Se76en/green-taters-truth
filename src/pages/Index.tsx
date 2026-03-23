import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/green-potatoes-hero.jpg";
import structureImage from "@/assets/solanine-structure.png";
import { Leaf, Skull, FlaskConical, BookOpen, AlertTriangle, ChevronDown, Moon, Sun, Menu, X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTheme } from "@/hooks/useTheme";

const sections = [
  { id: "despre", label: "Ce este?" },
  { id: "structura", label: "Structură" },
  { id: "plante", label: "Plante" },
  { id: "toxicitate", label: "Toxicitate" },
  { id: "biosinteza", label: "Biosinteză" },
  { id: "bibliografie", label: "Bibliografie" },
];

const Index = () => {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight font-heading">🥔 Solanina</span>
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-6 text-sm font-semibold text-muted-foreground">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-primary transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
            <button onClick={toggle} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Schimbă tema">
              {dark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Meniu">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border bg-background px-6 pb-4 space-y-3"
            >
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={() => setMenuOpen(false)} className="block py-1 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero — diagonal split */}
      <header className="relative h-[90vh] flex items-end overflow-hidden">
        <img src={heroImage} alt="Cartofi verzi cu germeni" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        {/* Diagonal clip */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-6xl mx-auto px-6 pb-32"
        >
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-4 text-foreground">Solanina</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-foreground/80">
            Glicoalcaloidul toxic din cartofii verzi — un mecanism de apărare al plantei
            care poate deveni periculos pentru om.
          </p>
          <a href="#despre" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Descoperă mai mult <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </header>

      {/* Ce este solanina — offset card layout */}
      <section id="despre" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 items-start">
          <AnimatedSection className="md:col-span-3">
            <SectionHeader icon={<Leaf className="w-6 h-6" />} title="Ce este solanina?" />
            <p className="text-lg leading-relaxed text-foreground/85 mb-6">
              <strong>Solanina</strong> (C₄₅H₇₃NO₁₅) este un <em>glicoalcaloid</em> toxic produs în mod natural
              de plantele din familia <strong>Solanaceae</strong>. Este un compus amărui cu rol de protecție
              împotriva insectelor, fungilor și erbivorelor.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Structura sa chimică este formată dintr-un nucleu steroidal (solanidina) legat de un
              trizaharid format din glucoză, galactoză și ramnoză. Această structură îi conferă
              capacitatea de a interacționa cu membranele celulare, perturbându-le integritatea.
            </p>
          </AnimatedSection>
          <AnimatedSection className="md:col-span-2" delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">Formula moleculară</p>
              <p className="text-4xl font-black text-primary">C₄₅H₇₃NO₁₅</p>
              <p className="text-sm text-muted-foreground mt-2">Masă molară: 868,06 g/mol</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Punct de topire</p>
                <p className="text-lg font-bold text-foreground">271–273 °C</p>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Descompunere termică</p>
                <p className="text-lg font-bold text-accent">~243 °C</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Structura 2D */}
      <section id="structura" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Structura moleculară" />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <motion.img
                src={structureImage}
                alt="Structura 2D a solaninei"
                className="rounded-2xl border border-border shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="space-y-4 text-foreground/85">
                <p className="text-lg leading-relaxed">
                  Solanina este formată din două componente principale:
                </p>
                <div className="bg-background rounded-xl p-5 border border-border">
                  <h4 className="font-bold text-primary mb-1">Agliconul — Solanidina</h4>
                  <p className="text-sm text-muted-foreground">Un alcaloid steroidal cu structură de tip colestan, conținând un atom de azot integrat în inelul F al moleculei.</p>
                </div>
                <div className="bg-background rounded-xl p-5 border border-border">
                  <h4 className="font-bold text-primary mb-1">Trizaharidul — Solatrioza</h4>
                  <p className="text-sm text-muted-foreground">Format din D-glucoză, D-galactoză și L-ramnoză, legat la poziția C-3 a solandinei prin legătură glicozidică.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Plante — staggered grid */}
      <section id="plante" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader icon={<Leaf className="w-6 h-6" />} title="Plante care conțin solanină" />
            <p className="text-lg leading-relaxed text-foreground/85 mb-10 max-w-3xl">
              Solanina și alcaloizii înrudiți se găsesc în numeroase specii din familia Solanaceae, dar și în alte familii de plante:
            </p>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Cartoful", latin: "Solanum tuberosum", detail: "Concentrații mari în coajă verde, germeni și părțile expuse la lumină. 20–100 mg/kg în cartofi normali, peste 1000 mg/kg în cei verzi.", danger: "high" },
              { name: "Tomatele verzi", latin: "Solanum lycopersicum", detail: "Conțin tomatină, un alcaloid înrudit. Nivelul scade semnificativ la coacere.", danger: "medium" },
              { name: "Pătlăgelele vinete", latin: "Solanum melongena", detail: "Concentrații mici de solasonină și solamargină, în general sub pragul toxic.", danger: "low" },
              { name: "Ardeiul", latin: "Capsicum annuum", detail: "Conține capsaicinoizi și urme de glicoalcaloizi. Nu prezintă risc semnificativ.", danger: "low" },
              { name: "Mătrăguna", latin: "Atropa belladonna", detail: "Conține atropină și scopolamină — alcaloizi tropanici cu efecte anticolinergice puternice.", danger: "high" },
              { name: "Zărnacica", latin: "Solanum dulcamara", detail: "Conține solanină și soladulcidină. Toate părțile plantei sunt toxice.", danger: "high" },
              { name: "Datura", latin: "Datura stramonium", detail: "Conține tropanalcaloizi (scopolamină, atropină) cu efecte halucinogene și toxice puternice.", danger: "high" },
              { name: "Lăcrămioarele", latin: "Solanum nigrum", detail: "Fructele necoapte conțin solanină. Fructele coapte sunt consumate în unele culturi, dar cu precauție.", danger: "medium" },
              { name: "Goji", latin: "Lycium barbarum", detail: "Membră a familiei Solanaceae, conține urme de alcaloizi, dar fructele coapte sunt considerate sigure.", danger: "low" },
            ].map((plant, i) => (
              <AnimatedSection key={plant.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card rounded-xl p-5 border border-border h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-foreground">{plant.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      plant.danger === "high" ? "bg-destructive/15 text-destructive" :
                      plant.danger === "medium" ? "bg-accent/15 text-accent" :
                      "bg-primary/15 text-primary"
                    }`}>
                      {plant.danger === "high" ? "toxic" : plant.danger === "medium" ? "moderat" : "sigur"}
                    </span>
                  </div>
                  <p className="text-xs text-primary italic mb-2">{plant.latin}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plant.detail}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Toxicitate — side accent bar layout */}
      <section id="toxicitate" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader icon={<Skull className="w-6 h-6" />} title="Cât de toxică este solanina?" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-10 flex gap-4 items-start max-w-3xl">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">Atenție</p>
                <p className="text-sm text-foreground/80">
                  Solanina <strong>nu este distrusă prin gătire</strong>. Fierberea, prăjirea sau coacerea
                  nu elimină complet toxina. Temperatura de descompunere este de ~243°C.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="border-l-4 border-primary pl-6 space-y-6 text-foreground/85">
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-1">Doza toxică</p>
                  <p className="text-2xl font-black text-foreground">2–5 mg/kg</p>
                  <p className="text-sm text-muted-foreground">greutate corporală (140–350 mg pentru 70 kg)</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-1">Doza letală (LD₅₀)</p>
                  <p className="text-2xl font-black text-foreground">3–6 mg/kg</p>
                  <p className="text-sm text-muted-foreground">la om (cazurile fatale sunt rare)</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-1">Cartofi normali</p>
                  <p className="text-lg font-bold text-primary">~7,5 mg / 100g</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-1">Cartofi verzi</p>
                  <p className="text-lg font-bold text-destructive">&gt;100 mg / 100g</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Simptome de intoxicație</h3>
                <div className="space-y-3">
                  {[
                    { stage: "Ușoare", items: "Greață, vărsături, diaree, crampe abdominale" },
                    { stage: "Moderate", items: "Cefalee, amețeli, confuzie, febră, tahicardie" },
                    { stage: "Severe", items: "Halucinații, paralizie, comă" },
                    { stage: "Letale", items: "Deces (extrem de rar, la doze foarte mari)" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.stage}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex gap-3 items-start"
                    >
                      <span className={`text-xs font-bold uppercase tracking-wider mt-1 min-w-[70px] ${
                        i < 2 ? "text-accent" : "text-destructive"
                      }`}>{s.stage}</span>
                      <p className="text-sm text-foreground/80">{s.items}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-background rounded-xl p-5 border border-border mt-4">
                  <p className="text-sm text-foreground/80">
                    <strong>Context practic:</strong> Consumul a 1-2 cartofi verzi mari poate produce
                    simptome la un adult. Pentru copii, pragul este mult mai mic.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Biosinteza — timeline style */}
      <section id="biosinteza" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Biosinteza solaninei" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h3 className="text-xl font-bold text-foreground mb-6">Calea biosintetică</h3>
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/30" />
                {[
                  { step: "Acetil-CoA", desc: "Precursorul universal" },
                  { step: "Mevalonat", desc: "Calea MVA" },
                  { step: "IPP / DMAPP", desc: "Unități izopren activate" },
                  { step: "Farnesil pirofosfat (FPP)", desc: "Condensare" },
                  { step: "Squalen → Colesterol", desc: "Ciclizare" },
                  { step: "Solanidina", desc: "Agliconul (+ atom de N)" },
                  { step: "α-Solanina", desc: "Glicozilare: + Glc + Gal + Rha" },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="relative mb-6 last:mb-0"
                  >
                    <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    <p className="font-bold text-foreground text-sm">{item.step}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h3 className="text-xl font-bold text-foreground mb-6">Factori stimulatori</h3>
              <div className="space-y-4">
                {[
                  { factor: "☀️ Lumina", text: "Factorul principal. Declanșează simultan producția de clorofilă (verzirea) și de glicoalcaloizi." },
                  { factor: "🔨 Deteriorarea mecanică", text: "Tăieturi, lovituri sau atacul insectelor stimulează biosinteza locală ca răspuns de apărare." },
                  { factor: "❄️ Temperatura scăzută", text: "Depozitarea sub 7°C crește acumularea de glicoalcaloizi." },
                  { factor: "🌱 Germinarea", text: "Germenii concentrează cele mai mari cantități — până la 5000 mg/kg." },
                ].map((f) => (
                  <motion.div
                    key={f.factor}
                    whileHover={{ x: 4 }}
                    className="bg-card rounded-xl p-5 border border-border"
                  >
                    <p className="font-bold text-foreground mb-1">{f.factor}</p>
                    <p className="text-sm text-muted-foreground">{f.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 mt-8">
                <p className="font-semibold text-primary mb-2">💡 De reținut</p>
                <p className="text-sm text-foreground/80">
                  Verzirea cartofului (datorată clorofilei) nu este în sine toxică, dar este un
                  <strong> indicator vizual</strong> că solanina a fost produsă în concentrații crescute.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bibliografie */}
      <section id="bibliografie" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeader icon={<BookOpen className="w-6 h-6" />} title="Bibliografie și resurse" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ol className="list-decimal pl-6 space-y-4 text-foreground/85">
              <li>Friedman, M. (2006). „Potato Glycoalkaloids and Metabolites." <em>J. Agric. Food Chem.</em>, 54(23), 8655–8681. <br /><a href="https://doi.org/10.1021/jf061471t" target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">doi:10.1021/jf061471t</a></li>
              <li>Nema, P. K. et al. (2008). „Potato Glycoalkaloids: Formation, Toxicity and Strategies for Reduction." <em>Food Sci. Technol.</em></li>
              <li>WHO/FAO (1999). „Solanine and Chaconine." <em>WHO Food Additives Series</em>, 42. <br /><a href="https://inchem.org/documents/jecfa/jecmono/v042je04.htm" target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">inchem.org</a></li>
              <li>Hellenäs, K.-E. et al. (1995). „High levels of glycoalkaloids in the established Swedish potato variety Magnum Bonum." <em>J. Sci. Food Agric.</em>, 68(2), 249–255.</li>
              <li>Mensinga, T. T. et al. (2005). „Potato glycoalkaloids and adverse effects in humans." <em>Regul. Toxicol. Pharmacol.</em>, 41(1), 66–72. <br /><a href="https://doi.org/10.1016/j.yrtph.2004.09.004" target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">doi:10.1016/j.yrtph.2004.09.004</a></li>
              <li>Wikipedia — „Solanine." <br /><a href="https://en.wikipedia.org/wiki/Solanine" target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">en.wikipedia.org/wiki/Solanine</a></li>
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>Proiect informativ despre solanină. Informațiile prezentate au caracter educativ.</p>
        <p className="mt-1">© 2026 — Realizat cu Lovable</p>
      </footer>
    </div>
  );
};

const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
  </div>
);

export default Index;
