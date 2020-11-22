import React from 'react'
import { useDrag } from 'react-use-gesture'
import { ValueInput } from '../ValueInput'
import { TwixInputProps } from '../../types'

export function Number({ label, formattedValue, value, onUpdate, onChange, step }: TwixInputProps<number>) {
  const bind = useDrag(
    ({ movement: [x], memo = value }) => {
      onUpdate(memo + Math.round(x) * step!)
      return memo
    },
    { threshold: 10, axis: 'x' }
  )
  return (
    <>
      <label {...bind()} style={{ cursor: 'ew-resize', userSelect: 'none' }}>
        {label}
      </label>
      <ValueInput label={label} value={formattedValue} onUpdate={onUpdate} onChange={onChange} />
    </>
  )
}