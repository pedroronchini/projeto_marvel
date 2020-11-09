import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Evento from '../models/Evento';

export default {
  async index(request: Request, response: Response) {
    const characters_id = request.params;

    const eventsRepository = getRepository(Evento);

    const events = await eventsRepository.findOne(characters_id);

    return response.json(events);
  },

  async create(request: Request, response: Response) {
    const {
      title,
      description,
    } = request.body;
  
    const eventsRepository = getRepository(Evento);

    const characters_id = request.params;

    const data = {
      title,
      description,
      characters_id
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false
    });
  
    const evento = eventsRepository.create(data);
  
    await eventsRepository.save(evento);
  
    return response.status(201).json(evento);
  }
}
