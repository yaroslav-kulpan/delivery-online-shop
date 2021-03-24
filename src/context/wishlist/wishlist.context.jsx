import { createContext, PureComponent } from "react";

const defaultValue = {
  state: {
    items: [],
  },
  addToWishList: () => null,
  removeWishlistItem: () => null,
};

const WishlistContext = createContext(defaultValue);

WishlistContext.displayName = "WishlistContext";

export default class WishlistProvider extends PureComponent {
  static Consumer = WishlistContext.Consumer;

  addToWishList = (product) => {
    this.setState((prevState) => ({
      items: [...prevState.items, product],
    }));
  };

  removeWishlistItem = (id) => {
    this.setState((prevState) => {
      const items = prevState.items.filter((item) => item._id !== id);
      return {
        items,
      };
    });
  };

  state = {
    items: [
      {
        _id: "lkldkld",
        thumbnail:
          "https://res.cloudinary.com/djeaatusf/image/upload/v1611086805/hzhjwzlstqrpy60enmtx.jpg",
        name: {
          ukr: "ukr",
          ru: "ru",
          en: "en",
        },
        price: 350,
        status: "IN_STOCK",
        quantity: 1,
      },
    ],
    addToWishList: this.addToWishList,
    removeWishlistItem: this.removeWishlistItem,
  };

  render() {
    return (
      <WishlistContext.Provider value={this.state}>
        {this.props.children}
      </WishlistContext.Provider>
    );
  }
}
