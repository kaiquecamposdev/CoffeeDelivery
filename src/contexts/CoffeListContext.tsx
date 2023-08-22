import {
  Arabian,
  Capuccino,
  CoffeChocolate,
  CoffeWithMilk,
  Cuban,
  Express,
  ExpressAmerican,
  ExpressCream,
  ExpressIce,
  Havain,
  Ireland,
  Latte,
  Macchiato,
  Mocaccino,
} from '../pages/Home/assets/icons'
import { CreditCard, DebitCard, Money } from '../pages/Checkout/assets/icons'
import { produce } from 'immer'

import { ReactNode, createContext, useState } from 'react'

interface CoffeListProps {
  image: string
  options: [
    tradicional?: string,
    comLeite?: string,
    gelado?: string,
    especial?: string,
    alcoolico?: string,
  ]
  type: string
  description: string
  price: string
  quantity: number
  total: string
}
interface PaymentMethodsType {
  name: string
  method: string
  checked: boolean
}

export type DecreaceItemPropsType = {
  onDecreaceItem: (type: string) => void
}
export type IncreaseItemPropsType = {
  onIncreaseItem: (type: string) => void
}
// TIPAGEM DO STATE DA FILTRAGEM
// interface CoffeOptionsProps {
//   options: [
//     tradicional?: string,
//     comLeite?: string,
//     gelado?: string,
//     especial?: string,
//     alcoolico?: string,
//   ]
// }
interface ListCoffeDeliveryProps {
  coffeList: CoffeListProps[]
  itemsTheShoppingCart: CoffeListProps[]
  paymentMethods: PaymentMethodsType[]
  onIncreaseItem: (type: string) => void
  onDecreaceItem: (type: string) => void
  onSelectChecked: (nameTheObjectForChecked: string) => void
  onItemRemoveFromShoppingCart: (type: string) => void
  // onFilterTheItems: (option: string) => void
  // filteredItems: CoffeOptionsProps[]
  increaseItemsInShoppingCart: (type: string) => void
}
export const CoffeListContext = createContext({} as ListCoffeDeliveryProps)

interface CoffeListContextProviderProps {
  children: ReactNode
}

