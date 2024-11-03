import Image from "next/image";

export default function Posts() {
  const posts = [
    "/imgs/integracao/posts-grid.svg",
    "/imgs/integracao/posts-grid.svg",
    "/imgs/integracao/posts-grid.svg",
    "/imgs/integracao/posts-grid.svg",
    "/imgs/integracao/posts-grid.svg",
    "/imgs/integracao/posts-grid.svg"
  ]
  return (
    <>
      <div className="px-10 pt-0 pb-12 md:px-40 md:py-24 bg-customGreen1">
        <h1 className='font-openSans font-bold text-xl md:text-4xl text-[#354D4D] md:pb-4'>Últimas Postagens</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-1 justify-center items-center">
           {posts.map((post, index) => (
            <div key={index}>
              <Image
              src={post}
              width={400}
              height={400}
              className="w-[200px] h-[200px] lg:w-full lg:h-full"
              />
            </div>
           ))}
          </div>
        </div>
      </div>
    </>
  );
}
