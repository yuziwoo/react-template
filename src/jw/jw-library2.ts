type Car = {
  color: boolean,
  model: boolean,
  price: boolean | number
}

// 타입 변환기
type TypeChanger<T> = {
  [key in keyof T] : string
}

type Car2 = TypeChanger<Car>;