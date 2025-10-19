import React from 'react'
import { TruckIcon, CreditCardIcon, PhoneIcon } from 'lucide-react'

const contactItems = [
  {
    icon: TruckIcon,
    title: "Free Delivery",
    description: "Nationwide within 48 hours"
  },
  {
    icon: CreditCardIcon,
    title: "Flexible Finance Options",
    description: "Choose to pay weekly or monthly"
  },
  {
    icon: PhoneIcon,
    title: "Call 0000000000",
    description: "For more assistance"
  }
]

export default function Contact() {
  return (
    <div className="w-full bg-white border border-slate-600 my-3">
      <div className="flex flex-col md:flex-row">
        {contactItems.map((item) => {
          const IconComponent = item.icon
          
          return (
            <div 
              key={item.title}
              className={`
                flex-1 flex items-center py-6 px-4 md:py-8 md:px-6
                border-2 border-[#163040]
              `}
            >
              <div className="flex items-center space-x-3 md:space-x-4 w-full">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  <IconComponent className='w-5 h-5 md:w-6 md:h-6 text-slate-700' />
                </div>
                <div className="text-left min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-slate-700 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
