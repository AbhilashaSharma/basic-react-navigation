import "./App.css";
import Nav from "./components/Nav";
const menus = [
  { key: "home", label: "Home", url: "/" },
  {
    key: "product",
    label: "Product",
    url: "/",
    subcategories: [
      { key: "courses", label: "Courses", url: "/about/courses" },
      { key: "plans", label: "Plans", url: "/about/plans" },
      { key: "paths", label: "Paths", url: "/about/paths" },
    ],
  },
  {
    key: "about",
    label: "About",
    subcategories: [
      { key: "history", label: "History", url: "/about/history" },
      { key: "team", label: "Team", url: "/about/team" },
    ],
  },
  { key: "secure", label: "Secure", url: "/about/team", disabled: true },
];

function App() {
  return <Nav menus={menus} selected="home" />;
}

export default App;
