export const paths = {
  home: () => '/',
  registration: () => '/signup',
  login: () => '/signin',
  create: () => '/create',
  rooms: () => '/rooms',
  roomDetail: (id: string) => `/rooms/${id}`,
  contacts: () => '/contacts',
  main: () => '/main',
  profile: () => '/profile',
  catalog: ()=> '/catalog',
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};
