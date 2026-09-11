import { Button } from "@learnix/ui";

interface CourseFormActionsProps {
  isSubmitting: boolean;
  isEditMode: boolean;
  onCancel: () => void;
}

/** Submit and Cancel buttons for the CourseForm. */
export function CourseFormActions({ isSubmitting, isEditMode, onCancel }: CourseFormActionsProps) {
  return (
    <div className="flex gap-4 border-t border-border/50 pt-6">
      <Button type="submit" disabled={isSubmitting} className="bg-primary/90 hover:bg-primary">
        {isSubmitting ? "Saving..." : isEditMode ? "Save Changes" : "Create Course"}
      </Button>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}
