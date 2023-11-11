import BankCards from "@/components/shared/bankCardUI/BankCards";

import { getBankById } from "@/lib/action/bank.action";

const page = async () => {
  const result = await getBankById({ id: "1" });

  return <BankCards data={result} />;
};

export default page;
