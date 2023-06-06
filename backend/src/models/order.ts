import { Ref, prop, getModelForClass } from '@typegoose/typegoose'
import { User, Address } from './user'

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

  @prop({ required: true })
  public paymentStatus!: string

  @prop({ required: true })
  public status!: string

  @prop({ required: true })
  public amount!: number
  @prop({ required: true })
  public items!: [items]
  @prop({ required: true })
  public billingAddress!: Address
  @prop({ required: true })
  public shippingAddress!: Address
  @prop({ required: true })
  public trackingId!: string
}

export const OrderModel = getModelForClass(Order)
