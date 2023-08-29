"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useStore } from "@/app/store";

const FormSchema = z.object({
  workoutname: z.string().min(2, {
    message: "Workout name must be at least 2 characters.",
  }),
  sets: z.number().min(1, {
    message: "Please enter a number",
  }),
  reps: z.number().min(1, {
    message: "Please enter a number",
  }),
});

export default function WorkoutForm() {
  const setWorkoutModal = useStore((state) => state.setWorkoutModal);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="workoutname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workout name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-evenly">
          <Button className="bg-red-400" onClick={() => setWorkoutModal(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-lime-400 text-black border-2 border-black"
          >
            Add
          </Button>
        </div>
      </form>
    </Form>
  );
}
