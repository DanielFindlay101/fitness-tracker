import WorkoutCards from "@/components/workoutCards";
import TopNav from "../components/TopNav";
import { Workout } from "@/utils/workout";
import HomeSection from "@/components/HomeSection";
import ProgressSection from "@/components/ProgressSection";
import BottomNav from "@/components/BottomNav";

const workouts: Workout[] = [
  {
    title: "squat",
    reps: 5,
    sets: 3,
    pb: true,
  },
  {
    title: "bench press",
    reps: 3,
    sets: 8,
    pb: false,
  },
  {
    title: "deadlift",
    reps: 10,
    sets: 3,
    pb: true,
  },
  {
    title: "dips",
    reps: 10,
    sets: 2,
    pb: false,
  },
];

export default function Home() {
  return (
    <>
      <TopNav />
      <HomeSection />
      <BottomNav />
    </>
  );
}
