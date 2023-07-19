This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## R3DY UI 

R3DY UI is a component library that allows developers to import 3D components into their existing products. Typically, implementing 3D components requires extensive knowledge of a 3D library, however, with R3DY UI the process is streamlined and simple to understand. With this library you will be able to import sliders, text fields, switches, buttons as well as loaders seamlessly and without any previous 3D experience. 


https://github.com/oslabs-beta/r3Dy-Web/assets/128100544/39f32103-2ab1-4c56-841a-323f2211b14b


## Getting Started

'npm install r3dy'

Once youve installed the npm package, its time to add a component to your project. In the code snipped below, you can see how this is implemented.


![Screen Shot 2023-07-18 at 5 25 37 PM](https://github.com/oslabs-beta/r3Dy-Web/assets/128100544/b75fbe71-98e2-46e4-aab4-78a30b773027)

However, there are a few things you will want to note. First - You wante to make sure that you have imported the necessary dependencies. Import the desired component from r3dy as well as Canvas from @react-three/fiber. Afterwards you need to include the 'use client' at the top of the page. Now that youve included dependencies, wrap your component in a Canvas tag. Make sure to include shadows in the canvas tag or they will not show up.

  Note: As you can see, I have nested the Canvas in 2 divs. The first div is meant to contain the Canvas. By nature Canvas will try to fill as much space as its allowed. If it is not nested in a div and you have any sort of margin or padding, it will constantly expand to fit those margins. The second div is used to adjust the placement of the first. As mentioned, Canvas took up the entire space of the first div. Now that its contained, you will need another to move it about the page. 

  
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
