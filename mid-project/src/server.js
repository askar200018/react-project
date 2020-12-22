import { createServer, Model } from 'miragejs';
import { Profession } from 'features/auth/types';
import { InitialRooms } from 'data/rooms.mock';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', () => ({
        users: [
           {
            id: 1,
            name: 'askar',
            email: 'askar@test.kz',
            password: 'askar',
            houses: [],
            profession: Profession.Developer,
          },
        ]
      }));
      this.get('/rooms', () => ({
        rooms: InitialRooms
      }));
    },
  });

  return server;
}
