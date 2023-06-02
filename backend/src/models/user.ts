import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

class Address {
  @prop()
  public country?: string

  @prop()
  public street?: string

  @prop()
  public city?: string

  @prop()
  public zip?: string
}
enum Gender {
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
  @prop({ default: 'undisclosed' })
  public gender?: Gender
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
  @prop({ required: true, default: false })
  public isAdmin!: boolean
}

// 2. Create a Schema corresponding to the document interface.

export const UserModel = getModelForClass(User)
