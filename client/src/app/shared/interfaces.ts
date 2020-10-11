export interface Guest {
  guestFirstName: string,
  guestMiddleName: string,
  guestLastName: string,
  guestPhoneNumber: string,
  guestEmail: string,
  guestSide: string
}

export interface Event {
  email: string,
  weddingName: string,
  groomFirstName: string,
  groomMiddleName: string,
  groomLastName: string,
  groomDateOfBirth: string,
  groomPhoneNumber: string,
  groomGender: string,
  brideFirstName: string,
  brideMiddleName: string,
  brideLastName: string,
  brideDateOfBirth: string,
  bridePhoneNumber: string,
  brideGender: string,
  ceremonyType: string, // required
  hotel: string, // required
  checkInDate: string, // required
  checkOutDate: string, // required
  honeymoon: boolean,
  bookedRoom: boolean,
  roomNumber: string, // required
  guestFirstName: string,
  guestMiddleName: string,
  guestLastName: string,
  guestPhoneNumber: string,
  guestEmail: string,
  guestSide: string,
}
