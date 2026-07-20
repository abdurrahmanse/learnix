// AdminPurchasesPage.tsx — /admin/purchases
// Layout:    <AdminLayout>
// Composes:
//   <PageHeader>              ← ui/PageHeader
//   <Tabs>                    ← ui/Tabs ("Payments" | "Subscriptions") — same Tabs everywhere
//   <SearchInput>             ← ui/SearchInput
//   <Table>                   ← ui/Table (different column defs per tab, same component)
//   <Badge>                   ← ui/Badge (payment status, subscription plan)
//   <Pagination>              ← ui/Pagination
