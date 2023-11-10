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
    route: "/community",
    label: "daco",
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
    label: "bar",
  },
  {
    icon: "/assets/icons/line.svg",
    title: "Line",
    label: "line",
  },
  {
    icon: "/assets/icons/pie2.svg",
    title: "Pie",
    label: "pie",
  },
  {
    icon: "/assets/icons/linear.svg",
    title: "Linear",
    label: "linear",
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
