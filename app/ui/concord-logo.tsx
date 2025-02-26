import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function ConcordLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-16 w-16 rotate-[15deg]" />
      <p className="text-[66px]">Concord</p>
    </div>
  );
}
