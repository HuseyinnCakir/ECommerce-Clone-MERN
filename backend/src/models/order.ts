import { Ref, prop, getModelForClass } from '@typegoose/typegoose'
import { User } from './user'
import { Payment } from './payments'

class items {
  @prop({ required: true })
  public sku?: string
  @prop({ required: true })
  public quantity?: number
  @prop({ required: true })
  public price?: number
  @prop({ required: true })
  public discounts?: string
  @prop({ required: true })
  public preTax?: number
  @prop({ required: true })
  public afterTax?: number
}
export class Order {
  @prop({ ref: User })
  public userId?: Ref<User>

  @prop({ ref: Payment })
  public paymentStatus!: Ref<Payment>

  @prop({ required: true })
  public status!: string

  @prop({ required: true })
  public amount!: number
  @prop({ required: true })
  public items!: items
  @prop({ ref: User })
  public billingAddress!: Ref<User>
  @prop({ ref: User })
  public shippingAddress!: Ref<User>
  @prop({ required: true })
  public trackingId!: string
}

export const OrderModel = getModelForClass(Order)
