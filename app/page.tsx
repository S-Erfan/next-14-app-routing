import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container h-[120vh]">
        <div className="mt-4 card">
          <div className="w-full h-[50vh] grid place-content-center">
            <h1 className="title">Banner</h1>
          </div>
        </div>
        <div className="w-full flex justify-between items-center h-[30vh] gap-4 mt-4 ">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              className="h-full w-full card grid place-content-center"
              key={i}
            >
              Brand
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
