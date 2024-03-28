import { Sidebard } from "../../components";

export default function DashboardLayout({ children } : { children: React.ReactNode; }) {
    return (
        <div className="flex h-screen">
            <Sidebard/>
            <div className="w-screen h-screen overflow-hidden overflow-y-auto">
                { children }
            </div>
        </div>
    );
}