"use client";

import { createTask } from "@/actions/task/create-task";
import { editTask } from "@/actions/task/edit-task";
import { Task } from "@/interfaces/task.interface";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
};

type Props = {
  task?: Task;
};

export const TaskForm = ({ task }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>(
    task
      ? {
          defaultValues: {
            title: task.title,
            description: task.description,
          },
        }
      : {}
  );

  // const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      let resp;
      if (task) {
        resp = await editTask({ id: task.id, data });
        console.log(resp)
      } else {
        resp = await createTask(data);
        console.log(resp)

      }
      // if (!resp.ok) {
      //   // setErrorMessage(resp.message);
      //   return;
      // }
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

      <button className="p-[.8rem] bg-pink-500 rounded-md hover:bg-pink-400" type="submit">
        Save
      </button>
    </form>
  );
};
