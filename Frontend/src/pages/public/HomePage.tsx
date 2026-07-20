// HomePage.tsx — /
// Layout:    <PublicLayout>   ← handles Navbar + Footer
// Composes:
//   <PageHeader>              ← ui/PageHeader
//   <CourseGrid courses={featured} />   ← common/CourseGrid
//     └── <CourseCard>        ← common/CourseCard (variant="card")
//   <TagFilter>               ← common/TagFilter (category quick links)
//   <PricingCard> ×3          ← common/PricingCard (pricing teaser section)
// No bespoke markup — all composed from reusable components
