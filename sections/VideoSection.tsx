export interface Props {
  subtitle: string;
  description: string;
  urlSource: string;
  width: string;
  height: string;
}

export default function ConnectingBridges({
  subtitle,
  description,
  urlSource,
}: Props) {
  return (
    <section class="w-full py-[20px] px-[20px] items-center md:px-[30px] md:py-[60px] flex flex-col md:flex-row md:justify-center md:gap-[40px] gap-[20px] bg-gray-100">
      <div class="flex flex-col md:items-start md:w-[50%] w-full gap-[15px] md:gap-[30px]">
        <div class="2xl:w-[70%]">
          <h2 class="text-3xl md:text-[42px] text-primary-550 font-sans text-center md:text-start">
            SOMOS{" "}
            <strong class="text-3xl md:text-[42px] text-primary-550 font-sans ">
              PONTE
            </strong>{" "}
            QUE{" "}
            <strong class="text-3xl md:text-[42px] text-primary-550 font-sans ">
              CONECTA IDEIAS
            </strong>
          </h2>
        </div>

        <div class="flex flex-col md:flex-col gap-[10px] w-full 2xl:w-[70%]">
          {subtitle && <p class="md:text-[16px] text-primary-550">{subtitle}
          </p>}
          {description && (
            <p class="md:text-[16px] text-primary-550">{description}</p>
          )}
        </div>
      </div>

      <video width="500" height="300" controls>
        <source src={urlSource} type="" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
