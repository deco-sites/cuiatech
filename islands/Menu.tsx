import { useSignal } from "@preact/signals";
import { SiteNavigationElement } from "apps/commerce/types.ts";
import Button from "site/components/ui/Button.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  navItems?: SiteNavigationElement[] | null;
}

export default function Island(props: Props) {
  const menuOpen = useSignal(false);
  return (
    <div class="flex flex-col mlg:hidden">
      <Button
        class="btn-sm btn-ghost rounded-md w-12 h-4 sm:flex items-center justify-center hover:scale-105 transition:all ease-in-out duration-300 z-30"
        aria-label="search icon button"
      >
        <Icon
          id="Bars3"
          size={24}
          strokeWidth={0.2}
          fontWeight={600}
          className={menuOpen.value
            ? "text-primary-content"
            : "text-secondary-content"}
          onClick={() => {
            menuOpen.value = !menuOpen.value;
            console.log(menuOpen.value);
          }}
        />
      </Button>
      {menuOpen.value && (
        <div class="absolute top-0 left-0 w-full z-20 bg-primary bg-opacity-90">
          <nav class="w-full flex flex-col items-center justify-center">
            <ul class="w-full flex flex-col gap-3 items-center p-4 pt-24">
              {props.navItems?.map((node) => (
                <li class="w-full text-primary-content px-6 py-2 cursor-pointer lg:text-sm xl:text-[16px] hover:bg-info">
                  <a href={node.url}>
                    <span>{node.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
