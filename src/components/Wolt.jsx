import { useEffect, useState } from "react";
import axios from "axios";

const Wolt = () => {
  const [dishes, setDishes] = useState([]);

  async function fetchDishes() {
    try {
      const apiResponse = await axios.get(
        "api/consumer-api/consumer-assortment/v1/venues/slug/mcdonalds-forum-katutaso/assortment"
      );

      setDishes(apiResponse.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  // useEffect(()=>{
  //     updatePrice()
  // }, [dishes])

  //   const dishes = [
  //     {
  //       dishPrice: "3,45 €",
  //       dishName: "French Fries",
  //       dishImage:
  //         "https://imageproxy.wolt.com/menu/menu-images/5e835543815f65fa2b18072c/b8c2bdf2-f003-11ed-923a-06acece2da46_fd_fi_2000_2.png",
  //     },
  //     {
  //       dishPrice: "2,50 €",
  //       dishName: "Cheese burger",
  //       dishImage:
  //         "https://imageproxy.wolt.com/menu/menu-images/5e835543815f65fa2b18072c/b891564a-f003-11ed-923a-06acece2da46_fd_fi_1030_55.png",
  //     },
  //     {
  //       dishPrice: "7,87 €",
  //       dishName: "BigMac™",
  //       dishImage:
  //         "https://imageproxy.wolt.com/menu/menu-images/5e835543815f65fa2b18072c/b88fa6e2-f003-11ed-923a-06acece2da46_fd_fi_8010_55.png",
  //     },
  //     {
  //       dishPrice: "7,85 €",
  //       dishName: "McFeast™",
  //       dishImage:
  //         "https://imageproxy.wolt.com/menu/menu-images/5e835543815f65fa2b18072c/b8f880b8-f003-11ed-923a-06acece2da46_fd_fi_8011_55.png",
  //     },
  //     {
  //       dishPrice: "4 €",
  //       dishName: "Chicken Nuggets",
  //       dishImage:
  //         "https://imageproxy.wolt.com/menu/menu-images/5e835543815f65fa2b18072c/b9132120-f003-11ed-923a-06acece2da46_fd_fi_1210_2.png",
  //     },
  //     {
  //       dishPrice: "1 €",
  //       dishName: "Soda",
  //       dishImage:
  //         "https://imageproxy.wolt.com/menu/menu-images/5e835543815f65fa2b18072c/b8792e44-f003-11ed-923a-06acece2da46_fd_fi_4310_20.png",
  //     },
  //   ];

  return (
    <div className="main-container">
      {dishes.map((dish, index) => (
        <div className="card" key={index}>
          <img src={dish.images[0].url} className="card-img"></img>
          <button>+</button>
          <p>{dish.price}</p>
          <h2>{dish.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Wolt;
