import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Character from '../models/Character';

export default {
  async index(request: Request, response: Response) {
    const charactersRepository = getRepository(Character);

    const characters = await charactersRepository.find();

    return response.json(characters);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    
    const charactersRepository = getRepository(Character);

    const characters = await charactersRepository.findOne(id);

    return response.json(characters);
  },

  async create(request: Request, response: Response) {
    const {
      character,
      species,
      occupation,
      power,
      affiliation,
    } = request.body;
  
    const charactersRepository = getRepository(Character);

    const data = {
      character,
      species,
      occupation,
      power,
      affiliation,
    }

    const schema = Yup.object().shape({
      character: Yup.string().required(),
      species: Yup.string().required(),
      occupation: Yup.boolean().required(),
      power: Yup.string().required(),
      affiliation: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false
    });
  
    const characters = charactersRepository.create(data);
  
    await charactersRepository.save(characters);
  
    return response.status(201).json(characters);
  }
}
