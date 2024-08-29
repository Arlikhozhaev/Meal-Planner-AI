import { Vcomponent } from "@/components/component/vcomponent";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return <ClerkProvider> <Vcomponent /></ClerkProvider>
}