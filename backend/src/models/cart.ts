import { modelOptions, Ref, prop, getModelForClass } from '@typegoose/typegoose'
import { User } from './user'

import { Product } from './product'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Cart {
  @prop({ ref: User })
  public userId!: Ref<User>
  @prop({ required: true })
  public state!: string
  @prop({ default: () => Date.now() })
  public modifiedOn!: Date
  @prop({ ref: Product })
  public products!: Ref<Product>[]
}

export const CartModel = getModelForClass(Cart)
