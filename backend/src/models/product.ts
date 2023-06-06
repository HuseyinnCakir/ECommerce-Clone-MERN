import { prop, getModelForClass } from '@typegoose/typegoose'

export class Product {
  @prop()
  public name!: string

  @prop()
  public price!: number
  @prop()
  public image!: string

  @prop()
  public brand!: string

  @prop()
  public category!: [string]

  @prop()
  public description!: string

  @prop()
  public features?: [string]

  @prop({ default: 0 })
  public rating!: number

  @prop({ default: 0 })
  public numReviews!: number
}

export const ProductModel = getModelForClass(Product)
