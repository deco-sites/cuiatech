interface Props {
  direction?: "top" | "bottom";
  variant?: "primary" | "secondary" | "accent";
  smooth?: boolean;
  rotate?: boolean;
}

const COLORS = {
  primary: "fill-base-200",
  secondary: "fill-base-200",
  accent: "fill-base-200",
};

const VARIANTS = {
  top: "top-[-1px]",
  bottom: "bottom-[-1px]",
};

const BACKGROUNDS = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export default function Separator({
  direction = "top",
  variant = "primary",
  smooth = true,
  rotate = false,
}: Props) {
  return (
    <div
      class={`w-full relative ${rotate ? "rotate-180" : ""} ${
        BACKGROUNDS[variant]
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        style={{ height: "30px" }}
        className={`absolute ${VARIANTS[direction]} left-0 right-0 w-full ${
          BACKGROUNDS[variant]
        }`}
      >
        <path
          opacity={smooth ? 0.33 : 1}
          class={`${COLORS[variant]}`}
          d="M473 67.3c-203.9 88.3-263.1-34-320.3 0C66 119.1 0 59.7 0 59.7V0h1000v59.7S937.9 85.8 905.1 89c-32.8 3.3-62.8-12.3-75.8-22.1-23.3-17.3-84-58.2-134.4-62.2S492.4 59 473 67.3z"
        />
        {smooth && (
          <>
            <path
              opacity={0.66}
              class={`${COLORS[variant]}`}
              d="M734 67.3c-45.5 0-77.2-23.2-129.1-39.1-28.6-8.7-150.3-10.1-254 39.1s-91.7-34.4-149.2 0C115.7 118.3 0 39.8 0 39.8V0h1000v36.5S971.8 18 907.9 18c-97.7.1-132.2 49.3-173.9 49.3z"
            />
            <path
              class={`${COLORS[variant]}`}
              d="M766.1 28.9c-200-57.5-266 65.5-395.1 19.5-129-46.6-129-43-186.2-27.8-56.8 15.2-52.5 24.3-94.9 31.9C28.6 63.7 0 0 0 0h1000s-9.9 40.9-83.6 48.1-86.8-1.1-150.3-19.2z"
            />
          </>
        )}
      </svg>
    </div>
  );
}
