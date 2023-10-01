import { CoffeListType } from '../contexts/ShoppingCartContext'
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

export const coffeList: CoffeListType[] = [
  {
    image: Express,
    options: ['tradicional'],
    type: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: ' 5,00',
    quantity: 0,
    total: 0,
  },
  {
    image: ExpressAmerican,
    options: ['tradicional'],
    type: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: ' 5,50',
    quantity: 0,
    total: 0,
  },
  {
    image: ExpressCream,
    options: ['tradicional'],
    type: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: ' 6,00',
    quantity: 0,
    total: 0,
  },
  {
    image: ExpressIce,
    options: ['tradicional', 'gelado'],
    type: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: ' 6,50',
    quantity: 0,
    total: 0,
  },
  {
    image: CoffeWithMilk,
    options: ['tradicional', 'com leite'],
    type: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: ' 7,00',
    quantity: 0,
    total: 0,
  },
  {
    image: Latte,
    options: ['tradicional', 'com leite'],
    type: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: ' 7,50',
    quantity: 0,
    total: 0,
  },
  {
    image: Capuccino,
    options: ['tradicional', 'com leite'],
    type: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: ' 8,00',
    quantity: 0,
    total: 0,
  },
  {
    image: Macchiato,
    options: ['tradicional', 'com leite'],
    type: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: ' 8,50',
    quantity: 0,
    total: 0,
  },
  {
    image: Mocaccino,
    options: ['tradicional', 'com leite'],
    type: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,00',
    quantity: 0,
    total: 0,
  },
  {
    image: CoffeChocolate,
    options: ['com leite', 'especial'],
    type: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,50',
    quantity: 0,
    total: 0,
  },
  {
    image: Cuban,
    options: ['especial', 'alcoólico', 'gelado'],
    type: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '10,00',
    quantity: 0,
    total: 0,
  },
  {
    image: Havain,
    options: ['especial'],
    type: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '10,50',
    quantity: 0,
    total: 0,
  },
  {
    image: Arabian,
    options: ['especial'],
    type: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '11,00',
    quantity: 0,
    total: 0,
  },
  {
    image: Ireland,
    options: ['especial'],
    type: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '11,50',
    quantity: 0,
    total: 0,
  },
]
