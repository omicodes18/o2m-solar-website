"use client";

import type { ReactNode } from "react";

type ContentPanelProps = {
  title: string;
  onBack: () => void;
  children: ReactNode;
  visible: boolean;
};

export function ContentPanel({ title, onBack, children, visible }: ContentPanelProps) {
  return (
    <div
      className={`panel-overlay ${visible ? "panel-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!visible}
    >
      <div className="panel-backdrop" onClick={onBack} aria-hidden />
      <div className={`panel-sheet ${visible ? "panel-sheet--open" : ""}`}>
        <header className="panel-header">
          <button type="button" onClick={onBack} className="panel-back-btn" aria-label="Back to home">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Home</span>
          </button>
          <h2 className="panel-title">{title}</h2>
        </header>
        <div className="panel-body">{children}</div>
      </div>
    </div>
  );
}
