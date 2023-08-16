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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WorkoutModalProps {
  setWorkoutModal: (val: boolean) => void;
}

export default function WorkoutModal({ setWorkoutModal }: WorkoutModalProps) {
  return (
    <Card className="w-[350px] absolute left-0 right-0 top-0 bottom-0 m-auto h-[500px]">
      <CardHeader>
        <CardTitle>Create a Workout</CardTitle>
        <CardDescription>
          Track your progress to see your results!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Day</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="arms">Arms</SelectItem>
                  <SelectItem value="chest">Chest</SelectItem>
                  <SelectItem value="legs">Legs</SelectItem>
                  <SelectItem value="back">Back</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Workout Name</Label>
              <Input id="name" placeholder="Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Number of Sets</Label>
              <Input id="setw" placeholder="Sets" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Number of Reps</Label>
              <Input id="reps" placeholder="Reps" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setWorkoutModal(false)}>
          Cancel
        </Button>
        <Button className="bg-lime-400 text-black border-2 border-black">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
