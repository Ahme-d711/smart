"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect } from "react";

// Use the browser-only client component. The `/next` entrypoint is async in v4.1
// and cannot be rendered from a Client Component under Next 16.
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false, loading: () => <span className="robot-loading" aria-hidden="true" /> });

class RobotBoundary extends Component<{ fallback: string; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.setState({ failed: true }); }
  render() { return this.state.failed ? <RobotFallback label={this.props.fallback} /> : this.props.children; }
}

function RobotFallback({ label }: { label: string }) {
  return <div className="robot-fallback" role="img" aria-label={label}><span className="fallback-ring" /><span className="fallback-eye" /><span className="fallback-eye fallback-eye-right" /><span className="fallback-node" /></div>;
}

function SplineErrorGuard({ children }: { children: ReactNode }) {
  useEffect(() => {
    const originalError = console.error;
    const isSplineMissingProperty = (value: unknown) => value === "Missing property" || (value instanceof Error && value.message === "Missing property");
    console.error = (...args: unknown[]) => {
      // Some exported Spline scenes contain an incomplete interaction action.
      // The runtime throws it after load; the ErrorBoundary renders our fallback.
      if (args.some(isSplineMissingProperty)) return;
      originalError(...args);
    };
    return () => { console.error = originalError; };
  }, []);
  return <>{children}</>;
}

export default function RobotScene({ fallback }: { fallback: string }) {
  const scene = process.env.NEXT_PUBLIC_SPLINE_ROBOT_SCENE_URL;
  if (!scene) return <RobotFallback label={fallback} />;
  return <SplineErrorGuard><RobotBoundary fallback={fallback}><Spline scene={scene} /></RobotBoundary></SplineErrorGuard>;
}
