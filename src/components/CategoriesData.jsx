import category1 from "../images/category1.png";
import category2 from "../images/category2.png";
import category3 from "../images/category3.png";
import category4 from "../images/category4.png";

// animDirect: "right", animDelay: 0.1
// animDirect: "right", animDelay: 0.3
// animDirect: "left", animDelay: 0.3
// animDirect: "left", animDelay: 0.1

// animDirect: "up", animDelay: 0.1
// animDirect: "up", animDelay: 0.3
// animDirect: "up", animDelay: 0.5
// animDirect: "up", animDelay: 0.7

const CategoriesData = [
  { img: category1, alt: "Cameras", animDirect: "right", animDelay: 0.1 },
  { img: category2, alt: "Doorbels", animDirect: "right", animDelay: 0.3 },
  { img: category3, alt: "Streaming", animDirect: "left", animDelay: 0.3 },
  { img: category4, alt: "Packages", animDirect: "left", animDelay: 0.1 },
];

export default CategoriesData;
