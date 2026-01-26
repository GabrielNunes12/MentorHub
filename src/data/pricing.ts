// Factory method for pricing structure
const createPrice = (US: number, EU: number, BR: number) => ({ US, EU, BR })

export const pricingStructure = [
    createPrice(75, 70, 350),    // Backend Mentorship
    createPrice(55, 50, 250),    // Frontend Mentorship
]
