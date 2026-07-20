// ResourceItem.tsx — Single downloadable resource row. Reused in list.
// Used on:  LessonPlayerPage (resource list), AdminCourseEditorPage (manage resources)
// Props:    resource, onDelete? (admin only)
// Behavior: Calls /resources/{id}/download for signed URL then triggers download
// Internals: uses <Button>, <Badge> (file type)
