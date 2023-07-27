"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Workout } from "@/utils/workout";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, useForm } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  workoutName: z.string().min(2).max(50),
  //   weight: z.number().positive(),
  //   sets: z.number().int(),
  //   reps: z.number().int(),
});

export default function WorkoutModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workoutName: "",
      //   weight: undefined,
      //   sets: undefined,
      //   reps: undefined,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-lime-400 text-black hover:bg-lime-600">
          Log Workout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Create a Workout
          </AlertDialogTitle>
          {/* Wrap form here */}
          {/* <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="workoutName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form> */}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-lime-400 hover:bg-lime-600 text-black">
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
