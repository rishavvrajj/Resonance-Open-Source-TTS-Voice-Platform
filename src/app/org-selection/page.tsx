import { OrganizationList } from "@clerk/nextjs";

export default function OrgSelectionPage () {
    return (
        <div className="flex min-h-screen justify-center items-center bg-background">
            <OrganizationList
                hidePersonal
                afterCreateOrganizationUrl="/"
                afterSelectOrganizationUrl="/"
                appearance={{
                    elements : {
                        rootbox : "mex-auto",
                        card : "shadow-lg"
                    },
                }}
            />
        </div>
    )
};