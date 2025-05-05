import Profile from "./Profile";

export default function ProfilePage() {
    return <div>
        <h1>Profile Details</h1>
        <Profile user={{ id: 1, name: 'Subramanian' }} />
        <Profile user={{ id: 2, name: 'Murugan' }} />
        <Profile user={{ id: 3, name: 'Karthik' }} />
        <Profile user={{ id: 4, name: 'Ram' }} />
        <Profile user={{ id: 5, name: 'Simon' }} />
        <Profile  />
    </div>
}