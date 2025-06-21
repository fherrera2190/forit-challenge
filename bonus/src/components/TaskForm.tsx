"use client";

import { createTask } from "@/actions/task/create-task";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
};

export const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const resp = await createTask(data);
      if (!resp.ok) {
        setErrorMessage(resp.message);
        return;
      }
      router.push("/");
    } catch {
      console.log("error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-5">
      <input
        {...register("title", { required: true, minLength: 1, maxLength: 256 })}
        placeholder="Title"
        className="w-full p-2 border bg-light border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
      />
      {errors.title && <small>Title is required</small>}
      <textarea
        {...register("description", {
          required: true,
          minLength: 1,
          maxLength: 256,
        })}
        placeholder="description"
        className="w-full p-2 h-[15ch] border bg-light mb-5 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      {errors.description && <small>Description is required</small>}

      <button className="p-[.8rem] bg-pink-500 rounded-md" type="submit">
        Save
      </button>
    </form>
  );
};
