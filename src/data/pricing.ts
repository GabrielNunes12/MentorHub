// Factory method for pricing structure
const createPrice = (US: number, EU: number, BR: number) => ({ US, EU, BR })

export const pricingStructure = [
    createPrice(99, 95, 397),    // Career Coaching
    createPrice(49, 47, 197),    // Tech Profile Optimization (ATS & GitHub)
    createPrice(79, 72, 347),    // Tech Interview & System Design Prep
    createPrice(129, 125, 597),  // Rate Negotiation Strategy
    createPrice(149, 150, 497),  // Leadership Mentorship
    createPrice(299, 275, 1497)  // Speed mentorship (Tech Lead Path)
]
