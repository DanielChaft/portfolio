import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    var profile: Profile = {
      email: 'danielchaft@outlook.com',
      name: 'Daniel Breitschaft',
      whatsApp: 'https://wa.link/qhzaww',
      linkedIn: 'https://www.linkedin.com/in/daniel-breitschaft/'
    }
    return profile;
  }
}
