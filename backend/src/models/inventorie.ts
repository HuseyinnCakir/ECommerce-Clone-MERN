import { modelOptions, Ref, prop, getModelForClass } from '@typegoose/typegoose'
import { User } from './user'

import { Product } from './product'
@modelOptions({ schemaOptions: { timestamps: true } })
class Reservation {
  @prop()
  public quantity!: number
  @prop()
  public createdAt!: Date
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Inventorie {
  @prop({ ref: Product })
  public productId!: Ref<Product> //sku: Stock keeping unit
  @prop({ required: true })
  public quantity!: number
  @prop({ default: () => Date.now() })
  public modifiedOn!: Date
  @prop({ ref: Reservation })
  public reservations?: Ref<Reservation>[]
}

export const InventorieModel = getModelForClass(Inventorie)
