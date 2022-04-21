class Place {
  id;
  name;
  image;
  address;
  latitude;
  longitude;
  constructor(id: string, name: any, image: any, address: any, latitude: any, longitude: any) {
    this.id = id.toString();
    this.name = name;
    this.image = image;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export default Place;
