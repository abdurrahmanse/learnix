import { CheckCircle2 } from "lucide-react";
import { Heading, Text } from "@learnix/ui";

interface CourseDescriptionProps {
  description: string | undefined;
}

/** Renders a simple subset of Markdown: ##/### headings, - list items, and paragraphs. */
export function CourseDescription({ description }: CourseDescriptionProps) {
  if (!description) return null;

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {description.split("\n").map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <Heading key={i} className="text-3xl font-bold mt-12 mb-6" level={2}>
              {line.replace("## ", "")}
            </Heading>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <Heading key={i} className="text-2xl font-bold mt-8 mb-4" level={3}>
              {line.replace("### ", "")}
            </Heading>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <div key={i} className="flex items-start gap-3 my-2">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{line.replace("- ", "")}</span>
            </div>
          );
        }
        if (line.trim() === "") return <br key={i} />;
        return (
          <Text key={i} className="text-muted-foreground leading-relaxed mb-4">
            {line}
          </Text>
        );
      })}
    </div>
  );
}
