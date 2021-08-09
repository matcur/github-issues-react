import {useQuery} from "./useQuery";

export function useCurrentPage(){
  const currentPage = useQuery().get('current-page')
  if (currentPage == null) {
    return 1
  }

  return parseInt(currentPage)
}