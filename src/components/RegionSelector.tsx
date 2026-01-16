import { useUserRegion } from '../hooks/usePricing'

export const RegionSelector = () => {
  const { region, setUserRegion, currency } = useUserRegion()

  const regions = [
    { code: 'US', label: 'United States', symbol: '$' },
    { code: 'BR', label: 'Brazil', symbol: 'R$' },
    { code: 'EU', label: 'Eurozone', symbol: '€' },
    { code: 'UK', label: 'United Kingdom', symbol: '£' },
  ]

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-600 dark:text-gray-400">
        Currency: {currency.symbol} {region}
      </span>
      <div className="flex gap-1">
        {regions.map((r) => (
          <button
            key={r.code}
            onClick={() => setUserRegion(r.code as 'BR' | 'EU' | 'UK' | 'US')}
            className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
              region === r.code
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {r.code}
          </button>
        ))}
      </div>
    </div>
  )
}
