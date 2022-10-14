import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { Text } from './Text'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps { }

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-5 h-5 p-[2px] bg-gray-800 rounded" {...props}>
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight="bold" className="w-4 h-4 text-cyan-500" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  )
}