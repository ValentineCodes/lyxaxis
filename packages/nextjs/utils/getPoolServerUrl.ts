import * as chains from "wagmi/chains";

export const getPoolServerUrl = (id: number) =>
  id === chains.hardhat.id ? "http://localhost:49832/" : "https://lyxaxis.onrender.com/";
