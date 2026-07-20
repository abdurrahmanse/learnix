// AdminCourseEditorPage.tsx — /admin/courses/new or /admin/courses/:id/edit
// Layout:    <AdminLayout>
// Composes:
//   <PageHeader>              ← ui/PageHeader (title: "Create Course" or "Edit: {title}")
//   <Tabs>                    ← ui/Tabs (General | Curriculum | Settings) — same Tabs as everywhere
//   <Input> ×n                ← ui/Input (title, slug, price, description)
//   <CourseSyllabus>          ← common/CourseSyllabus (editable mode — isAdmin=true)
//   <ResourceItem>            ← common/ResourceItem (with onDelete prop for admin)
//   <Button>                  ← ui/Button (save, publish toggle, add section)
//   <Modal>                   ← ui/Modal (lesson video upload modal)
//   <ConfirmModal>            ← ui/ConfirmModal (delete section/lesson)
