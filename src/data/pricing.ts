// Factory method for pricing structure
const createPrice = (US: number, EU: number, BR: number) => ({ US, EU, BR })

export const pricingStructure = [
    createPrice(22, 20, 50),    // Security Audit
    createPrice(22, 20, 50),    // Code Auditing
]
