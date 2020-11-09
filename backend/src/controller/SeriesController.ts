import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Serie from '../models/Serie';

export default {
  async index(request: Request, response: Response) {
    const characters_id = request.params

    const serieRepository = getRepository(Serie);

    const serie = await serieRepository.findOne(characters_id);

    return response.json(serie);
  },

  async create(request: Request, response: Response) {
    const {
      name,
      genre,
	    status,
    } = request.body;
  
    const serieRepository = getRepository(Serie);

    const characters_id = request.params;

    const data = {
      name,
	    genre,
      status,
      characters_id,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      genre: Yup.string().required(),
      status: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false
    });
  
    const serie = serieRepository.create(data);
  
    await serieRepository.save(serie);
  
    return response.status(201).json(serie);
  }
}
