import { Heading, Text } from "@learnix/ui";

export default function StudentHome() {
  return (
    <div>
      <Heading className="text-2xl font-bold" level={1}>Welcome to Your Learning Portal</Heading>
      <Text className="text-muted-foreground mt-2">Your courses and progress will appear here.</Text>
    </div>
  );
}
