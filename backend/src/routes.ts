import { Router } from 'express';

import CharactersController from './controller/CharactersController';
import ComicsController from './controller/ComicsController';
import EventsController from './controller/EventsController';
import SeriesController from './controller/SeriesController';
import StoriesController from './controller/StoriesController';

const routes = Router();

routes.get('/characters', CharactersController.index);
routes.get('/characters/:id', CharactersController.show);
routes.post('/characters', CharactersController.create);

routes.get('/characters/:id/comics', ComicsController.index);
routes.post('/characters/:id/comics', ComicsController.create);

routes.get('/characters/:id/events', EventsController.index);
routes.post('/characters/:id/events', EventsController.create);

routes.get('/characters/:id/series', SeriesController.index);
routes.post('/characters/:id/series', SeriesController.create);

routes.get('/characters/:id/stories', StoriesController.index);
routes.post('/characters/:id/stories', StoriesController.create);

export default routes;