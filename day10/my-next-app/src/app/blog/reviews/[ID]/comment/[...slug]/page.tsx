export default async function IndividualCommentPage({ 
  params: { slug, ID } 
}: { 
  params: { slug: string[], ID: string }
}) {
  return (
    <div>
      <h1>This is comment {slug.join('/')} of review {ID}</h1>
    </div>
  );
}