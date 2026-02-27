"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { AppTitle } from "@/components/desktop/config";
import ProjectsContent from "./ProjectsContent";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectSelect: (title: AppTitle) => void;
}

export default function ProjectsModal({
  isOpen,
  onClose,
  onProjectSelect,
}: ProjectsModalProps): JSX.Element | null {
  useEffect(() => {
    if (isOpen && typeof document !== "undefined") {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = prevOverflow;
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="projects-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div
        className="relative z-10 w-full max-w-md max-h-[85vh] overflow-hidden rounded-xl bg-zinc-800 shadow-2xl ring-1 ring-slate-600"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-600">
          <h2 id="projects-modal-title" className="text-lg font-semibold text-slate-200">
            Projects
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zinc-600 text-slate-400 hover:text-white"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
        <div className="overflow-y-auto max-h-[calc(85vh-56px)] scroll-custom">
          <ProjectsContent
            onProjectSelect={(title) => {
              onProjectSelect(title);
              onClose();
            }}
            iconSize="mobile"
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