export function CoffeListContextProvider({
  children,
}: CoffeListContextProviderProps) {
  const [coffeList, setCoffeList] = useState<CoffeListProps[]>([
    {
      image: Express,
      options: ['tradicional'],
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price:' 5,00',
      quantity: 0,
      total: '',
    },
    {
      image: ExpressAmerican,
      options: ['tradicional'],
      type: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price:' 5,50',
      quantity: 0,
      total: '',
    },
    {
      image: ExpressCream,
      options: ['tradicional'],
      type: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price:' 6,00',
      quantity: 0,
      total: '',
    },
    {
      image: ExpressIce,
      options: ['tradicional', 'gelado'],
      type: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price:' 6,50',
      quantity: 0,
      total: '',
    },
    {
      image: CoffeWithMilk,
      options: ['tradicional', 'com leite'],
      type: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price:' 7,00',
      quantity: 0,
      total: '',
    },
    {
      image: Latte,
      options: ['tradicional', 'com leite'],
      type: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price:' 7,50',
      quantity: 0,
      total: '',
    },
    {
      image: Capuccino,
      options: ['tradicional', 'com leite'],
      type: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price:' 8,00',
      quantity: 0,
      total: '',
    },
    {
      image: Macchiato,
      options: ['tradicional', 'com leite'],
      type: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price:' 8,50',
      quantity: 0,
      total: '',
    },
    {
      image: Mocaccino,
      options: ['tradicional', 'com leite'],
      type: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price:'9,00',
      quantity: 0,
      total: '',
    },
    {
      image: CoffeChocolate,
      options: ['com leite', 'especial'],
      type: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9,50',
      quantity: 0,
      total: '',
    },
    {
      image: Cuban,
      options: ['especial', 'alcoólico', 'gelado'],
      type: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '10,00',
      quantity: 0,
      total: '',
    },
    {
      image: Havain,
      options: ['especial'],
      type: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '10,50',
      quantity: 0,
      total: '',
    },
    {
      image: Arabian,
      options: ['especial'],
      type: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '11,00',
      quantity: 0,
      total: '',
    },
    {
      image: Ireland,
      options: ['especial'],
      type: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '11,50',
      quantity: 0,
      total: '',
    },
  ])
  const [itemsTheShoppingCart, setItemsTheShoppingCart] = useState<
    CoffeListProps[]
  >([])
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodsType[]>([
    {
      name: 'cartão de crédito',
      method: CreditCard,
      checked: false,
    },
    {
      name: 'cartão de débito',
      method: DebitCard,
      checked: false,
    },
    {
      name: 'dinheiro',
      method: Money,
      checked: false,
    },
  ])
  // ESTADO QUE SERÁ ARMAZENADO OS ITENS FILTRADOS
  // const [filteredItems, setFilteredItems] = useState<CoffeOptionsProps[]>([])

  function onIncreaseItem(type: string) {
    const updatedState = produce(coffeList, (draft) => {
      const typeForIncrease = draft.find((item) => item.type === type)
      const indexTheTypeForIncrease = draft.findIndex(
        (item) => item.type === type,
      )
      if (typeForIncrease) {
        draft[indexTheTypeForIncrease].quantity++
      }
    })
    setCoffeList(updatedState)
  }
  function onDecreaceItem(type: string) {
    const updatedState = produce(coffeList, (draft) => {
      const typeForDecreace = draft.find((item) => item.type === type)
      const indexTheTypeForDecreace = draft.findIndex(
        (item) => item.type === type,
      )
      if (typeForDecreace && draft[indexTheTypeForDecreace].quantity > 0) {
        draft[indexTheTypeForDecreace].quantity--
      }
    })
    setCoffeList(updatedState)
  }
  // LÓGICA DE FILTRAR ITENS
  // function onFilterTheItems(option: string) {
  //   const updatedState = produce(coffeList, (draft) => {
  //     const typeForFilter = draft.find((item) => item.options.includes(option))

  //     const indexTheItemForFilter = draft.findIndex((item) =>
  //       item.options.includes(option),
  //     )

  //     if (typeForFilter) {
  //       draft.map(
  //         (item) =>
  //           item.options[indexTheItemForFilter] ===
  //           typeForFilter.options[indexTheItemForFilter],
  //       )
  //     }
  //     setCoffeList(updatedState)
  //   })

  //   console.log(filteredItems)
  // }
  function increaseItemsInShoppingCart(type: string) {
    const typeForAddInShoppingCart = coffeList.find(
      (item) => item.type === type,
    )
    const indexTheItemForAddInShoppingCart = coffeList.findIndex(
      (item) => item.type === type,
    )

    if (typeForAddInShoppingCart && typeForAddInShoppingCart.quantity > 0) {
      const updatedState = coffeList[indexTheItemForAddInShoppingCart]
      const emptyQuantity = produce(coffeList, (draft) => {
        draft[indexTheItemForAddInShoppingCart].quantity = 0
      })
      setItemsTheShoppingCart((prevState) => [...prevState, updatedState])
      setCoffeList(emptyQuantity)
    }
  }
  function onSelectChecked(nameTheObjectForChecked: string) {
    const updatedState = produce(paymentMethods, (draft) => {
      const indexTheObjectForChecked = paymentMethods.findIndex(
        (props) => props.name === nameTheObjectForChecked,
      )

      const isChecked = draft[indexTheObjectForChecked].checked

      draft[indexTheObjectForChecked].checked = !isChecked
    })

    setPaymentMethods(updatedState)
  }
  function onItemRemoveFromShoppingCart(type: string) {
    const typeForRemoveOutShoppingCart = itemsTheShoppingCart.find(
      (item) => item.type === type,
    )

    if(typeForRemoveOutShoppingCart) {
      const updatedState = itemsTheShoppingCart.filter((item) => item.type === type)
      setItemsTheShoppingCart(updatedState)
    }
  }

  return (
    <CoffeListContext.Provider
      value={{
        coffeList,
        itemsTheShoppingCart,
        paymentMethods,
        onIncreaseItem,
        onDecreaceItem,
        onSelectChecked,
        onItemRemoveFromShoppingCart,
        // onFilterTheItems,
        // filteredItems,
        increaseItemsInShoppingCart,
      }}
    >
      {children}
    </CoffeListContext.Provider>
  )
}