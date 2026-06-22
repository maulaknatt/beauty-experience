import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Tentang Pure Beauty Experience",
  description:
    "Pelajari latar belakang, tujuan, dan tentang acara Pure Beauty Experience × Emina — Exclusive beauty class yang mengedukasi dan memberdayakan perempuan di Bekasi.",
  alternates: { canonical: "https://beautyexperience.my.id/about" },
  openGraph: {
    title: "About | Pure Beauty Experience",
    description: "Discover Your Beauty, Empower Your Confidence — Beauty class eksklusif di Bekasi.",
    url: "https://beautyexperience.my.id/about",
  },
};

const rundown = [
  { time: "14.00–14.15", activity: "Registrasi Peserta" },
  { time: "14.15–14.30", activity: "Opening & Perkenalan MC" },
  { time: "14.30–15.15", activity: "Pengenalan Basic Skincare" },
  { time: "15.15–16.00", activity: "Demo MakeUp oleh MUA" },
  { time: "16.00–16.30", activity: "Praktik Peserta" },
  { time: "16.30–17.00", activity: "Q&A Session" },
  { time: "17.00–17.15", activity: "Game & Door Prize" },
  { time: "17.15–17.30", activity: "Closing & Foto Bersama" },
];

const visions = [
  "Menjadi sarana edukasi kecantikan yang inklusif dan edukatif bagi perempuan muda",
  "Membangun kepercayaan diri melalui pemahaman makeup dan skincare yang benar",
  "Menghubungkan perempuan produktif dalam komunitas kecantikan yang positif",
  "Menjadi jembatan antara dunia pendidikan, industri kecantikan, dan pelaku usaha lokal",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── PAGE HEADER ── */}
        <section className={styles.pageHeader}>
          <div className={styles.pageHeaderBg} />
          <div className={`container ${styles.pageHeaderContent}`}>
            <ScrollReveal>
              <div className="section-tag">🌸 Tentang Kami</div>
              <h1 className={styles.pageTitle}>
                Pure Beauty<br />
                <em className="text-gradient">Experience</em>
              </h1>
              <p className={styles.pageSubtitle}>
                Mengenal lebih dalam tentang event yang mengubah cara pandang
                perempuan terhadap kecantikan.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── LATAR BELAKANG ── */}
        <section className="section">
          <div className="container">
            <div className={styles.latarGrid}>
              <ScrollReveal direction="left">
                <div className={styles.latarImgWrap}>
                  <Image
                    src="/images/foto6.jpg"
                    alt="Beauty class peserta aktif belajar"
                    width={480}
                    height={560}
                    className={styles.latarImg}
                  />
                  <div className={styles.latarFloatCard}>
                    <div className={styles.latarFloatEmoji}>💡</div>
                    <div>
                      <div className={styles.latarFloatTitle}>Edukasi Kecantikan</div>
                      <div className={styles.latarFloatSub}>Edukatif & Interaktif</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className={styles.latarContent}>
                <ScrollReveal>
                  <div className="section-tag">📖 Latar Belakang</div>
                  <h2 className="section-title">Mengapa Beauty Experience Hadir?</h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <p className={styles.latarText}>
                    Perkembangan industri kecantikan menjadikan make-up tidak lagi sekadar
                    tren, tetapi juga bagian dari gaya hidup dan sarana untuk meningkatkan
                    rasa percaya diri. Bagi banyak perempuan muda, kemampuan merias diri
                    mendukung aktivitas pendidikan, pekerjaan, maupun kehidupan sosial.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className={styles.latarText}>
                    Namun, masih banyak perempuan yang belum memahami teknik make-up yang
                    tepat sesuai dengan karakter dan kebutuhan diri mereka. Khususnya
                    perempuan dengan kegiatan akademik, organisasi, pekerjaan, maupun
                    aktivitas sosial — diperlukan kegiatan yang edukatif untuk membantu
                    meningkatkan pengetahuan, keterampilan, dan rasa percaya diri secara
                    positif.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className={styles.latarText}>
                    Melalui <strong>Pure Beauty Experience 2026</strong> dengan tema{" "}
                    <em>&ldquo;Discover Your Beauty, Empower Your Confidence&rdquo;</em>,
                    peserta mendapatkan pengalaman belajar mengenal dasar-dasar kecantikan
                    dalam suasana yang edukatif, interaktif, dan menyenangkan.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className={styles.visionList}>
                    <h3 className={styles.visionTitle}>Tujuan Kami</h3>
                    {visions.map((v, i) => (
                      <div key={i} className={styles.visionItem}>
                        <CheckCircle size={18} className={styles.checkIcon} />
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── TENTANG ACARA ── */}
        <section className={`section ${styles.tentangSection}`}>
          <div className="container">
            <div className={styles.tentangGrid}>
              <div className={styles.tentangContent}>
                <ScrollReveal>
                  <div className="section-tag">🎪 Tentang Acara</div>
                  <h2 className="section-title">Beauty Class 2026</h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <p className={styles.tentangText}>
                    <strong>Pure Beauty Experience 2026</strong> merupakan kegiatan beauty
                    class yang dirancang untuk memberikan edukasi mengenai skincare, makeup,
                    serta membangun rasa percaya diri bagi generasi muda perempuan.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className={styles.tentangText}>
                    Kegiatan ini menghadirkan edukasi seru, demonstrasi makeup, praktik
                    langsung, dan sesi networking yang dikemas secara profesional. Selain
                    menjadi sarana pembelajaran bagi peserta, kegiatan ini juga mengajak
                    kolaborasi antara dunia pendidikan, industri kecantikan, dan pelaku
                    usaha lokal.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className={styles.collabBadge}>
                    <Image
                      src="/images/logo.jpeg"
                      alt="Pure Beauty Experience"
                      width={48}
                      height={48}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span className={styles.collabX}>×</span>
                    <div className={styles.collabEmina}>
                      <span className={styles.collabEminaText}>emina</span>
                      <span className={styles.collabEminaSub}>born to be loved</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={100}>
                <div className={styles.tentangImgWrap}>
                  <Image
                    src="/images/foto3.jpg"
                    alt="Pure Beauty Experience × Emina Products"
                    width={500}
                    height={500}
                    className={styles.tentangImg}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── RUNDOWN ── */}
        <section className="section">
          <div className="container">
            <div className={styles.rundownHeader}>
              <ScrollReveal>
                <div className="section-tag">📋 Rundown Kegiatan</div>
                <h2 className="section-title">Susunan Acara</h2>
                <p className="section-subtitle">
                  Setiap sesi dirancang untuk memberikan pengalaman belajar yang
                  interaktif, edukatif, dan menyenangkan.
                </p>
              </ScrollReveal>
            </div>

            <div className={styles.rundownList}>
              {rundown.map((item, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className={styles.rundownItem}>
                    <div className={styles.rundownNum}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={styles.rundownTime}>{item.time}</div>
                    <div className={styles.rundownDivider} />
                    <div className={styles.rundownActivity}>{item.activity}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOTO ACARA ── */}
        <section className={`section-sm ${styles.fotoSection}`}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.fotoGrid}>
                <Image src="/images/foto2.jpg" alt="Beauty Class event poster" width={400} height={500} className={styles.fotoItem} />
                <Image src="/images/foto4.jpg" alt="Rundown kegiatan" width={400} height={500} className={styles.fotoItem} />
                <Image src="/images/foto1.jpg" alt="Pure Beauty Experience x Emina" width={400} height={500} className={styles.fotoItem} />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
