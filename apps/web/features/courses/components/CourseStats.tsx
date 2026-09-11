import { Star, Users, BarChart, Calendar } from "lucide-react";
import { type Course } from "@learnix/types";
import { Text } from "@learnix/ui";

interface CourseStatsProps {
  course: Course;
}

export function CourseStats({ course }: CourseStatsProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 md:gap-12 py-6 border-y border-white/5">
      <div className="flex items-center gap-3">
        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500/20" />
        <div>
          <Text className="text-xl font-bold">4.9</Text>
          <Text className="text-xs text-muted-foreground uppercase tracking-wider">Rating</Text>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Users className="w-6 h-6 text-blue-500" />
        <div>
          <Text className="text-xl font-bold">2,451</Text>
          <Text className="text-xs text-muted-foreground uppercase tracking-wider">Students</Text>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <BarChart className="w-6 h-6 text-green-500" />
        <div>
          <Text className="text-xl font-bold capitalize">{course.level}</Text>
          <Text className="text-xs text-muted-foreground uppercase tracking-wider">Difficulty</Text>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Calendar className="w-6 h-6 text-purple-500" />
        <div>
          <Text className="text-xl font-bold">Updated</Text>
          <Text className="text-xs text-muted-foreground uppercase tracking-wider">Oct 2024</Text>
        </div>
      </div>
    </div>
  );
}
