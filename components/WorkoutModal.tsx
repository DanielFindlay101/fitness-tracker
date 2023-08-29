"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WorkoutForm from "./WorkoutForm";

export default function WorkoutModal() {
  return (
    <Card className="w-[350px] bg-slate-200 absolute left-0 right-0 top-0 bottom-0 m-auto h-[500px]">
      <CardHeader>
        <CardTitle>Create a Workout</CardTitle>
        <CardDescription>
          Track your progress to see your results!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <WorkoutForm />
      </CardContent>
    </Card>
  );
}
