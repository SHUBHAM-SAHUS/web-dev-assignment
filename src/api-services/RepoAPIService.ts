import { API_ENDPOINTS, BASE_API_URL, Repo, RepoResponse } from '@/utils';
import CoreAPIService from './CoreAPIService';

const {
  PUBLIC: { REPO_LIST },
} = API_ENDPOINTS;
// ******  TODO: 'REPO API SERVICES'********
class RepoAPIService {
  private services: CoreAPIService;

  constructor(baseURL?: string) {
    this.services = new CoreAPIService(baseURL as string);
  }

  repoList = async () => {
    const endpoint = `${REPO_LIST}`;
    return this.services.get<RepoResponse>(endpoint);
  };
}

const RepoServices = new RepoAPIService(BASE_API_URL);
export default RepoServices;
