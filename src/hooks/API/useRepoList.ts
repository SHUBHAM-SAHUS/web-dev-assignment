import { RepoServices } from '@/api-services';
import { useQuery } from 'react-query';

const queryOptions = {
  staleTime: 1 * 60 * 1000,
  cacheTime: 2 * 60 * 1000,
};

const useRepoList = () => {
  const {
    data: repoList,
    isLoading: isRepoListLoading,
    refetch: refetchRepoList,
  } = useQuery<any>(['repolist'], () => RepoServices.repoList(), queryOptions);

  return {
    repoList,
    isRepoListLoading,
    refetchRepoList,
  };
};

export default useRepoList;
