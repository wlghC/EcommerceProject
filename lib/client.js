import sanityClient from  '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'z8ys7e1e',
    dataset: 'production',
    apiVersion: '2025-03-11',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKE 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);