import AddStudentForm from '../components/AddStudentForm/AddStudentForm';

export default function StudentsPage() {
  return (
    <div className="space-y-10">
      {/* Current Students */}
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Students</h2>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Add New Student */}
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Student</h2>
        <AddStudentForm />
      </div>
    </div>
  );
}
