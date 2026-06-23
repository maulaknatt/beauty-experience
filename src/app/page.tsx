import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Star, Heart, Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Pure Beauty Experience × Emina — Exclusive beauty class di Tomoro Coffee, Golden City, Bekasi. Discover Your Beauty, Empower Your Confidence.",
};

const benefits = [
  { icon: "🎓", title: "E-Certificate", desc: "Sertifikat digital resmi sebagai bukti partisipasi" },
  { icon: "🎟️", title: "Voucher Belanja", desc: "Voucher belanja Emina senilai Rp 75.000" },
  { icon: "💄", title: "Live Makeup Experience", desc: "Demo dan praktik makeup langsung oleh MUA profesional" },
  { icon: "☕", title: "Food & Drink", desc: "Free food & drink dari Tomoro Coffee" },
  { icon: "🎨", title: "Alat Make Up", desc: "Seluruh alat dan produk makeup disediakan panitia" },
  { icon: "🛍️", title: "Free Goodie Bag", desc: "Goodie bag eksklusif berisi produk-produk Emina" },
];

const stats = [
  { icon: <Users size={24} />, value: "15+", label: "Peserta" },
  { icon: <Star size={24} />, value: "100%", label: "Kepuasan" },
  { icon: <Award size={24} />, value: "1", label: "Kolaborasi Brand" },
  { icon: <Heart size={24} />, value: "∞", label: "Kenangan" },
];

const previewImages = [
  { src: "/images/foto3.jpg", alt: "Beauty Class dengan Emina Expert" },
  { src: "/images/foto4.jpg", alt: "Rundown Kegiatan Beauty Experience" },
  { src: "/images/foto5.jpg", alt: "Pure Beauty Experience × Emina Products" },
  { src: "/images/foto6.jpg", alt: "Beauty Class Benefits" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroBlobs}>
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />
          </div>

          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroLeft}>
              <ScrollReveal>
                <div className="section-tag">
                  ✨ Beauty Class × Emina
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className={styles.heroTitle}>
                  <span className="text-gradient">Pure Beauty</span>
                  <br />
                  <span>Experience</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className={styles.heroTagline}>
                  &ldquo;Discover Your Beauty, Empower Your Confidence&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className={styles.heroDesc}>
                  Exclusive beauty class yang memadukan edukasi skincare, demo makeup
                  profesional, dan networking seru bersama perempuan-perempuan luar biasa
                  di Bekasi.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className={styles.heroMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    <span>21 Juni 2026</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={16} />
                    <span>Tomoro Coffee, Golden City Bekasi</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={16} />
                    <span>14.00 – Selesai</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className={styles.heroCtas}>
                  <Link href="/gallery" className="btn btn-primary">
                    Lihat Gallery <ChevronRight size={18} />
                  </Link>
                  <Link href="/about" className="btn btn-secondary">
                    Tentang Event
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.heroRight}>
              <ScrollReveal direction="right" delay={200}>
                <div className={`${styles.heroImgFrame} animate-float`}>
                  <Image
                    src="/images/logo.jpeg"
                    alt="Pure Beauty Experience Logo"
                    width={380}
                    height={380}
                    className={styles.heroLogo}
                    priority
                  />
                  <div className={styles.heroBadge1}>
                    <span>×</span>
                    <Image src="/images/foto5.jpg" alt="x Emina" width={48} height={48} style={{borderRadius: '50%', objectFit: 'cover'}} />
                    <span className={styles.badgeText}>Emina</span>
                  </div>
                  <div className={styles.heroBadge2}>
                    <span>🏆</span>
                    <span>Beauty Class</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className={styles.heroScrollHint}>
            <div className={styles.scrollDot} />
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={`${styles.statsSection} section-sm`}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 80}>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>{s.icon}</div>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVENT INFO ── */}
        <section className="section">
          <div className="container">
            <div className={styles.eventInfoGrid}>
              <ScrollReveal direction="left">
                <div className={styles.eventImgWrap}>
                  <Image
                    src="/images/foto1.jpg"
                    alt="Pure Beauty Experience × Emina event poster"
                    width={520}
                    height={580}
                    className={styles.eventImg}
                  />
                  <div className={styles.eventImgBadge}>
                    <span>🌸</span> Collaboration Event
                  </div>
                </div>
              </ScrollReveal>

              <div className={styles.eventInfoContent}>
                <ScrollReveal>
                  <div className="section-tag">🎀 Tentang Event</div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="section-title">
                    Beauty Class<br />
                    <em style={{color: 'var(--color-primary)'}}>in Collaboration With</em><br />
                    Emina Cosmetics
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="section-subtitle">
                    Sebuah pengalaman kecantikan eksklusif yang dirancang untuk memberikan
                    edukasi makeup, skincare, dan membangun rasa percaya diri bagi generasi
                    muda perempuan.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className={styles.infoDetails}>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Speaker</span>
                      <span className={styles.infoVal}>Alifia Safa (Beauty Expert)</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Tanggal</span>
                      <span className={styles.infoVal}>21 Juni 2026</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Waktu</span>
                      <span className={styles.infoVal}>14.00 WIB – Selesai</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Venue</span>
                      <span className={styles.infoVal}>Tomoro Coffee, Golden City, Bekasi Utara</span>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <Link href="/about" className="btn btn-primary" style={{marginTop: '8px'}}>
                    Baca Selengkapnya <ChevronRight size={18} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className={`section ${styles.benefitsSection}`}>
          <div className="container">
            <div className={styles.benefitsHeader}>
              <ScrollReveal>
                <div className="section-tag">🎁 Yang Kamu Dapat</div>
                <h2 className="section-title">What You Will Get</h2>
                <p className="section-subtitle">
                  Setiap peserta mendapatkan pengalaman dan manfaat yang tak terlupakan
                  dari event eksklusif ini.
                </p>
              </ScrollReveal>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 80}>
                  <div className={`card ${styles.benefitCard}`}>
                    <div className={styles.benefitIcon}>{b.icon}</div>
                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                    <p className={styles.benefitDesc}>{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY TEASER ── */}
        <section className="section">
          <div className="container">
            <div className={styles.galleryTeaserHeader}>
              <ScrollReveal>
                <div className="section-tag">📸 Dokumentasi</div>
                <h2 className="section-title">Momen Berkesan</h2>
                <p className="section-subtitle">
                  Abadikan setiap momen berharga dari Beauty Experience bersama
                  sahabat-sahabat cantikmu.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link href="/gallery" className="btn btn-secondary">
                  Lihat Semua <ChevronRight size={18} />
                </Link>
              </ScrollReveal>
            </div>

            <div className={styles.galleryPreviewGrid}>
              {previewImages.map((img, i) => (
                <ScrollReveal key={img.src} delay={i * 80}>
                  <Link href="/gallery" className={styles.galleryPreviewCard}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={300}
                      className={styles.galleryPreviewImg}
                    />
                    <div className={styles.galleryPreviewOverlay}>
                      <span>Lihat Gallery</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaBannerBg} />
          <div className="container">
            <ScrollReveal>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Ada Pertanyaan?</h2>
                <p className={styles.ctaDesc}>
                  Hubungi kami melalui WhatsApp atau Instagram untuk informasi lebih lanjut
                  tentang event Beauty Experience.
                </p>
                <div className={styles.ctaBtns}>
                  <a
                    href="https://wa.me/6285939242672"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    💬 Chat WhatsApp
                  </a>
                  <Link href="/contact" className="btn btn-secondary" style={{borderColor: 'rgba(255,255,255,0.5)', color: '#fff'}}>
                    Lihat Kontak
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
