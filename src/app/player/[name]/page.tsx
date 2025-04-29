// app/player/[name]/page.tsx
export default async function PlayerPage({ params }: { params: { name: string } }) {
  const { name } = await params; // Now `params` should be awaited automatically when you define the component as `async`

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Player: {name}</h1>
    </div>
  );
}
