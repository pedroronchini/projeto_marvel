import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Comic from '../models/Comic';

export default {
  async index(request: Request, response: Response) {
    const characters_id = request.params;

    const comicsRepository = getRepository(Comic);

    const comics = await comicsRepository.findOne(characters_id);

    return response.json(comics);
  },

  async create(request: Request, response: Response) {
    const {
      name,
      language,
      publishing,
      launch,
      finish,
      editions,
    } = request.body;
  
    const comicsRepository = getRepository(Comic);

    const characters_id = request.params;

    const data = {
      name,
      language,
      publishing,
      launch,
      finish,
      editions,
      characters_id
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      language: Yup.string().required(),
      publishing: Yup.string().required(),
      launch: Yup.string().required(),
      finish: Yup.string().required(),
      editions: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false
    });
  
    const comic = comicsRepository.create(data);
  
    await comicsRepository.save(comic);
  
    return response.status(201).json(comic);
  }
}

