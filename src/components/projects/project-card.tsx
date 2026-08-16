import { Badge, Card, TagGroup, TextLink } from "@/components/ui";
import type { ProfessionalProject } from "@/data/professional-home";

type ProjectCardProps = {
  project: ProfessionalProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      description={project.description}
      eyebrow="Selected project"
      footer={
        <TextLink external href={project.href}>
          View repository
        </TextLink>
      }
      interactive
      title={project.title}
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="type-eyebrow text-text-muted">Current status</p>
          <Badge className="mt-2" variant="information">
            {project.status}
          </Badge>
        </div>
        <TagGroup label="Technical surface" tags={project.tags} />
      </div>
    </Card>
  );
}
