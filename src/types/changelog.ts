/**
 * Changelog entry interface
 */
export interface IChangelog {
  /** Unique identifier for the changelog entry */
  id: string;

  /** Title of the changelog entry */
  title: string;

  /** Detailed description of the changes */
  description: string;

  /** Version number affected by this change */
  version: string;

  /** Type of change (FEATURE, IMPROVEMENT, FIX) */
  type: ChangelogType;

  /** Date when the changelog entry was created */
  createdAt: Date;
}

export type ChangelogFilterType = "all" | "feature" | "improvement" | "fix";

export const CHANGELOG_TYPES = {
  FEATURE: "feature",
  IMPROVEMENT: "improvement",
  FIX: "fix",
} as const;

export type ChangelogType =
  (typeof CHANGELOG_TYPES)[keyof typeof CHANGELOG_TYPES];
