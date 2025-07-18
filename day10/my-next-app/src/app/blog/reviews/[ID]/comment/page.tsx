


export default function commentPage({ params }: { params: { ID: string } }) {
  return (
    <div>
      <h1>This is comment page for review {params.ID}</h1>
    </div>
  );
}