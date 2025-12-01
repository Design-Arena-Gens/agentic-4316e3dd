import { atlasRegions } from "@/data/atlasRegions";

export function GET() {
  return Response.json({
    name: "ChatPT Atlas",
    version: "2024.06",
    description:
      "A curated registry of high-leverage prompt territories spanning strategy, creativity, research, synthesis, and automation workflows.",
    generatedAt: new Date().toISOString(),
    regions: atlasRegions.map(
      ({ id, name, headline, focus, bestFor, starterPrompt, insights, theme, signalStrength }) => ({
        id,
        name,
        headline,
        focus,
        bestFor,
        starterPrompt,
        insights,
        theme,
        signalStrength,
      }),
    ),
  });
}
