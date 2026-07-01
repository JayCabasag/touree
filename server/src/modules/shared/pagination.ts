import { Page } from './shared.types';

const FIRST_PAGE = 1;
const PAGE_SIZE = 10;
const PAGE_QUERY_PARAM = 'page';
const SHARD_QUERY_PARAM = 'shard';
const DEFAULT_SHARD = 0;

export function queryParameters(parameters: {
  page: Page;
  whereFilter?: any;
}): {
  skip: number;
  take: number;
  where: any;
} {
  const { page, whereFilter } = parameters;
  return {
    take: page.size,
    skip: (page.num - 1) * page.size,
    where: whereFilter ? whereFilter : {},
  };
}

interface CountableCollection {
  count(parameters: {
    skip: number;
    take: number;
    where: any;
  }): Promise<number>;
}

export function getPage(pageNum?: number): Page {
  return {
    num: pageNum ? pageNum : FIRST_PAGE,
    size: PAGE_SIZE,
  };
}

async function countOnPage(
  page: Page,
  collection: CountableCollection,
  whereFilter?: any,
): Promise<number> {
  return collection.count(queryParameters({ page, whereFilter }));
}

export async function getNextPage({
  currentPage,
  collection,
  whereFilter,
}: {
  currentPage: Page;
  collection: CountableCollection;
  whereFilter?: any;
}): Promise<Page | undefined> {
  const nextPage: Page = {
    num: currentPage.num + 1,
    size: currentPage.size,
  };

  const count = await collection.count({
    skip: (nextPage.num - 1) * nextPage.size,
    take: nextPage.size,
    where: whereFilter,
  });

  return count > 0 ? nextPage : undefined;
}
