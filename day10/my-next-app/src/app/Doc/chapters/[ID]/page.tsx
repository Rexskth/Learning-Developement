
export default function individualPage({ params }: { params: { ID: string } }) {
  return (
    <div>
      <h1>This is Chapter {params.ID} Page</h1>
    </div>
  );
}