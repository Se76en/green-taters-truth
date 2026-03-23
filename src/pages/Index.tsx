import heroImage from "@/assets/green-potatoes-hero.jpg";
import { Leaf, Skull, FlaskConical, BookOpen, AlertTriangle, ChevronDown } from "lucide-react";

const sections = [
  { id: "despre", label: "Ce este?" },
  { id: "plante", label: "Plante" },
  { id: "toxicitate", label: "Toxicitate" },
  { id: "biosinteza", label: "Biosinteză" },
  { id: "bibliografie", label: "Bibliografie" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            🥔 Solanina
          </span>
          <ul className="hidden md:flex gap-6 text-sm font-semibold text-muted-foreground">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-primary transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[85vh] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Cartofi verzi cu germeni pe o masă de lemn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Solanina
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl opacity-90" style={{ fontFamily: "var(--font-body)" }}>
            Glicoalcaloidul toxic din cartofii verzi — un mecanism de apărare al plantei
            care poate deveni periculos pentru om.
          </p>
          <a href="#despre" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">
            Descoperă mai mult <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </header>

      {/* Ce este solanina */}
      <section id="despre" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="Ce este solanina?" />
          <p className="text-lg leading-relaxed text-foreground/85 mb-6">
            <strong>Solanina</strong> (C₄₅H₇₃NO₁₅) este un <em>glicoalcaloid</em> toxic produs în mod natural
            de plantele din familia <strong>Solanaceae</strong>. Este un compus amărui cu rol de protecție
            împotriva insectelor, fungilor și erbivorelor.
          </p>
          <p className="text-lg leading-relaxed text-foreground/85 mb-6">
            Structura sa chimică este formată dintr-un nucleu steroidal (solanidina) legat de un
            trizaharid format din glucoză, galactoză și ramnoză. Această structură îi conferă
            capacitatea de a interacționa cu membranele celulare, perturbându-le integritatea.
          </p>
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">Formula moleculară</p>
            <p className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
              C₄₅H₇₃NO₁₅
            </p>
            <p className="text-sm text-muted-foreground mt-1">Masă molară: 868,06 g/mol</p>
          </div>
        </div>
      </section>

      {/* Plante */}
      <section id="plante" className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="Plante care conțin solanină" />
          <p className="text-lg leading-relaxed text-foreground/85 mb-8">
            Solanina se găsește în mai multe specii din familia Solanaceae:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Cartoful (Solanum tuberosum)", detail: "Concentrații mari în coajă verde, germeni și părțile expuse la lumină. 20–100 mg/kg în cartofi normali, peste 1000 mg/kg în cei verzi." },
              { name: "Tomatele verzi (Solanum lycopersicum)", detail: "Conțin tomatină, un alcaloid înrudit. Scade semnificativ la coacere." },
              { name: "Pătlăgele vinete (Solanum melongena)", detail: "Concentrații mici, în general sub pragul toxic." },
              { name: "Mătrăguna (Atropa belladonna)", detail: "Conține atropină și scopolamină, alcaloizi diferiți dar din aceeași familie." },
              { name: "Zărnacica (Solanum dulcamara)", detail: "Conține solanină și soladulcidină, toate părțile plantei sunt toxice." },
              { name: "Datura (Datura stramonium)", detail: "Conține tropanalcaloizi cu efecte halucinogene și toxice puternice." },
            ].map((plant) => (
              <div key={plant.name} className="bg-background rounded-lg p-5 border border-border">
                <h3 className="font-bold text-primary mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {plant.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{plant.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toxicitate */}
      <section id="toxicitate" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader icon={<Skull className="w-6 h-6" />} title="Cât de toxică este solanina?" />

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-foreground mb-1">Atenție</p>
              <p className="text-sm text-foreground/80">
                Solanina <strong>nu este distrusă prin gătire</strong>. Fierberea, prăjirea sau coacerea
                nu elimină complet toxina. Temperatura de descompunere este de ~243°C.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              <strong>Doza toxică</strong> pentru om este de aproximativ <strong>2–5 mg/kg greutate corporală</strong>.
              Pentru o persoană de 70 kg, aceasta înseamnă 140–350 mg de solanină.
            </p>
            <p>
              <strong>Doza letală (LD₅₀)</strong> la șoareci este de aproximativ 42 mg/kg (oral).
              La om, doza letală estimată este de <strong>3–6 mg/kg</strong>, deși cazurile fatale sunt rare.
            </p>

            <h3 className="text-xl font-bold text-primary pt-4" style={{ fontFamily: "var(--font-heading)" }}>
              Simptome de intoxicație
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Greață, vărsături, diaree, crampe abdominale</li>
              <li>Cefalee, amețeli, confuzie</li>
              <li>Febră, tahicardie</li>
              <li>În cazuri severe: halucinații, paralizie, comă</li>
              <li>Deces (extrem de rar, la doze foarte mari)</li>
            </ul>

            <h3 className="text-xl font-bold text-primary pt-4" style={{ fontFamily: "var(--font-heading)" }}>
              Context practic
            </h3>
            <p>
              Un cartof normal conține ~7,5 mg solanină per 100g. Cartofii verzi pot conține
              <strong> peste 100 mg/100g</strong>. Practic, consumul a 1-2 cartofi verzi mari poate produce
              simptome la un adult, iar pentru copii pragul este mult mai mic.
            </p>
          </div>
        </div>
      </section>

      {/* Biosinteza */}
      <section id="biosinteza" className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Biosinteza solaninei în cartof" />

          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Producerea solaninei în cartofi este un <strong>mecanism de apărare</strong> declanșat de
              condiții de stres, în special <strong>expunerea la lumină</strong>.
            </p>

            <h3 className="text-xl font-bold text-primary pt-4" style={{ fontFamily: "var(--font-heading)" }}>
              Calea biosintetică
            </h3>
            <div className="bg-background rounded-xl p-6 border border-border font-mono text-sm leading-loose">
              <p className="text-muted-foreground mb-2">Calea mevalonatului (MVA):</p>
              <p>Acetil-CoA → Mevalonat → IPP/DMAPP</p>
              <p>→ FPP (Farnesil pirofosfat)</p>
              <p>→ Squalen → Lanosterol → <strong>Colesterol</strong></p>
              <p>→ Colesterol + N → <strong>Solanidina</strong> (agliconul)</p>
              <p>→ Solanidina + Glc + Gal + Rha → <strong>α-Solanina</strong></p>
            </div>

            <h3 className="text-xl font-bold text-primary pt-4" style={{ fontFamily: "var(--font-heading)" }}>
              Factorii care stimulează producția
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lumina</strong> — factorul principal. Expunerea la lumină (naturală sau artificială) declanșează
                simultan producția de clorofilă (verzirea) și de glicoalcaloizi.</li>
              <li><strong>Deteriorarea mecanică</strong> — tăieturi, lovituri sau atacul insectelor stimulează
                biosinteza locală de solanină ca răspuns de apărare.</li>
              <li><strong>Temperatura scăzută</strong> — depozitarea sub 7°C crește acumularea de glicoalcaloizi.</li>
              <li><strong>Germinarea</strong> — germenii concentrează cele mai mari cantități de solanină
                (până la 5000 mg/kg).</li>
            </ul>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mt-8">
              <p className="font-semibold text-primary mb-2">💡 De reținut</p>
              <p className="text-foreground/80">
                Verzirea cartofului (datorată clorofilei) nu este în sine toxică, dar este un
                <strong> indicator vizual</strong> că solanina a fost produsă în concentrații crescute.
                Clorofila și solanina sunt sintetizate prin căi diferite, dar ambele sunt declanșate
                de aceeași stimuli (lumina).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bibliografie */}
      <section id="bibliografie" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader icon={<BookOpen className="w-6 h-6" />} title="Bibliografie și resurse" />
          <ol className="list-decimal pl-6 space-y-4 text-foreground/85">
            <li>
              Friedman, M. (2006). „Potato Glycoalkaloids and Metabolites: Roles in the Plant and in the Diet."
              <em> Journal of Agricultural and Food Chemistry</em>, 54(23), 8655–8681.
              <br />
              <a href="https://doi.org/10.1021/jf061471t" target="_blank" rel="noopener noreferrer"
                className="text-primary underline text-sm">doi:10.1021/jf061471t</a>
            </li>
            <li>
              Nema, P. K. et al. (2008). „Potato Glycoalkaloids: Formation, Toxicity and Strategies for Reduction."
              <em> Food Science and Technology</em>.
            </li>
            <li>
              WHO/FAO (1999). „Solanine and Chaconine." <em>WHO Food Additives Series</em>, 42.
              <br />
              <a href="https://inchem.org/documents/jecfa/jecmono/v042je04.htm" target="_blank" rel="noopener noreferrer"
                className="text-primary underline text-sm">inchem.org</a>
            </li>
            <li>
              Hellenäs, K.-E. et al. (1995). „High levels of glycoalkaloids in the established Swedish potato
              variety Magnum Bonum." <em>Journal of the Science of Food and Agriculture</em>, 68(2), 249–255.
            </li>
            <li>
              Mensinga, T. T. et al. (2005). „Potato glycoalkaloids and adverse effects in humans: an ascending
              dose study." <em>Regulatory Toxicology and Pharmacology</em>, 41(1), 66–72.
              <br />
              <a href="https://doi.org/10.1016/j.yrtph.2004.09.004" target="_blank" rel="noopener noreferrer"
                className="text-primary underline text-sm">doi:10.1016/j.yrtph.2004.09.004</a>
            </li>
            <li>
              Wikipedia — „Solanine."
              <br />
              <a href="https://en.wikipedia.org/wiki/Solanine" target="_blank" rel="noopener noreferrer"
                className="text-primary underline text-sm">en.wikipedia.org/wiki/Solanine</a>
            </li>
          </ol>
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
    <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
      {title}
    </h2>
  </div>
);

export default Index;
