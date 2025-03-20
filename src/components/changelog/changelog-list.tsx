import { useMemo } from "react";
import { IChangelog } from "@/app/types/changelog";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bug, Rocket, Sparkles, Zap } from "lucide-react";
import { ChangelogFilterType } from "@/app/types/changelog";

export const CHANGELOG_TYPES = {
  FEATURE: "FEATURE",
  IMPROVEMENT: "IMPROVEMENT",
  FIX: "FIX",
} as const;

const CHANGELOG_TYPE_CONFIG = {
  [CHANGELOG_TYPES.FEATURE]: {
    icon: <Rocket className="h-5 w-5" />,
    displayName: "New Feature",
    badgeClass: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  },
  [CHANGELOG_TYPES.IMPROVEMENT]: {
    icon: <Zap className="h-5 w-5" />,
    displayName: "Improvement",
    badgeClass: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  },
  [CHANGELOG_TYPES.FIX]: {
    icon: <Bug className="h-5 w-5" />,
    displayName: "Bug Fix",
    badgeClass: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
  },
  DEFAULT: {
    icon: <Sparkles className="h-5 w-5" />,
    displayName: "Update",
    badgeClass: "",
  },
};

const getTypeConfig = (type: string) => {
  return (
    CHANGELOG_TYPE_CONFIG[type as keyof typeof CHANGELOG_TYPE_CONFIG] ||
    CHANGELOG_TYPE_CONFIG.DEFAULT
  );
};

interface Release {
  version: string;
  createdAt: Date;
  updates: IChangelog[];
}

interface ChangelogListProps {
  items: IChangelog[];
  filter: ChangelogFilterType;
}

export const ChangelogList = ({ items, filter }: ChangelogListProps) => {
  const releases = useMemo(() => {
    const groupedChangelogs = items.reduce(
      (acc, changelog) => {
        if (!acc[changelog.version]) {
          acc[changelog.version] = {
            version: changelog.version,
            createdAt: changelog.createdAt,
            updates: [],
          };
        }
        acc[changelog.version].updates.push(changelog);
        return acc;
      },
      {} as Record<string, Release>,
    );

    return Object.values(groupedChangelogs).sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [items]);

  const renderChangelogCard = (
    update: IChangelog,
    updateIndex: number,
    releaseIndex: number,
  ) => {
    const typeConfig = getTypeConfig(update.type);

    return (
      <motion.div
        key={update.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: updateIndex * 0.05 + releaseIndex * 0.1,
        }}
      >
        <Card className="h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge className={typeConfig.badgeClass}>
                {typeConfig.displayName}
              </Badge>
              <div className="rounded-full bg-primary/10 p-1.5">
                {typeConfig.icon}
              </div>
            </div>
            <CardTitle className="mt-2">{update.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-muted-foreground">
              {update.description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const renderReleaseSection = (release: Release, releaseIndex: number) => {
    const filteredUpdates =
      filter === "ALL"
        ? release.updates
        : release.updates.filter((update) => update.type === filter);

    if (filteredUpdates.length === 0) return null;

    return (
      <motion.div
        key={release.version}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: releaseIndex * 0.1 }}
        className="relative"
      >
        <div className="sticky top-20 z-10 mb-6 bg-background/80 py-2 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-bold">
              Version {release.version}
            </h2>
            <Badge variant="outline" className="text-sm">
              {new Date(release.createdAt).toLocaleDateString(undefined, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUpdates.map((update, updateIndex) =>
            renderChangelogCard(update, updateIndex, releaseIndex),
          )}
        </div>
      </motion.div>
    );
  };

  if (!releases.length) {
    return (
      <div className="py-12 text-center">No changelog entries available.</div>
    );
  }

  return (
    <div className="space-y-12">
      {releases.map((release, releaseIndex) =>
        renderReleaseSection(release, releaseIndex),
      )}
    </div>
  );
};
