import { json } from 'stream/consumers'

type User = {
  Id: number
  Name: string
  Age: number
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type pickUser = MyPick<User, 'Id' | 'Name'>

const pic: pickUser = {
  Id: 1,
  Name: 'ww'
}

pic.Id = 1
pic.Name = 'w'
console.log(pic)
