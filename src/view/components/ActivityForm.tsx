"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Client from "@/libs/clients/client";

const ActivityForm = () => {
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("WATER");
  const [recordInfo, setRecordInfo] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const client = new Client();

    try {
      await client.createActivityRecord({ userId, type, recordInfo });
      router.push("/dashboard");
    } catch (err) {
      console.error("Error creating activity record:", err);
      setError("Erro ao criar registro de atividade. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label" htmlFor="userId">
          <span className="label-text">ID do Usuário</span>
        </label>
        <input
          id="userId"
          name="userId"
          type="text"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="type">
          <span className="label-text">Tipo de Atividade</span>
        </label>
        <select
          id="type"
          name="type"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="WATER">Água</option>
          <option value="MEAL">Refeição</option>
          <option value="EXERCISE">Exercício</option>
          <option value="SLEEP">Sono</option>
        </select>
      </div>
      {type === "WATER" && (
        <div className="form-control">
          <label className="label" htmlFor="waterAmount">
            <span className="label-text">Quantidade de Água (ml)</span>
          </label>
          <input
            id="waterAmount"
            name="waterAmount"
            type="number"
            required
            value={recordInfo.amount || ""}
            onChange={(e) => setRecordInfo({ ...recordInfo, amount: e.target.value })}
            className="input input-bordered w-full"
          />
        </div>
      )}
      {type === "MEAL" && (
        <div className="form-control">
          <label className="label" htmlFor="mealDescription">
            <span className="label-text">Descrição da Refeição</span>
          </label>
          <textarea
            id="mealDescription"
            name="mealDescription"
            required
            value={recordInfo.description || ""}
            onChange={(e) => setRecordInfo({ ...recordInfo, description: e.target.value })}
            className="textarea textarea-bordered w-full"
          />
        </div>
      )}
      {type === "EXERCISE" && (
        <div className="form-control">
          <label className="label" htmlFor="exerciseDescription">
            <span className="label-text">Descrição do Exercício</span>
          </label>
          <textarea
            id="exerciseDescription"
            name="exerciseDescription"
            required
            value={recordInfo.description || ""}
            onChange={(e) => setRecordInfo({ ...recordInfo, description: e.target.value })}
            className="textarea textarea-bordered w-full"
          />
        </div>
      )}
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
          {isLoading ? "Adicionando..." : "Adicionar Registro"}
        </button>
      </div>
      {error && (
        <div className="alert alert-error mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </form>
  );
};

export default ActivityForm;
