"use client";
import { useSearchParams, useParams,useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchParamsExample() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = useParams();

  const currentName = searchParams.get("data") || "No name provided";
  console.log(currentName)
  

  
  return (
    <div>
      <h1>Search Parameters {param.id} Example</h1>
      <p>Current Name: {currentName}</p>
      </div>
  );
}
