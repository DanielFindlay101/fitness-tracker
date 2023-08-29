export default function ProgressSection() {
  return (
    <div className="bg-black h-screen px-3">
      <h1 className="text-white">Your Progress</h1>
      <div className="gap-4 h-screen overflow-auto">
        <div className="bg-purple-800 w-full h-[300px] mb-4">Block 1</div>
        <div className="bg-purple-800 w-full h-[300px] mb-4">Block 2</div>
      </div>
    </div>
  );
}
