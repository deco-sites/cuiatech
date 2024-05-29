import Map from "./Map.tsx";

export interface Props {
  selectedStates?: string[];
  numberOfProjects?: string;
  numberOfImpactatedPeoples?: string;
  /** @format html */
  headquarters?: string;
}

export default function Ecosystem(
  {
    selectedStates,
    numberOfProjects = "+",
    numberOfImpactatedPeoples = "+",
    headquarters,
  }: Props,
) {
  return (
    <div class="w-full bg-white justify-center flex-col gap-10 py-6">
      <h2 class="text-4xl text-center text-accent font-semibold">
        Nosso ecossistema
      </h2>
      <div class="flex lg:container flex-row max-sm:flex-col lg:max-w-7xl lg:mx-auto mx-5 md:mx-10 justify-evenly items-center gap-4">
        <div class="flex max-sm:w-full w-[24rem] max-md:w-1/2">
          <Map selectedStates={selectedStates} />
        </div>

        <div class="flex gap-4 lg:items-center flex-col lg:flex-row max-sm:w-full max-md:w-1/2">
          <div class="flex gap-4">
            <div class="flex aspect-square flex-col gap-1 rounded-full justify-center items-center w-32 h-32 sm:w-44 p-6 sm:h-44 bg-gray-200">
              <span class="text-info text-3xl sm:text-5xl font-semibold">
                {numberOfProjects || "+"}
              </span>
              <p class="text-center text-secondary-content font-semibold text-sm sm:text:2xl">
                Projetos executados
              </p>
            </div>
            <div class="flex flex-col aspect-square gap-1 rounded-full justify-center items-center  w-32 h-32 sm:w-44 p-6 sm:h-44 bg-gray-200">
              <span class="text-info text-3xl sm:text-5xl font-semibold">
                {numberOfImpactatedPeoples || "+"}
              </span>
              <p class="text-center text-secondary-content font-semibold text-sm sm:text:2xl">
                Pessoas impactadas
              </p>
            </div>
          </div>
          {headquarters && (
            <div class="inline-flex flex-col bg-gray-200 rounded-3xl p-6 gap-3 w-fit">
              <h5 class="text-xl font-semibold text-accent">
                Sedes
              </h5>
              <div
                class="text-secondary-content"
                dangerouslySetInnerHTML={{ __html: headquarters }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
