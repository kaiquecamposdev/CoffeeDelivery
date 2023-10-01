import { FilterCoffeOptions } from './styles'

export function FilterTheCoffes() {
  const options = [
    'tradicional',
    'com leite',
    'gelado',
    'especial',
    'alcoólico',
  ]
  function handleFilterTheItems(option: string) {
    // onFilterTheItems(option)
  }

  return (
    <FilterCoffeOptions>
      {options.map((option) => {
        return (
          <button onClick={() => handleFilterTheItems(option)} key={option}>
            {option}
          </button>
        )
      })}
    </FilterCoffeOptions>
  )
}
