import { queryHelpers } from '@testing-library/dom'
import { RowGroup } from './types'

function queryAllByRowgroupType(
  container: HTMLElement,
  rowgroupTagName: RowGroup
) {
  return Array.from(container.querySelectorAll(rowgroupTagName))
}

const getMultipleError = (_c: HTMLElement, rowgroupTagName: RowGroup) =>
  `Found multiple ${rowgroupTagName} elements`
const getMissingError = (_c: HTMLElement, rowgroupTagName: RowGroup) =>
  `Found no ${rowgroupTagName} elements`

const [
  queryByRowgroupType,
  getAllByRowgroupType,
  getByRowgroupType,
  findAllByRowgroupType,
  findByRowgroupType
] = queryHelpers.buildQueries(
  queryAllByRowgroupType,
  getMultipleError,
  getMissingError
)
export {
  queryAllByRowgroupType,
  queryByRowgroupType,
  getAllByRowgroupType,
  getByRowgroupType,
  findAllByRowgroupType,
  findByRowgroupType
}
