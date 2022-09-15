import { SortOrderType } from '../utils';

export const sortByData = [
  { code: '1', sortField: 'title', sortOrder: SortOrderType.ASC },
  { code: '2', sortField: 'title', sortOrder: SortOrderType.DESC },
  {
    code: '3',
    sortField: 'material',
    sortOrder: SortOrderType.ASC,
  },
  {
    code: '4',
    sortField: 'material',
    sortOrder: SortOrderType.DESC,
  },
  {
    code: '5',
    sortField: 'description',
    sortOrder: SortOrderType.ASC,
  },
  {
    code: '6',
    sortField: 'description',
    sortOrder: SortOrderType.DESC,
  },
  {
    code: '7',
    sortField: 'release Date',
    sortOrder: SortOrderType.ASC,
  },
  {
    code: '8',
    sortField: 'release Date',
    sortOrder: SortOrderType.DESC,
  },
];
