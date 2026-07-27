interface PathNodeProps {
  variant?: 'gaming' | 'professional' | 'connection' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
}

const PathNode = ({
  variant = 'neutral',
  size = 'md',
  className = '',
  animated = false
}: PathNodeProps) => {
  // Size configurations
  const sizeConfig: Record<string, { width: string; height: string }> = {
    sm: { width: '2', height: '2' }, // 8px
    md: { width: '3', height: '3' }, // 12px
    lg: { width: '4', height: '4' }, // 16px
  }

  // Color configurations
  const colorConfig: Record<string, { bg: string; pointer: string }> = {
    gaming: { bg: 'bg-gaming', pointer: 'text-white' },
    professional: { bg: 'bg-professional', pointer: 'text-white' },
    connection: { bg: 'bg-connection', pointer: 'text-gray-900 dark:text-gray-100' },
    neutral: { bg: 'bg-gray-300 dark:bg-gray-600', pointer: 'text-white' },
  }

  const { width, height } = sizeConfig[size] || sizeConfig.md
  const { bg, pointer } = colorConfig[variant] || colorConfig.neutral

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <div className={`${bg} w-${width} h-${height} rounded-full flex items-center justify-center ${animated ? 'animate-pulse' : ''}`}>
        <div className={`${pointer} text-xs`}>
          {/* Triangle pointer pointing right */}
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
            <path d="M1 1L3 3M1 3L3 1" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PathNode