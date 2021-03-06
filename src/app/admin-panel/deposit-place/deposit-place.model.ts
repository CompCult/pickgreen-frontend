export class DepositPlace {
  _id: number;
  zipcode: string;
  state: string;
  city: string;
  neighborhood: string;
  number: string;
  street: string;
  phone: string;
  name: string;
  geolocalization: {
    lat: string,
    lng: string
  }

  constructor(name: string, phone: string, street: string, number: string, neighborhood: string, city: string,
              state: string, zipcode: string) {
    this.name = name;
    this.phone = phone;
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
  }
}
