import * as React from "react";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, RouterContextProvider } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { Route as IndexRoute } from "@/routes/index";

// The homepage hero must play a looping, silent, inline video and keep a static
// picture behind it for browsers that refuse to autoplay or ask for reduced motion.
const Hero = IndexRoute.options.component as React.ComponentType;

function renderHero() {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });
  return render(
    <RouterContextProvider router={router}>
      <Hero />
    </RouterContextProvider>,
  );
}

describe("Homepage hero video", () => {
  it("plays silently on loop with a poster and keeps a static photo behind it", () => {
    renderHero();

    const video = screen.getByTitle("Kerala landscape background video");
    expect(video.autoplay).toBe(true);
    expect(video.muted).toBe(true);
    expect(video.loop).toBe(true);
    expect(video.playsInline).toBe(true);
    expect(video.getAttribute("poster")).toMatch(/hero-poster/);
    expect(video.getAttribute("aria-hidden")).toBe("true");

    const sources = Array.from(video.querySelectorAll("source"));
    expect(sources.map((s) => s.type)).toEqual([
      "video/webm",
      "video/webm",
      "video/mp4",
      "video/mp4",
    ]);
    for (const s of sources) expect(s.src).toMatch(/^\/__l5e\/assets-v1\//);

    // Static fallback photo stays in the DOM under the video.
    expect(screen.getByAltText("Munnar tea hills at sunrise")).toBeInTheDocument();
  });
});
