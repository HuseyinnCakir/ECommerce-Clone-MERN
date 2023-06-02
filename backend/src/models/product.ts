import { prop, getModelForClass } from '@typegoose/typegoose'

class Skus {
  @prop()
  public sku!: string

  @prop()
  public price!: number

  @prop()
  public quantity!: number

  @prop()
  public features!: number
}

export class Product {
  @prop({ required: true })
  public name!: string

  @prop({ required: true, type: () => [Skus] })
  public skus!: Skus[]

  @prop({ required: true })
  public image!: string

  @prop({ required: true })
  public brand!: string

  @prop({ required: true })
  public category!: string

  @prop({ required: true })
  public description!: string

  @prop({ required: true, default: 0 })
  public countInStock!: number

  @prop({ required: true, default: 0 })
  public rating!: number

  @prop({ required: true, default: 0 })
  public numReviews!: number
}

export const ProductModel = getModelForClass(Product)
