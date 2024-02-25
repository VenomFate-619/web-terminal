import dynamic from "next/dynamic";

const ShellComponent = dynamic(() => import("@src/components/shell"), {
  ssr: false,
});

export default function Home() {
  return <div className="h-screen w-screen" >
    <ShellComponent />
  </div>
}
