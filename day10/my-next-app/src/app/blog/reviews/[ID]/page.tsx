
export default function individualReviewPage({ params }: { params: { ID: string } }) {
  return (
    <div>
      <h1>This is review {params.ID} Page</h1>
    </div>
  );
}