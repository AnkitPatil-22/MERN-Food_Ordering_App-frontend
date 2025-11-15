import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const { currentUser, isPending: isLoadingUser } = useGetMyUser();
    const { updateUser, isPending: isUpdatingUser } = useUpdateMyUser();

    if (isLoadingUser) {
        return <span>Loading...</span>;
    }

    if (!currentUser) {
        return <span>Unable to load user profile</span>;
    }

    return (
        <UserProfileForm
            currentUser={currentUser}
            onSave={updateUser}
            isLoading={isUpdatingUser}
        />
    );
};

export default UserProfilePage;
