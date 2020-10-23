export const paths = {
  home: () => '/',
  registration: () => '/signup',
  login: () => '/signin',
  create: () => '/create',
  rooms: () => '/rooms',
  roomDetail: (id: string) => `/rooms/${id}`,
  company: () => '/company',
  contacts: () => '/contacts',
  main: () => '/main',
  profile: () => '/profile',
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};
