import './App.css'

const hepatitisData = [
  {
    id: 1,
    title: "GEPATIT A (HAV)",
    model: "https://sketchfab.com/models/a1159b9592ab4258ba073e95ed756237/embed?autospin=1&autostart=1",
    virusType: "RNA virus, Picornaviridae",
    affectedGroup: "Ko'proq bolalar, maktab jamoalari, sayohatchilar",
    transmission: [
      "Fekal–oral (iflos suv, yuvilmagan meva–sabzavot)",
      "Oziq-ovqat orqali",
      "Qo'l yuvmaslikdan"
    ],
    pathogenesis: "Virus ichakdan qonga, keyin jigarga boradi → akut yallig'lanish, lekin surunkali bo'lmaydi, sirozga olib kelmaydi.",
    symptoms: [
      "Odatda oson kechadi",
      "Isitma",
      "Ko'ngil aynish, qusish",
      "O'ng qovurg'a ostida og'riq",
      "Teri va ko'zlarning sarg'ayishi"
    ],
    risks: [
      "Sirozga olib kelmaydi",
      "Kronik bo'lmaydi",
      "Kamdan-kam: fulminant (og'ir) gepatit"
    ],
    diagnosis: [
      "Anti-HAV IgM (akut)",
      "Anti-HAV IgG (o'tgan infeksiya)"
    ],
    treatment: [
      "Antiviral yo'q. Faqat simptomatik yordam.",
      "Ko'p suyuqlik, ovqatni yengil qilish.",
      "Odatda 2–8 haftada to'liq tuzalish."
    ],
    prevention: [
      "Vaksina bor, juda samarali.",
      "Gigiena, toza suv."
    ],
    color: "#4CAF50"
  },
  {
    id: 2,
    title: "GEPATIT B (HBV)",
    model: "https://sketchfab.com/models/5d3b8961e04547ff92e07c08c922d0e2/embed?autospin=1&autostart=1",
    virusType: "DNA virus, Hepadnaviridae",
    affectedGroup: "Surunkali shaklga o'tishi mumkin",
    transmission: [
      "Qon orqali (ignalar, jarrohlik asboblari)",
      "Jinsiy aloqa",
      "Onadan bolaga (perinatal)",
      "Tatuirovka, manikyur steril bo'lmasa"
    ],
    pathogenesis: "HBV jigar hujayralariga kirib, immun tizim javobi orqali hujayralarni shikastlaydi → fibroz → siroz → jigar saratoni (HCC) xavfi ortadi. Surunkali shakl 5–10% kattalarda, chaqaloqlarda 90%!",
    symptoms: [
      "Akutda: Charchoq, ishtaha yo'qolishi",
      "Ko'ngil aynish",
      "Sarg'ayish",
      "Teri qichishi",
      "Surunkalida: Ko'p yillar hech belgi bermasligi mumkin!"
    ],
    risks: [
      "Surunkali infeksiya xavfi",
      "Siroz va jigar saratoni",
      "Chaqaloqlarda 90% surunkali shakl"
    ],
    diagnosis: [
      "HBsAg — asosiy marker (infeksiya bor)",
      "Anti-HBc IgM — akut infeksiya",
      "Anti-HBc IgG — o'tgan infeksiya",
      "HBeAg — faol ko'payish",
      "HBV DNA — virus yuki"
    ],
    treatment: [
      "Surunkalida: Tenofovir, Entekavir",
      "Akutda ko'pincha o'zi tuzaladi",
      "Og'ir holatlarda UTI"
    ],
    prevention: [
      "HBV vaksina (3 dozali)",
      "Qon bilan ishlaganda sterilizatsiya",
      "Jinsiy himoya"
    ],
    color: "#2196F3"
  },
  {
    id: 3,
    title: "GEPATIT C (HCV)",
    model: "https://sketchfab.com/models/31e91272d01e4ec2837156f5aab9cc3a/embed?autospin=1&autostart=1",
    virusType: "RNA virus, Flaviviridae",
    affectedGroup: "Eng ko'p surunkali bo'ladigan gepatit",
    transmission: [
      "Qon orqali (ignalar, tibbiy asboblar)",
      "Onadan bolaga (kam)",
      "Jinsiy aloqa – juda kam hollarda",
      "Tatuirovka, pirsing steril bo'lmasa"
    ],
    pathogenesis: "HCV tez mutatsiyalanadi, immun tizim uni to'liq yo'q qila olmaydi → 80% hollarda surunkali shakl. Vaqt o'tishi bilan: Fibroz → Siroz → Jigar yetishmovchiligi → Gepatosellyulyar karsinoma.",
    symptoms: [
      "Ko'pchilikda yillar davomida hech qanday simptom bo'lmaydi!",
      "Charchoq",
      "O'ng qovurg'a osti og'riq",
      "Sarg'ayish kech bosqichda",
      "Qorinda suyuqlik (assit) sirozda"
    ],
    risks: [
      "80% surunkali shakl",
      "Siroz va jigar yetishmovchiligi",
      "Gepatosellyulyar karsinoma"
    ],
    diagnosis: [
      "Anti-HCV — skrining",
      "HCV RNA — virusning o'zi",
      "Fibrozni aniqlash — FibroScan"
    ],
    treatment: [
      "DAA (Direct Acting Antivirals)",
      "Sofosbuvir, Ledipasvir, Velpatasvir",
      "Harvoni, Epclusa kabi kombinatsiyalar",
      "95–99% bemorlar 12 hafta ichida to'liq tuzaladi."
    ],
    prevention: [
      "Vaksina yo'q",
      "Qon bilan ehtiyot chorasi",
      "Inyeksiya vositalarini bo'lishmaslik",
      "Steril asboblar"
    ],
    color: "#FF5722"
  }
]

export default function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Gepatit Virusi Shakllari</h1>
      <div className="author-info">
        <p className="author-name">Tolibova Marjona Bobir qizi</p>
        <p className="author-group">205-B guruh talabasi</p>
      </div>
      <div className="cards-container">
        {hepatitisData.map((hepatitis) => (
          <div key={hepatitis.id} className="card" style={{ borderTopColor: hepatitis.color }}>
            <div className="card-header" style={{ backgroundColor: hepatitis.color }}>
              <h2>{hepatitis.title}</h2>
            </div>

            <div className="model-container">
              <iframe
                title={hepatitis.title}
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src={hepatitis.model}
                className="model-iframe"
                loading="lazy"
              />
            </div>

            <div className="card-content">
              <div className="info-section">
                <h3>Virus turi:</h3>
                <p>{hepatitis.virusType}</p>
              </div>

              <div className="info-section">
                <h3>Kimlarda uchraydi:</h3>
                <p>{hepatitis.affectedGroup}</p>
              </div>

              <div className="info-section">
                <h3>Yuqushi:</h3>
                <ul>
                  {hepatitis.transmission.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Patogenezi:</h3>
                <p>{hepatitis.pathogenesis}</p>
              </div>

              <div className="info-section">
                <h3>Belgilar:</h3>
                <ul>
                  {hepatitis.symptoms.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Xavfi:</h3>
                <ul>
                  {hepatitis.risks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Tashxis:</h3>
                <ul>
                  {hepatitis.diagnosis.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Davosi:</h3>
                <ul>
                  {hepatitis.treatment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Oldini olish:</h3>
                <ul>
                  {hepatitis.prevention.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}