import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileSkeleton from "@/components/skeletons/UserProfileSkeleton";
import { lazy, Suspense } from "react";

const UserProfileForm = lazy(
    () => import("@/components/forms/user-profile-form/UserProfileForm"),
);

const UserProfilePage = () => {
    const { currentUser, isPending: isLoadingUser } = useGetMyUser();
    const { updateUser, isPending: isUpdatingUser } = useUpdateMyUser();

    if (isLoadingUser) {
        return <UserProfileSkeleton />;
    }

    if (!currentUser) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-xl font-semibold">
                    Unable to load user profile
                </h2>
                <p className="text-gray-500">Please try refreshing the page.</p>
            </div>
        );
    }

    return (
        <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfileForm
                currentUser={currentUser}
                onSave={updateUser}
                isLoading={isUpdatingUser}
            />
        </Suspense>
    );
};

export default UserProfilePage;
