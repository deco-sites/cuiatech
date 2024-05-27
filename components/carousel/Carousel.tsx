import Deposition, {
  Deposition as DepositionsProps,
} from "site/components/ui/Deposition.tsx";

export interface Props {
  /**
   * @title Depositions
   */
  depositions: DepositionsProps[];
}

export default function Component({ depositions }: Props) {
  return (
    <>
      <div class="relative w-full bg-base-200">
        <div className="cuia-scrollbar flex justify-start p-8 gap-12 overflow-x-scroll">
          {depositions.map(({ description, image }, index) => (
            <div class="">
              <Deposition
                description={description}
                image={image}
                color={index % 2 === 0 ? "primary" : "secondary"}
                key={`fst-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
