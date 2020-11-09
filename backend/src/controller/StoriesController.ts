import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Storie from '../models/Storie';

export default {
  async index(request: Request, response: Response) {
    const characters_id = request.params;

    const storiesRepository = getRepository(Storie);

    const stories = await storiesRepository.findOne(characters_id);

    return response.json(stories);
  },

  async create(request: Request, response: Response) {
    const {
      description,
    } = request.body;
  
    const storiesRepository = getRepository(Storie);

    const characters_id = request.params;

    const data = {
      description,
      characters_id
    }

    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false
    });
  
    const storie = storiesRepository.create(data);
  
    await storiesRepository.save(storie);
  
    return response.status(201).json(storie);
  }
}
