export interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  subtitle?: string;
  description?: string;
  urlSource?: string;
  width?: string;
  height?: string;
}

export default function ConnectingBridges({
  title,
  subtitle,
  description,
  urlSource,
  width = "600",
  height = "300",
}: Props) {
  return (
    <section class="w-full bg-base-200">
      <div class="max-w-7xl mx-auto py-4 px-4 items-center md:px-6 md:py-16 flex flex-col md:flex-row md:justify-center md:gap-10 gap-5">
        <div class="flex flex-col md:items-start w-full md:w-1/2 gap-4 md:gap-6">
          <div class="font-futura text-3xl md:text-4xl">
            <div class="text-secondary-content text-center md:text-start leading-10">
              {title}
            </div>
          </div>
          <div class="font-futura flex flex-col md:flex-col gap-3 w-full md:text-base text-secondary-content xl:w-10/12">
            {subtitle && <p>{subtitle}</p>}
            {description && <p>{description}</p>}
          </div>
        </div>
        <video width={width} height={height} controls>
          <source src={urlSource} type="" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
