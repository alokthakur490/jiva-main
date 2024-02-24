"use client";

import React, { useState } from "react";

interface DibFormData {
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

interface Props {
  onSubmit: (data: DibFormData) => void; // Change FormData to HeartFormData
}

const FormComponent: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<DibFormData>({
    Age: 40,
    Sex: 1,
    RestingBP: 120,
    FastingBS: 0,
    MaxHR: 172,
    ExerciseAngina: 0,
    ChestPainType_0: 1,
    ChestPainType_1: 0,
    ChestPainType_2: 1,
    ChestPainType_3: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Sex:
          <select name="Sex" value={formData.Sex} onChange={handleChange}>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
          </select>
        </label>
      </div>
      {/* Add other fields similarly */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
