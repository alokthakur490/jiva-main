"use client";
import React from "react";
import FormComponent from "@/components/form/dib_form";
import DibaForm from "@/components/form/diba_form";
interface HeartFormData {
  Age: number;
  Sex: number;
  RestingBP: number;
  FastingBS: number;
  MaxHR: number;
  ExerciseAngina: number;
  ChestPainType_0: number;
  ChestPainType_1: number;
  ChestPainType_2: number;
  ChestPainType_3: number;
}

export default function HeartForm() {
  const handleSubmit = (data: HeartFormData) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div>
      <DibaForm />
    </div>
  );
}
