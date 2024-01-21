import { Participant } from './participant.model';

export class Travel {
  public name: string;
  public dateStart: string;
  public dateEnd: string;
  public description: string;
  public imageUrl: string;
  public participants: Participant[];

  constructor(
    name: string,
    dateS: string,
    dateE: string,
    desc: string,
    imgPath: string,
    participants: Participant[]
  ) {
    this.name = name;
    this.dateStart = dateS;
    this.dateEnd = dateE;
    this.description = desc;
    this.imageUrl = imgPath;
    this.participants = participants;
  }
}
