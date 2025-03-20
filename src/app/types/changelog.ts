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

export type ChangelogFilterType = "ALL" | "FEATURE" | "IMPROVEMENT" | "FIX";

export const CHANGELOG_TYPES = {
  FEATURE: "FEATURE",
  IMPROVEMENT: "IMPROVEMENT",
  FIX: "FIX",
} as const;

export type ChangelogType =
  (typeof CHANGELOG_TYPES)[keyof typeof CHANGELOG_TYPES];
