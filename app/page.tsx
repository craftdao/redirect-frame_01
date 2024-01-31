import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata(
  {
  buttons: [
      {label: 'Subscribe', action: 'post_redirect'}
  ],
  image: 'https://redirect-frame-01-craftdao.vercel.app/video.png',
  post_url: 'https://redirect-frame-01-craftdao.app/api/frame',       
});

export const metadata: Metadata = {
  title: 'STVN Frame',
  description: 'LFG',
  openGraph: {
    title: 'STVN',
    description: 'Trailer',
    images: ['https://redirect-frame-01-craftdao.vercel.app/video.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/video.png'}/>
    </>
  );
}
