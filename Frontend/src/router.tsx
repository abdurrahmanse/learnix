// router.tsx — React Router v6 configuration
// ─────────────────────────────────────────────────────────────
//
// Import paths now match role-based page folders:
//   pages/public/   → public routes (no auth required)
//   pages/student/  → protected routes (requires isLoggedIn)
//   pages/admin/    → protected routes (requires role === "admin")
//
// ── PUBLIC ─────────────────────────────────────────────────
// import HomePage           from "@/pages/public/HomePage"
// import CourseCatalogPage  from "@/pages/public/CourseCatalogPage"
// import CourseDetailPage   from "@/pages/public/CourseDetailPage"
// import PricingPage        from "@/pages/public/PricingPage"
// import LoginPage          from "@/pages/public/LoginPage"
// import RegisterPage       from "@/pages/public/RegisterPage"
// import PaymentSuccessPage from "@/pages/public/PaymentSuccessPage"
// import PaymentCancelPage  from "@/pages/public/PaymentCancelPage"
// import NotFoundPage       from "@/pages/public/NotFoundPage"
//
// ── STUDENT ────────────────────────────────────────────────
// import DashboardPage      from "@/pages/student/DashboardPage"
// import MyCoursesPage      from "@/pages/student/MyCoursesPage"
// import LessonPlayerPage   from "@/pages/student/LessonPlayerPage"
// import SubscriptionPage   from "@/pages/student/SubscriptionPage"
// import ProfilePage        from "@/pages/student/ProfilePage"
//
// ── ADMIN ──────────────────────────────────────────────────
// import AdminDashboardPage    from "@/pages/admin/AdminDashboardPage"
// import AdminCoursesPage      from "@/pages/admin/AdminCoursesPage"
// import AdminCourseEditorPage from "@/pages/admin/AdminCourseEditorPage"
// import AdminUsersPage        from "@/pages/admin/AdminUsersPage"
// import AdminPurchasesPage    from "@/pages/admin/AdminPurchasesPage"
//
// ── ROUTE TREE ─────────────────────────────────────────────
//
//   <BrowserRouter>
//     <Routes>
//
//       {/* PUBLIC — wrapped in PublicLayout */}
//       <Route element={<PublicLayout />}>
//         <Route path="/"                  element={<HomePage />} />
//         <Route path="/courses"           element={<CourseCatalogPage />} />
//         <Route path="/courses/:slug"     element={<CourseDetailPage />} />
//         <Route path="/pricing"           element={<PricingPage />} />
//         <Route path="/login"             element={<LoginPage />} />
//         <Route path="/register"          element={<RegisterPage />} />
//         <Route path="/payment/success"   element={<PaymentSuccessPage />} />
//         <Route path="/payment/cancel"    element={<PaymentCancelPage />} />
//       </Route>
//
//       {/* STUDENT — wrapped in ProtectedRoute + DashboardLayout */}
//       <Route element={<ProtectedRoute />}>
//         <Route element={<DashboardLayout />}>
//           <Route path="/dashboard"                       element={<DashboardPage />} />
//           <Route path="/dashboard/courses"               element={<MyCoursesPage />} />
//           <Route path="/dashboard/subscription"          element={<SubscriptionPage />} />
//           <Route path="/dashboard/profile"               element={<ProfilePage />} />
//         </Route>
//         {/* Lesson player has its own full-screen layout */}
//         <Route element={<LessonLayout />}>
//           <Route path="/dashboard/courses/:id/learn"     element={<LessonPlayerPage />} />
//         </Route>
//       </Route>
//
//       {/* ADMIN — wrapped in ProtectedRoute(admin) + AdminLayout */}
//       <Route element={<ProtectedRoute requiredRole="admin" />}>
//         <Route element={<AdminLayout />}>
//           <Route path="/admin"                           element={<AdminDashboardPage />} />
//           <Route path="/admin/courses"                   element={<AdminCoursesPage />} />
//           <Route path="/admin/courses/new"               element={<AdminCourseEditorPage />} />
//           <Route path="/admin/courses/:id/edit"          element={<AdminCourseEditorPage />} />
//           <Route path="/admin/users"                     element={<AdminUsersPage />} />
//           <Route path="/admin/purchases"                 element={<AdminPurchasesPage />} />
//         </Route>
//       </Route>
//
//       {/* CATCH-ALL */}
//       <Route path="*" element={<NotFoundPage />} />
//
//     </Routes>
//   </BrowserRouter>
