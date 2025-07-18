'use client';

import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={() => router.push('/Doc')}>Go to Docs</button>
      <button onClick={() => router.push('/Doc/chapters/1')}>Go to Chapter 1</button>
      <button onClick={() => router.push('/Doc/chapters/2')}>Go to Chapter 2</button>
      <button onClick={() => router.push('/Doc/chapters/3')}>Go to Chapter 3</button>
    </div> 
    );
}