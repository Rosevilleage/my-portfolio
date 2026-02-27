"use client";

import { useEffect, useState, useCallback } from "react";
import dragMouseDown from "@/utills/dragMouseDown";
import { inrange } from "@/utills/inrange";
import { DESKTOP_MB } from "@/components/Browser/config";
import type { AppTitle } from "@/components/desktop/config";
import ProjectsContent from "./ProjectsContent";

const WINDOW_W = 420;
const WINDOW_H = 400;
const ANIMATION_MS = 300;

interface ProjectsWindowProps {
  boundaryCur: HTMLDivElement | null;
  zIndex: number | undefined;
  onClose: () => void;
  onBringFront: () => void;
  onProjectSelect: (title: AppTitle) => void;
}

export default function ProjectsWindow({
  boundaryCur,
  zIndex,
  onClose,
  onBringFront,
  onProjectSelect,
}: ProjectsWindowProps): JSX.Element | null {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [moveBoundary, setMoveBoundary] = useState({ w: 0, h: 0 });
  const [isEntryAnimation, setIsEntryAnimation] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { x, y } = position;

  useEffect(() => {
    if (boundaryCur && typeof window !== "undefined") {
      const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setMoveBoundary({ w: width, h: height });
        setPosition({
          x: Math.floor(width / 2 - WINDOW_W / 2),
          y: Math.floor(height / 2 - WINDOW_H / 2),
        });
      });
      observer.observe(boundaryCur);
    }
  }, [boundaryCur]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsEntryAnimation(false);
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = useCallback(() => {
    setIsExiting(true);
  }, []);

  useEffect(() => {
    if (!isExiting) return;
    const timeoutId = setTimeout(onClose, ANIMATION_MS);
    return () => clearTimeout(timeoutId);
  }, [isExiting, onClose]);

  const moveHandler = () =>
    dragMouseDown((intervalX, intervalY) => {
      const limitedY = moveBoundary.h - WINDOW_H - DESKTOP_MB;
      setPosition({
        x: inrange(x + intervalX, 0, moveBoundary.w - WINDOW_W),
        y: inrange(y + intervalY, 0, Math.max(0, limitedY)),
      });
    }, true);

  if (moveBoundary.w === 0 && moveBoundary.h === 0) {
    return null;
  }

  const startTop = moveBoundary.h;
  const currentTop = isExiting
    ? startTop
    : isEntryAnimation
      ? startTop
      : position.y;

  const isAnimating = isEntryAnimation || isExiting;

  return (
    <div
      className="absolute rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-600 bg-zinc-800"
      style={{
        left: position.x,
        top: currentTop,
        width: WINDOW_W,
        height: WINDOW_H,
        zIndex: zIndex ?? 1,
        transition: `top ${isAnimating ? ANIMATION_MS : 0}ms ease 0s`,
      }}
      onClick={onBringFront}
    >
      <div
        className="sticky top-0 z-10 flex items-center justify-between w-full px-3 py-2 bg-gray-800 cursor-grab active:cursor-grabbing"
        {...moveHandler()}
      >
        <span className="text-sm font-medium text-slate-200">Projects</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="p-1 rounded hover:bg-gray-600 text-slate-400 hover:text-white"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(100%-40px)] scroll-custom">
        <ProjectsContent onProjectSelect={onProjectSelect} iconSize="desktop" />
      </div>
    </div>
  );
}
