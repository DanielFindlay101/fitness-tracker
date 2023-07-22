import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workout } from "@/utils/workout";

interface workoutCardProps {
  workout: Workout;
}

export default function workoutCards({ workout }: workoutCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title: {workout.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{workout.reps}</p>
        <p>{workout.sets}</p>
        <p>{workout.pb}</p>
      </CardContent>
    </Card>
  );
}
