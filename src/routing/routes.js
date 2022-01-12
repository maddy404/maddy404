import {
  LANDING,
  HOME,
  ITEMS,
  REASON,
  PHOTO,
  RETURN_OPTIONS,
  EXCHANGE_OPTIONS,
  NEIGHBOUR,
  REFUND,
} from "./paths";
import {
  Home,
  Items,
  Reason,
  Photo,
  ReturnOptionsPage,
  ExchangeOption,
  Neighbour,
  Refund,
} from "../pages/index";

const LANDING_ONE = {
  component: Home,
  path: LANDING,
};

const HOME_TWO = {
  component: Home,
  path: HOME,
};

const ITEMS_THREE = {
  component: Items,
  path: ITEMS,
};
const REASON_FOUR = {
  component: Reason,
  path: REASON,
};
const PHOTO_FIVE = {
  component: Photo,
  path: PHOTO,
};

const RETURN_PAGE_SIX = {
  component: ReturnOptionsPage,
  path: RETURN_OPTIONS,
};
const EXCHANGE_OPTION_PAGE_SEVEN = {
  component: ExchangeOption,
  path: EXCHANGE_OPTIONS,
};
const NEIGHBOUR_OPTION_PAGE_EIGHT = {
  component: Neighbour,
  path: NEIGHBOUR,
};

const REFUND_OPTION_PAGE_NINE = {
  component: Refund,
  path: REFUND,
};

const routes = [
  LANDING_ONE,
  HOME_TWO,
  ITEMS_THREE,
  REASON_FOUR,
  PHOTO_FIVE,
  RETURN_PAGE_SIX,
  EXCHANGE_OPTION_PAGE_SEVEN,
  NEIGHBOUR_OPTION_PAGE_EIGHT,
  REFUND_OPTION_PAGE_NINE,
];

export default routes;
