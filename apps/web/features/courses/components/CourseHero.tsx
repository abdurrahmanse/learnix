import { Badge, Heading, Text } from "@learnix/ui";
import { type Course } from "@learnix/types";

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 group">
      <div className="absolute inset-0 bg-black/40 z-10" />
      {course.thumbnail_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={course.thumbnail_url}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
      )}

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs md:text-sm">
            Featured
          </Badge>
          <Badge variant="outline" className="text-white border-white/20 backdrop-blur-md px-3 py-1 capitalize text-xs md:text-sm">
            {course.level}
          </Badge>
        </div>
        <Heading className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 max-w-4xl" level={1}>
          {course.title}
        </Heading>
        <Text className="text-lg md:text-xl text-white/80 max-w-3xl font-light">
          {course.short_summary}
        </Text>
      </div>
    </div>
  );
}
