enum UserRole {
  User,
  Organization,
}
export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  site_admin: boolean;
  type?: UserRole;
  score?: number;
}

export interface IUserResponse {
  total_count: number;
  incomplete_results: false;
  items: IUser[];
}
