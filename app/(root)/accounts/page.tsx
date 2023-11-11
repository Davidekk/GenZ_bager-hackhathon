import BankCards from "@/components/shared/bankCardUI/BankCards";

const page = () => {
  return <BankCards data={data} />;
};

export default page;

const data = [
  {
    bank: "Tatra Banka",
    owner: "David Halčin",
  },
  {
    bank: "Slovenská Sporiteľňa",
    owner: "Vladimír Hric",
  },
  {
    bank: "Banan Bank",
    owner: "Milan Pankuch",
  },
];
