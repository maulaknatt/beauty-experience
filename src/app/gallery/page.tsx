"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react";
import styles from "./page.module.css";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const mediaItems: MediaItem[] = [
  { type: "image", src: "/images/foto1.jpg", alt: "Pure Beauty Experience × Emina – Poster Event" },
  { type: "image", src: "/images/foto2.jpg", alt: "Beauty Class with Emina Expert – 21 Juni 2026" },
  { type: "image", src: "/images/foto3.jpg", alt: "Pure Beauty Experience × Emina Products" },
  { type: "image", src: "/images/foto4.jpg", alt: "Rundown Kegiatan Beauty Experience" },
  { type: "image", src: "/images/foto5.jpg", alt: "Emina Products – Beauty Class Bekasi" },
  { type: "image", src: "/images/foto6.jpg", alt: "Beauty Class Collaboration Emina" },
  { type: "video", src: "/videos/video1.mp4", alt: "Dokumentasi Beauty Experience 1" },
  { type: "video", src: "/videos/video2.mp4", alt: "Dokumentasi Beauty Experience 2" },
  { type: "video", src: "/videos/video3.mp4", alt: "Dokumentasi Beauty Experience 3" },
  { type: "video", src: "/videos/video4.mp4", alt: "Dokumentasi Beauty Experience 4" },
  { type: "video", src: "/videos/video5.mp4", alt: "Dokumentasi Beauty Experience 5" },
  { type: "video", src: "/videos/video6.mp4", alt: "Dokumentasi Beauty Experience 6" },
  { type: "video", src: "/videos/video7.mp4", alt: "Dokumentasi Beauty Experience 7" },
  { type: "video", src: "/videos/video8.mp4", alt: "Dokumentasi Beauty Experience 8" },
  { type: "video", src: "/videos/video9.mp4", alt: "Dokumentasi Beauty Experience 9" },
];

type FilterType = "all" | "photo" | "video";

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = mediaItems.filter((m) =>
    filter === "all" ? true : filter === "photo" ? m.type === "image" : m.type === "video"
  );

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0));
  }, [filtered.length]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <Navbar />
      <main>
        {/* ── PAGE HEADER ── */}
        <section className={styles.pageHeader}>
          <div className={styles.pageHeaderBg} />
          <div className={`container ${styles.pageHeaderContent}`}>
            <ScrollReveal>
              <div className="section-tag">📸 Dokumentasi</div>
              <h1 className={styles.pageTitle}>
                Gallery<br />
                <em className="text-gradient">Momen Berkesan</em>
              </h1>
              <p className={styles.pageSubtitle}>
                Kumpulan foto dan video dokumentasi dari Beauty Experience 2026 —
                kenangan indah bersama peserta dan seluruh tim.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FILTER ── */}
        <section className={styles.filterSection}>
          <div className="container">
            <div className={styles.filterRow}>
              <button
                className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
                onClick={() => setFilter("all")}
              >
                Semua ({mediaItems.length})
              </button>
              <button
                className={`${styles.filterBtn} ${filter === "photo" ? styles.active : ""}`}
                onClick={() => setFilter("photo")}
              >
                <ImageIcon size={16} />
                Foto ({mediaItems.filter((m) => m.type === "image").length})
              </button>
              <button
                className={`${styles.filterBtn} ${filter === "video" ? styles.active : ""}`}
                onClick={() => setFilter("video")}
              >
                <Play size={16} />
                Video ({mediaItems.filter((m) => m.type === "video").length})
              </button>
            </div>
          </div>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className={`section-sm ${styles.gallerySection}`}>
          <div className="container">
            <div className={styles.galleryGrid}>
              {filtered.map((item, i) => (
                <ScrollReveal key={item.src} delay={(i % 4) * 60}>
                  {item.type === "image" ? (
                    /* ── Photo card ── */
                    <button
                      className={styles.galleryCard}
                      onClick={() => openLightbox(i)}
                      aria-label={`Buka foto: ${item.alt}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={400}
                        height={400}
                        className={styles.galleryImg}
                      />
                      <div className={styles.galleryCardOverlay}>
                        <span className={styles.galleryCardLabel}>{item.alt}</span>
                      </div>
                    </button>
                  ) : (
                    /* ── Video card — auto-thumbnail from frame ── */
                    <VideoCard
                      src={item.src}
                      alt={item.alt}
                      onClick={() => openLightbox(i)}
                    />
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── LIGHTBOX ── */}
      {currentItem && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Tutup">
            <X size={28} />
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Sebelumnya"
          >
            <ChevronLeft size={32} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {currentItem.type === "image" ? (
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                width={900}
                height={900}
                className={styles.lightboxImg}
                priority
              />
            ) : (
              <video
                src={currentItem.src}
                controls
                autoPlay
                className={styles.lightboxVideo}
              />
            )}
            <div className={styles.lightboxCaption}>{currentItem.alt}</div>
            <div className={styles.lightboxCounter}>
              {(lightboxIndex ?? 0) + 1} / {filtered.length}
            </div>
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Berikutnya"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
