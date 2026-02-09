import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface AccordionItem {
  value: string
  trigger: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn('w-full space-y-4', className)}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold hover:bg-gray-50 transition-colors group">
              {item.trigger}
              <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-6 pb-4 pt-2 text-gray-600">
              {item.content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
