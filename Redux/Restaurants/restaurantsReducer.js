import { FETCH_RESTAURANTS } from "./restaurantsTypes";
const initialState = [
  {
    id: 1,
    RestaurantName: "Ginsoy",
    RestaurantType: "Chinese",
    RestaurantAddress: "Block F North Nazimabad",
    PhoneNumber: "0900786601",
    Email: "www.ginsoy.com",
  },
  {
    id: 2,
    RestaurantName: "Pompei",
    RestaurantType: "Italian",
    RestaurantAddress: "Zamzama Block k",
    PhoneNumber: "0900786601",
    Email: "www.Pompei.com",
  },
  {
    id: 3,
    RestaurantName: "Solen",
    RestaurantType: "Turkish",
    RestaurantAddress: "Dolmen Mall Clifton",
    PhoneNumber: "0900786601",
    Email: "www.Solen.com",
  },
  {
    id: 4,
    RestaurantName: "Zeytin",
    RestaurantType: "Turkish",
    RestaurantAddress: "Safa Residency Shaheed-e-Millat",
    PhoneNumber: "0900786601",
    Email: "www.zeytin.com",
  },
  {
    id: 5,
    RestaurantName: "Pomo",
    RestaurantType: "Italian",
    RestaurantAddress: "44c lane",
    PhoneNumber: "0900786601",
    Email: "www.pomo.com",
  },
  {
    id: 6,
    RestaurantName: "Amichi Pizeria",
    RestaurantType: "Italian",
    RestaurantAddress: "44c lane",
    PhoneNumber: "0900786601",
    Email: "www.Amichi.com",
  },
  {
    id: 7,
    RestaurantName: "Bam-Bou",
    RestaurantType: "Chinese",
    RestaurantAddress: "D-61 North Nazimabad",
    PhoneNumber: "0900786601",
    Email: "www.BamBou.com",
  },
  {
    id: 8,
    RestaurantName: "Imperial court",
    RestaurantType: "Chinese",
    RestaurantAddress: "D-61 North Nazimabad",
    PhoneNumber: "0900786601",
    Email: "www.imperialCourt.com",
  },
  {
    id: 9,
    RestaurantName: "Golden Dragon",
    RestaurantType: "Chinese",
    RestaurantAddress: "F-31 Clifton",
    PhoneNumber: "0900786601",
    Email: "www.GoldenDragon.com",
  },
];

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;
