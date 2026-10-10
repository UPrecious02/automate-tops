import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One YAML file per case study in src/content/case-studies/.
 * The file name becomes the URL slug, e.g. email-triage.yaml -> /case-studies/email-triage
 * The build fails with a clear message if a required field is missing.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/case-studies' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    // Be honest about evidence: only use "Client deployment" when it really happened.
    status: z.enum(['Demonstration', 'Built and tested', 'Client deployment']),
    accent: z.enum(['lime', 'orange']),
    // Name shown in the window frame around the workflow screenshot.
    workflowName: z.string(),
    problem: z.string(),
    solution: z.string(),
    workflowSteps: z
      .array(
        z.object({
          stage: z.enum(['TRIGGER', 'AI', 'LOGIC', 'SYSTEM', 'ACTION']),
          title: z.string(),
          description: z.string(),
        }),
      )
      .min(3),
    implementation: z.array(z.string()).min(1),
    tools: z.array(z.string()).min(1),
    technicalSkills: z.array(z.string()).min(1),
    validationNote: z.string(),
    validation: z.array(z.string()).min(1),
    // Only add numbers backed by real measurements and a clear measurement period.
    verifiedMetrics: z
      .array(z.object({ value: z.string(), label: z.string(), period: z.string() }))
      .default([]),
    designDecisions: z.array(z.string()).min(1),
    limitations: z.array(z.string()).min(1),
    futureImprovements: z.array(z.string()).default([]),
    evidence: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
          width: z.number(),
          height: z.number(),
        }),
      )
      .default([]),
    seoDescription: z.string().max(170),
  }),
});

export const collections = { caseStudies };
