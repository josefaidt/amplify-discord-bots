type Questions = {
  total: Question[],
  unanswered: Question[],
  staff: Question[],
  community: Question[],
}

type Contributors = {
  all: Contributor[],
  staff: Contributor[],
  // community: Contributor[],
}

type Question = {
  channelName: string,
  createdAt: Date,
  id: string,
  isSolved?: boolean
}

type Contributor = {
  id: string,
  githubId?: string,
  discordUsername?: string,
  answers: Question[]
}

type GitHubUser =  {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
}

module.exports = {
  Questions,
  Contributors,
  Contributor,
  Question,
  GitHubUser
};