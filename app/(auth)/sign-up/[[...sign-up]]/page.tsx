"use client";

import Logo from "@/components/shared/navbar/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import LocalSearchbar from "@/components/shared/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createUser, loginUser } from "@/lib/action/user.action";
import axios from "axios";
import Image from "next/image";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cardId, setCardId] = useState("");
  const redirect = useRouter();

  console.log(cardId);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("/api/nfc")
        .then(async (response) => {
          // Spracovanie odpovede
          if (response.data.data !== "44506691") return;

          await axios.post("/api/nfc", {
            card_id: "654f411095c1d707c4b1b1b5",
          });
          redirect.push("/");
          setCardId(response.data);
        })
        .catch((error) => {
          // Spracovanie chyby
          console.error("Chyba pri vykonávaní GET požiadavky", error);
        });
    }, 5000); // 5000 ms = 5 sekúnd

    // Čistenie intervalu, keď komponent nie je viac zobrazený
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    const user = await loginUser({ email, password });
    if (user) {
      await axios.post("/api/nfc", {
        card_id: user._id,
      });
      redirect.push("/");
    }
  };

  const handleRegister = async () => {
    const user = await createUser({
      email,
      password,
    });
    if (user) {
      await axios.post("/api/nfc", {
        card_id: user._id,
      });
      redirect.push("/");
    }
  };

  return (
    <div className=" flex-center background-light800_dark300 h-screen w-screen ">
      <Tabs
        defaultValue="login"
        className="background-light900_dark200  min-h-[430px] w-[400px] rounded-md p-5 shadow-light-300 dark:shadow-none"
      >
        <div className="flex-center mb-5 flex flex-row pt-2">
          <Logo />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 ">
            Gen<span className="text-primary-purple ">Z_bager</span>
          </p>
        </div>
        <TabsList className=" w-full justify-around ">
          <TabsTrigger
            value="login"
            onClick={() => {
              setActiveTab("login");
            }}
            className={`${
              activeTab === "login"
                ? "primary-gradient base-bold text-light-900 "
                : ""
            } text-dark100_light900 w-3/6`}
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="register"
            onClick={() => {
              setActiveTab("register");
            }}
            className={`${
              activeTab === "register"
                ? "primary-gradient base-bold text-light-900 "
                : ""
            } text-dark100_light900 w-3/6 `}
          >
            Register
          </TabsTrigger>
          <TabsTrigger
            value="card-login"
            onClick={() => setActiveTab("card-login")}
            className={`${
              activeTab === "card-login"
                ? "primary-gradient base-bold text-light-900 "
                : ""
            } text-dark100_light900 w-3/6 outline-none`}
          >
            Card login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LocalSearchbar
            iconPosition="right"
            imgSrc="/assets/icons/email.svg"
            placeholder="E-mail"
            otherClasses="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center"
            handleChange={setEmail}
          />
          <LocalSearchbar
            iconPosition="right"
            imgSrc="/assets/icons/lock.svg"
            placeholder="Password"
            otherClasses=" flex justify-between gap-5 max-sm:flex-col sm:items-center"
            handleChange={setPassword}
          />
          <Button
            className="flex-center primary-gradient text-dark100_light900 base-bold mb-10 mt-5 w-full"
            onClick={handleLogin}
          >
            {" "}
            Login{" "}
          </Button>
        </TabsContent>
        <TabsContent value="register">
          <LocalSearchbar
            iconPosition="right"
            imgSrc="/assets/icons/email.svg"
            placeholder="E-mail"
            otherClasses="mt-11 flex justify-between  gap-5 max-sm:flex-col sm:items-center "
            handleChange={setEmail}
          />
          <LocalSearchbar
            iconPosition="right"
            imgSrc="/assets/icons/lock.svg"
            placeholder="Password "
            otherClasses=" flex justify-between gap-5 max-sm:flex-col sm:items-center"
            handleChange={setPassword}
          />

          <Button
            className="flex-center primary-gradient text-dark100_light900 base-bold h1-bold mb-10 mt-5 w-full"
            onClick={handleRegister}
          >
            {" "}
            Register{" "}
          </Button>
        </TabsContent>
        <TabsContent value="card-login">
          <div className="flex-center mb-5 flex flex-col pt-2">
            <p className="h2-bold flex font-spaceGrotesk text-dark-100 dark:text-light-900 ">
              Attach the card
            </p>
            <div className="mt-5 flex h-full w-full justify-center border border-dashed border-slate-500 p-10 ">
              <Image
                src="/assets/icons/credit_card.svg"
                alt="credit card"
                width={100}
                height={100}
                className="animate-bounce rounded-full"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
