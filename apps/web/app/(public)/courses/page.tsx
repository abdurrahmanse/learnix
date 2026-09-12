import { CourseCatalog } from "@/features/courses/components/CourseCatalog"
import { Metadata } from "next"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getQueryClient, QUERY_KEYS, courseService } from "@learnix/api-client"

export const metadata: Metadata = {
  title: "Explore Courses | Learnix",
  description: "Browse our comprehensive catalog of programming and design courses.",
}

// Next.js passes searchParams to page components
export default async function CoursesPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const queryClient = getQueryClient()
  
  // Prefetch data on the server
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.courses.published(),
    queryFn: () => courseService.listPublishedCourses(),
  })

  // Await searchParams in Next 15+
  const resolvedSearchParams = await props.searchParams
  const searchQuery = typeof resolvedSearchParams.q === "string" ? resolvedSearchParams.q : ""

  return (
    <div className="w-full py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CourseCatalog initialSearchQuery={searchQuery} />
      </HydrationBoundary>
    </div>
  )
}
