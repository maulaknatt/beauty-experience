"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoCard.module.css";

interface VideoCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export default function VideoCard({ src, alt, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let isMounted = true;

    const capture = () => {
      if (!isMounted) return;
      try {
        canvas.width = video.videoWidth || 400;
        canvas.height = video.videoHeight || 400;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const url = canvas.toDataURL("image/jpeg", 0.85);
          setThumbUrl(url);
        }
      } catch {
        setError(true);
      }
    };

    const onLoadedMetadata = () => {
      video.currentTime = Math.min(0.5, video.duration / 4);
    };

    const onSeeked = () => capture();
    const onError = () => { if (isMounted) setError(true); };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("error", onError);
    video.preload = "metadata";
    video.src = src;
    video.load();

    return () => {
      isMounted = false;
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("error", onError);
    };
  }, [src]);

  return (
    <button
      className={styles.card}
      onClick={onClick}
      aria-label={`Buka video: ${alt}`}
    >
      {/* Hidden elements for thumbnail generation */}
      <video ref={videoRef} style={{ display: "none" }} muted playsInline crossOrigin="anonymous" />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div className={styles.thumbWrap}>
        {/* Thumbnail from actual video frame */}
        {thumbUrl && !error ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbUrl} alt={alt} className={styles.thumb} />
        ) : (
          <div className={`${styles.fallback} ${error ? styles.errorState : styles.loadingState}`}>
            {error ? (
              <span className={styles.fallbackEmoji}>🎬</span>
            ) : (
              <div className={styles.spinner} />
            )}
          </div>
        )}

        {/* Outlined circle play button — always visible */}
        <div className={styles.playOverlay}>
          <div className={styles.playBtn}>
            {/* Solid white triangle */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </div>
        </div>

        {/* Hover: bottom gradient label */}
        <div className={styles.hoverLabel}>
          <span>{alt}</span>
        </div>
      </div>
    </button>
  );
}
