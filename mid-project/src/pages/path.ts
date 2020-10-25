export const paths = {
  home: () => '/',
  registration: () => '/signup',
  login: () => '/signin',
  create: () => '/create',
  rooms: () => '/rooms',
  roomDetail: (houseId: string, id: string) => `/rooms/${houseId}/${id}`,
  company: () => '/company',
  contacts: () => '/contacts',
  main: () => '/main',
  profile: () => '/profile',
  catalog: () => '/catalog',
  houses: () => '/houses',
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};
