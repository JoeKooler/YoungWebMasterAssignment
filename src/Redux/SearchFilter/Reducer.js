import * as TYPE from "./Types";

const initialState = {
  currentSearch: "",
  fetchedData: {
    categories: [],
    provinces: [],
    priceRange: [],
    merchants: [
      {
        shopNameTH: "",
        categoryName: "",
        subcategoryName: "",
        coverImageId: "",
        facilities: [],
        priceLevel: "",
        isOpen: "",
        highlightText: "",
        recommendedItems: [],
        addressProvinceName: "",
        addressDistrictName: "",
      },
    ],
  },
  category: "ร้านอาหารและเครื่องดื่ม",
  province: "",
  price: "",
  subCategories: [],
  subCategory: "",
  products: [],
  isSearchOpen: false,
};

const setProducts = ({
  fetchedData,
  category,
  subCategory,
  province,
  price,
  currentSearch,
}) => {
  const { merchants } = fetchedData;
  return [
    ...merchants.filter((element) => {
      console.log(province, "dsds");
      return (
        (category.includes(element.categoryName) ||
          element.categoryName.includes(category)) &&
        (subCategory.includes(element.subcategoryName) ||
          element.subcategoryName.includes(subCategory)) &&
        (province.includes(element.addressProvinceName) ||
          element.addressProvinceName.includes(province)) &&
        (price === element.priceLevel || price === "") &&
        (currentSearch.includes(element.shopNameTH) ||
          element.shopNameTH.includes(currentSearch))
      );
    }),
  ];
};

const setSubCategories = ({ category, fetchedData }) => {
  const { categories } = fetchedData;
  const categoryArray = categories.filter((element) => {
    return element.name === category;
  });
  if (categoryArray.length > 0) {
    if (categoryArray[0].name !== "")
      return ["", ...categoryArray[0].subcategories];
    else return [];
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.SET_RESET_SEARCH:
      return {
        ...state,
        currentSearch: "",
        category: "",
        province: "",
        price: "",
        subCategory: "",
      };
    case TYPE.SET_CURRENT_SEARCH:
      return { ...state, currentSearch: payload };
    case TYPE.SET_FETCHED_DATA_SUCCESS:
      payload.categories = [{ name: "" }, ...payload.categories];
      return { ...state, fetchedData: payload };
    case TYPE.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case TYPE.SET_PROVINCE:
      return { ...state, province: payload };
    case TYPE.SET_PRICE:
      return { ...state, price: payload };
    case TYPE.SET_SUBCATEGORY:
      return { ...state, subCategory: payload };
    case TYPE.SET_PRODUCTS:
      return { ...state, products: setProducts(state) };
    case TYPE.SET_SUBCATEGORIES:
      return { ...state, subCategories: setSubCategories(state) };
    case TYPE.SET_TOGGLE_SEARCH:
      return { ...state, isSearchOpen: !state.isSearchOpen };
    default:
      return state;
  }
};

export default reducer;
