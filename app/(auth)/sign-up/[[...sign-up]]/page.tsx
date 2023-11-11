"use client";

import Logo from "@/components/shared/navbar/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import LocalSearchbar from "@/components/shared/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createUser, loginUser } from "@/lib/action/user.action";
import { useAuth } from "@/context/Auth";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useRouter();
  const { setAuth } = useAuth();

  const handleLogin = async () => {
    const user = await loginUser({ email, password });
    if (user) {
      setAuth(user._id);
      redirect.push("/");
    }
  };

  const handleRegister = async () => {
    console.log("register");
    const user = await createUser({
      email,
      password,
    });
    if (user) {
      setAuth(user._id);
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
        <TabsContent value="card-login">card login</TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
