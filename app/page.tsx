import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className=" bg-white text-black">
      <NavBar/>
      {/* <section className="px-20 py-10 bg-white text-black">
        <div className="text-2xl font-bold">
          Recomendations
        </div>

        <div className="flex justify-between">
          <div>
            <div className="text-xl">
              Individuals
            </div>
          </div>
          <div>
            <div className="text-xl">
              Groups
            </div>
          </div>
        </div>
      </section> */}
      <section className="px-20 py-10">
        <h2 className="text-2xl font-bold mb-8">Recommendations</h2>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          {/* Card 1 */}

          {/* Replace with shadcn Cards */}
          <div className="p-6 rounded-2xl shadow-md flex-1">
            <h3 className="text-xl font-bold mb-2">Individuals</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
              ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl shadow-md flex-1">
            <h3 className="text-xl font-bold mb-2">Groups</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
              ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </div>
        </div>
      </section>
      <section className="px-20 py-10">
        <h2 className="text-2xl font-bold mb-8">Library Status</h2>
      </section>
    </div>
  );
}
