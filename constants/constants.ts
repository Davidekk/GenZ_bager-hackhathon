export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/accounts",
    label: "Účty",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/collection",
    label: "daco",
  },
];

export const graphTypes: GraphProps[] = [
  {
    icon: "/assets/icons/bar.svg",
    title: "Bar",
    label: "Bar",
  },
  {
    icon: "/assets/icons/line.svg",
    title: "Line",
    label: "LineChart",
  },
  {
    icon: "/assets/icons/pie2.svg",
    title: "Pie",
    label: "PieChart",
  },
  {
    icon: "/assets/icons/linear.svg",
    title: "Linear",
    label: "BarChart",
  },
];

export const filterOptions = [
  {
    title: "Newest",
    value: "newest",
  },
  {
    title: "Oldest",
    value: "oldest",
  },
];
