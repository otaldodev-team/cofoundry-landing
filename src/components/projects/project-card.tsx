import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/projetos/${project.slug}`}>
        <Card className="h-full transition-all hover:shadow-md">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            gradientOpacity={0}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                Postado por {project.author} • {project.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Detalhes
              </Button>
            </CardFooter>
          </MagicCard>
        </Card>
      </Link>
    </motion.div>
  );
};
