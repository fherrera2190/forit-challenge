import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Task } from "../interfaces/task.interface";

type FormValues = {
  title: string;
  description: string;
};
interface Props {
  formTitle: string;
  task?: Task;
  action: (task: Task) => void;
}
export const TaskForm = ({ formTitle, task, action }: Props) => {
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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const method = task ? "PUT" : "POST";
    const url = task
      ? `${import.meta.env.VITE_API_URL}/tasks/${task.id}`
      : `${import.meta.env.VITE_API_URL}/tasks`;
    console.log(data);
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const task = await res.json();
      action(task);
      navigate("/");
    } catch {
      console.log("error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="task-form">
      <h3>{formTitle}</h3>
      <input
        {...register("title", { required: true, minLength: 1, maxLength: 256 })}
        placeholder="Title"
      />
      {errors.title && <small>Title is required</small>}
      <textarea
        {...register("description", {
          required: true,
          minLength: 1,
          maxLength: 256,
        })}
        placeholder="description"
      />
      {errors.description && <small>Description is required</small>}

      <button type="submit">Save</button>
    </form>
  );
};
