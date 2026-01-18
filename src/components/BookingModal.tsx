import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'
import { useLanguage } from '../hooks/useLanguage'

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (date: Date, time: string, price: number, currency: string) => void
    serviceName: string
    price: number
    currencySymbol: string
    currencyCode: string
}

const TIME_SLOTS = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
]

export const BookingModal = ({ isOpen, onClose, onConfirm, serviceName, price, currencySymbol, currencyCode }: BookingModalProps) => {
    const [step, setStep] = useState<'date' | 'time' | 'confirm'>('date')
    const [selectedDate, setSelectedDate] = useState<Date>()
    const [selectedTime, setSelectedTime] = useState<string>()
    const { t } = useLanguage()

    if (!isOpen) return null

    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            setSelectedDate(date)
            setStep('time')
        }
    }

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time)
        setStep('confirm')
    }

    const handleConfirm = () => {
        if (selectedDate && selectedTime) {
            onConfirm(selectedDate, selectedTime, price, currencyCode)
        }
    }

    const reset = () => {
        setStep('date')
        setSelectedDate(undefined)
        setSelectedTime(undefined)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step === 'date' && t('services.booking.selectDate')}
                        {step === 'time' && t('services.booking.selectTime')}
                        {step === 'confirm' && t('services.booking.confirmBooking')}
                    </h3>
                    <button
                        onClick={reset}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {step === 'date' && (
                        <div className="flex justify-center">
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={handleDateSelect}
                                disabled={{ before: new Date(), dayOfWeek: [0, 6] }} // Disable weekends and past dates
                                modifiersClassNames={{
                                    selected: 'bg-blue-600 text-white',
                                    today: 'font-bold text-blue-600'
                                }}
                                className="dark:text-white"
                            />
                        </div>
                    )}

                    {step === 'time' && (
                        <div className="grid grid-cols-2 gap-3">
                            {TIME_SLOTS.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeSelect(time)}
                                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-200"
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 'confirm' && selectedDate && selectedTime && (
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">{t('services.booking.service')}</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">{serviceName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">{t('services.booking.date')}</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">{format(selectedDate, 'PPP')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">{t('services.booking.time')}</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">{selectedTime}</span>
                                </div>
                                <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between text-lg font-bold">
                                    <span className="text-gray-900 dark:text-white">{t('services.booking.total')}</span>
                                    <span className="text-blue-600">{currencySymbol}{price}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleConfirm}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
                            >
                                {t('services.booking.confirmPay')}
                            </button>

                            <button
                                onClick={() => setStep('time')}
                                className="w-full py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            >
                                {t('services.booking.back')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
