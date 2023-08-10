import Applications from "@/components/applications";
import Navbar from "@/components/navbar";

export default function Layout({ children }){
    return (<>
    <div className='h-[calc(100vh-62px)] overflow-y-scroll hide-scrollbar'>
        <main>{children}</main>
        </div>
        <Navbar/>
    </>)
}
