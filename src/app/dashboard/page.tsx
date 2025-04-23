export default function DashboardPage() {
  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">User Dashboard</h1>
      <div className="bg-white rounded-xl shadow p-8 space-y-4">
        <p className="text-lg text-gray-700">Welcome to your dashboard! Here you can manage your profile, view your uploads, and track your activity.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-indigo-50 rounded-lg p-4">
            <h2 className="font-bold text-indigo-700 mb-2">My Artworks</h2>
            <p className="text-gray-600">View and manage your uploaded art.</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4">
            <h2 className="font-bold text-indigo-700 mb-2">Account Settings</h2>
            <p className="text-gray-600">Update your profile and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
