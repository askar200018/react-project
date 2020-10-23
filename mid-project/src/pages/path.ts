export const paths = {
  home: () => '/',
  registration: () => '/signup',
  login: () => '/signin',
  create: () => '/create',
  rooms: () => '/rooms',
  roomDetail: (id: string) => `/rooms/${id}`,
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};
