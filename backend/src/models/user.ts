import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

export class Address {
  @prop()
  public country?: string

  @prop({ min: 5 })
  public street1?: string
  @prop({ min: 5 })
  public street2?: string

  @prop({ min: 2 })
  public city?: string

  @prop({ min: 4 })
  public zip?: string
}

enum Genders {
  male = 'male',
  female = 'female',
  undisclosed = 'undisclosed',
}

// 1. Create an interface representing a document in MongoDB.

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @prop({ required: [true, 'Please provide first name'] })
  public firstName!: string
  @prop({ required: [true, 'Please provide last name'] })
  public lastName!: string
  @prop({ enum: Genders })
  public gender?: Genders
  @prop({ required: [true, 'Please provide email'], unique: true })
  public email!: string
  @prop({
    required: [true, 'Please provide password'],
    minlength: 8,

    select: false,
  })
  public password!: string
  @prop()
  public billingAddress?: Address
  @prop()
  public shippingAddress?: Address
  @prop({ default: false })
  public isAdmin!: boolean
}

// 2. Create a Schema corresponding to the document interface.

export const UserModel = getModelForClass(User)
