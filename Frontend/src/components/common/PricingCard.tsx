// PricingCard.tsx — THE single pricing plan card. Used in 3+ places.
// Pages:    PricingPage, SubscriptionPage (upsell section), HomePage (pricing teaser)
// Props:    plan, isHighlighted, onSelect, isLoading
// Plan:     { name, price, period, features: string[], ctaLabel }
// Internals: uses <Card>, <Button>, <Badge> (Popular pill)
// Rule:     ONE pricing card. Reused on every pricing surface.
