import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CardAmount, CardHeader, CardRoot } from './card'

const styles = cva(
  'w-full px-6 md:max-w-[1216px] xl:px-0 grid grid-cols-3 gap-8 -mt-20',
)

export type SummaryProps = ComponentProps<'section'>

export function Summary({ className, ...props }: SummaryProps) {
  return (
    <section className={cn(styles({ className }))} {...props}>
      <CardRoot>
        <CardHeader>
          <span>Entradas</span>
          <ArrowCircleUp className="h-8 w-8 text-green-300" />
        </CardHeader>
        <CardAmount>R$ 5.000,00</CardAmount>
      </CardRoot>

      <CardRoot>
        <CardHeader>
          <span>Saídas</span>
          <ArrowCircleDown className="h-8 w-8 text-red-300" />
        </CardHeader>
        <CardAmount>R$ 5.000,00</CardAmount>
      </CardRoot>

      <CardRoot className="bg-green-700">
        <CardHeader>
          <span>Total</span>
          <CurrencyDollar className="h-8 w-8 text-white" />
        </CardHeader>
        <CardAmount>R$ 5.000,00</CardAmount>
      </CardRoot>
    </section>
  )
}